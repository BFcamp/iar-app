-- 002_cadenas.sql — modo profundo: cadena fisiopatológica por pregunta
-- y citas de eslabones dentro de las páginas de Notas.
--
-- Correr en el panel de Supabase (SQL editor). No lo ejecuta la app.

begin;

-- ─────────────────────────────────────────────────────────────
-- preguntas: el corpus. Hasta ahora vivía solo dentro de index.html
-- (BANCO + BANCO2..BANCO5); la Edge Function necesita leerlo desde
-- acá porque el enunciado no puede llegar del cliente.
-- La pk son los ids del front (a25-11, f26-1-2), que es con lo que
-- hablan cadenas.pregunta_id y citas.pregunta_id. origen_id guarda
-- el id del pack (PC-004) cuando la pregunta viene de ahí.
-- Lo carga scripts/subir-preguntas.mjs.
-- ─────────────────────────────────────────────────────────────
create table if not exists public.preguntas (
  id            text primary key,
  origen_id     text,
  bloque        text,
  fecha         text,
  caso_clinico  text,
  enunciado     text,
  opciones      jsonb,
  n_correctas   int     not null default 1,
  revisar       boolean not null default false
);

-- ─────────────────────────────────────────────────────────────
-- cadenas: una fila por pregunta. El payload completo va en jsonb,
-- pero el mecanismo queda además como columna propia: es lo que se
-- filtra (todas las preguntas que comparten mecanismo), y dentro del
-- jsonb no se puede indexar cómodo ni tipar.
-- ─────────────────────────────────────────────────────────────
create table if not exists public.cadenas (
  pregunta_id      text primary key,
  mecanismo_indice text not null,
  payload          jsonb not null,
  modelo           text,
  generado_en      timestamptz not null default now()
);

create index if not exists cadenas_mecanismo_indice_idx
  on public.cadenas (mecanismo_indice);

-- ─────────────────────────────────────────────────────────────
-- cadenas_fallidas: cuando el modelo devuelve algo que no parsea,
-- se guarda el crudo acá para poder revisarlo a mano. No bloquea
-- la vista: la función responde un error legible y sigue.
-- ─────────────────────────────────────────────────────────────
create table if not exists public.cadenas_fallidas (
  id          bigserial primary key,
  pregunta_id text,
  crudo       text,
  creado_en   timestamptz not null default now()
);

create index if not exists cadenas_fallidas_pregunta_id_idx
  on public.cadenas_fallidas (pregunta_id);

-- ─────────────────────────────────────────────────────────────
-- citas: referencia a un eslabón, nunca su texto. El texto sale
-- siempre de cadenas.payload, así que si una cadena se regenera
-- las citas ya insertadas en las notas muestran la versión nueva.
-- ─────────────────────────────────────────────────────────────
create table if not exists public.citas (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users (id) on delete cascade,
  pagina_id   uuid not null references public.paginas (id) on delete cascade,
  pregunta_id text not null,
  eslabon     int  not null check (eslabon between 1 and 5),
  creado_en   timestamptz not null default now()
);

create index if not exists citas_pagina_id_idx on public.citas (pagina_id);

-- ─────────────────────────────────────────────────────────────
-- RLS, igual que el resto de las tablas de la app.
-- cadenas y cadenas_fallidas son contenido compartido (no son de
-- un usuario): se leen con sesión y solo las escribe la Edge
-- Function, que entra con la service_role key y saltea RLS.
-- ─────────────────────────────────────────────────────────────
alter table public.preguntas         enable row level security;
alter table public.cadenas           enable row level security;
alter table public.cadenas_fallidas  enable row level security;
alter table public.citas             enable row level security;

drop policy if exists preguntas_lectura on public.preguntas;
create policy preguntas_lectura on public.preguntas
  for select to authenticated using (true);

drop policy if exists cadenas_lectura on public.cadenas;
create policy cadenas_lectura on public.cadenas
  for select to authenticated using (true);

drop policy if exists citas_propias on public.citas;
create policy citas_propias on public.citas
  for all to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

commit;
