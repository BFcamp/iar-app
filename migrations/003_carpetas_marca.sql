-- 003_carpetas_marca.sql — color de cada carpeta de Notas
--
-- La app ya usa n.marca en el árbol local; esta columna la hace sobrevivir a
-- la sincronización. Mientras no se corra, index.html detecta que falta,
-- reintenta el upsert sin la columna y deja los colores solo en el dispositivo.
--
-- Correr en el panel de Supabase (SQL editor).

alter table public.carpetas add column if not exists marca text;

-- null = sin color elegido: la app cae a la paleta por posición.
comment on column public.carpetas.marca is
  'Color del punto de la carpeta, en #RRGGBB. Null = lo elige la app por posición.';
