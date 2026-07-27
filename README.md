# Recap — Research Report · Shift+R

Informes de research de la comunidad [Shift+R](https://shiftr.pro). Misma estructura visual; cada sesión es un archivo de datos.

**Live →** [raul-marin.github.io/shiftr-recap-1](https://raul-marin.github.io/shiftr-recap-1/)  
**Sesión 2 →** [/2/](https://raul-marin.github.io/shiftr-recap-1/2/) (stub hasta tener el contenido)

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

Abrir la URL que imprime Astro (con base `/shiftr-recap-1`).

```bash
npm run build    # → dist/
npm run preview
```

## Estructura

```
src/
  data/
    types.ts        # contrato compartido entre sesiones
    recap-01.ts     # contenido sesión 1
    recap-02.ts     # contenido sesión 2 (rellenar)
  components/
    RecapPage.astro # plantilla única (diseño)
    RecapLogo.astro
  pages/
    index.astro     # → Recap [1]
    2/index.astro   # → Recap [2]
  styles/global.css
public/
  favicon.png
  logo.jpg
```

## Deploy (GitHub Pages)

El build estático se publica en `docs/` (rama `main`). Pages apunta a **main → /docs**.

```bash
npm run build
rm -rf docs && mkdir docs && cp -R dist/. docs/ && touch docs/.nojekyll
```

Luego commit + push de `docs/`.


## Añadir / completar la sesión 2

1. Edita `src/data/recap-02.ts` con el mismo shape que `recap-01.ts`.
2. Pon `published: true` cuando esté listo.
3. El diseño no cambia: `RecapPage` reutiliza la misma plantilla.

Cuando tengas el informe de la sesión del **11 de mayo**, pásalo y lo volcamos al archivo de datos.
