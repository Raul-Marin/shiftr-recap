# Recap — Research Report · Shift+R

Informes de research de la comunidad [Shift+R](https://shiftr.pro). Misma estructura visual; cada sesión es un archivo de datos.

**Home (índice de sesiones) →** [raul-marin.github.io/shiftr-recap](https://raul-marin.github.io/shiftr-recap/)
**Sesión 1 →** [/1/](https://raul-marin.github.io/shiftr-recap/1/)
**Sesión 2 →** [/2/](https://raul-marin.github.io/shiftr-recap/2/)

---

## Stack

- [Astro](https://astro.build) (estático) + CSS propio
- Tipografías: **Gooper SemiBold** + **GT Walsheim**
- Gráficas: Chart.js (solo cliente, en páginas con datos)
- Deploy: GitHub Pages via Actions

## Desarrollo

```bash
npm install
npm run dev
```

Abrir la URL que imprime Astro (con base `/shiftr-recap`).

```bash
npm run build    # → dist/
npm run preview
```

## Estructura

```
src/
  data/
    types.ts        # contrato compartido entre sesiones (+ UpcomingSession)
    recap-01.ts     # contenido sesión 1 (accent, teaser, etc.)
    recap-02.ts     # contenido sesión 2
    index.ts        # recaps[] + upcomingSessions[] (sesiones anunciadas, sin publicar)
  components/
    RecapPage.astro # plantilla única de sesión (diseño + selector de sesiones)
    RecapLogo.astro
  pages/
    index.astro     # → Home: intro + próxima sesión + archivo de sesiones publicadas
    1/index.astro   # → Recap [1]
    2/index.astro   # → Recap [2]
  styles/global.css
public/
  favicon.png
  logo.jpg
```

Cada sesión tiene su propio color de acento (`accent`/`accentActive` en el data file) que sobreescribe `--primary` solo en esa página: se ve en el CTA, el subrayado de enlaces, el radar de gráficas y el punto del selector de sesiones del nav.

## Deploy (GitHub Pages)

El build estático se publica en `docs/` (rama `main`). Pages apunta a **main → /docs**.

```bash
npm run build
rm -rf docs && mkdir docs && cp -R dist/. docs/ && touch docs/.nojekyll
```

Luego commit + push de `docs/`.


## Añadir una nueva sesión

1. Anuncia la fecha en `upcomingSessions` (`src/data/index.ts`) — aparece como "Próximamente" en el home y como pestaña deshabilitada en el nav de las demás sesiones.
2. Cuando tengas el contenido, crea `src/data/recap-0N.ts` con el mismo shape que `recap-01.ts` (incluye `accent`, `accentActive` y `teaser`).
   - Opcional: añade `resources` (`audioSrc`, `notebookUrl`, `infographicSrc`) para mostrar, justo debajo del hero, un reproductor de audio, un enlace a un cuaderno de NotebookLM y un enlace a una infografía resumen. Coloca los archivos en `public/audio/` y `public/images/`. Si no se define, esa barra no se muestra.
3. Regístrala en `recaps` (`src/data/index.ts`) y quítala de `upcomingSessions`.
4. Crea `src/pages/N/index.astro` (copia el patrón de `1/index.astro` o `2/index.astro`).
5. Pon `published: true`. El diseño no cambia: `RecapPage` reutiliza la misma plantilla y el home/nav se actualizan solos.

Próxima sesión anunciada: **29 de julio de 2026** (Recap [3], pendiente de contenido).
