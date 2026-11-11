# Portfolio · Elian Salvador — Marketing × Ciberseguridad

Web estática (HTML + CSS + JavaScript, sin frameworks ni build) con estética futurista.
Une dos perfiles: **Técnico Superior en Marketing y Publicidad** y **ASIX con perfil de ciberseguridad**.

## Estructura

```
.
├── index.html            → única página (portada, sobre mí, experiencia, curso, proyectos, contacto)
├── data/
│   └── data.js           → ✏️ TODO el contenido. Es el único archivo que tienes que editar
├── assets/
│   ├── css/style.css     → estilos y paleta (variables en :root)
│   ├── js/
│   │   ├── render.js     → lee data.js y pinta cada sección
│   │   └── effects.js    → fondo animado, terminal, reveal, menú móvil
│   └── img/favicon.svg
├── docs/                 → PDFs y evidencias de tus prácticas (opcional)
├── .gitignore
└── .nojekyll
```

## Cómo editarlo

1. Abre `data/data.js` y rellena todo lo que ponga `[EDITAR ...]`.
2. Revisa los textos marcados como BORRADOR (aspiraciones, áreas del curso, puntos de cada perfil) y **deja solo lo que sea cierto**.
3. Abre `index.html` con doble clic (o con la extensión *Live Server* de VS Code). No necesita servidor porque los datos van en un `.js`, no se cargan con `fetch`.
4. Pulsa **F12 → Consola**: te dice cuántos `[EDITAR]` quedan.

Para añadir una práctica como evidencia: sube el PDF a `docs/` (con nombre sin espacios ni tildes, p. ej. `ssh-remoto.pdf`) y en el área correspondiente añade `link: "docs/ssh-remoto.pdf"`.

## Publicar en GitHub Pages

```bash
git init
git add .
git commit -m "Primer commit: portfolio"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git push -u origin main
```

Después, en GitHub: **Settings → Pages → Build and deployment → Source: "Deploy from a branch" → Branch: `main` / `(root)` → Save**.
En uno o dos minutos estará en `https://TU-USUARIO.github.io/TU-REPO/`.

## Antes de hacerlo público (importante en un perfil de ciberseguridad)

- Revisa cada PDF de `docs/`: **sin contraseñas, claves, IPs reales, capturas con datos de personas o de tu empresa**.
- No pongas nombres de clientes, locales, plataformas internas ni datos de tu trabajo de soporte. Describe las tareas en genérico.
- No subas claves SSH ni archivos `.env`. Si lo haces por error, cambia la clave: borrar el commit no basta.

## Personalizar el estilo

- Colores: variables al principio de `assets/css/style.css` (`--cyan`, `--magenta`, `--violet`).
  Cian = lado técnico; magenta = lado marketing.
- Con `prefers-reduced-motion` activado en el sistema, las animaciones se desactivan solas.
