# Portfolio · José Antonio Ocampo

Sitio personal construido con **Vite + React + TypeScript + Tailwind CSS**, listo para iterar en [Lovable](https://lovable.dev) o desplegar en Vercel/Netlify.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:8080

```bash
npm run build      # genera /dist
npm run preview    # previsualiza el build
```

## Publicar en Lovable (recomendado)

Lovable es la mejor opción si quieres seguir iterando el portfolio con prompts de IA.

1. Sube este proyecto a un nuevo repositorio en GitHub:
   ```bash
   git init
   git add .
   git commit -m "Portfolio inicial"
   git branch -M main
   git remote add origin https://github.com/<tu-usuario>/portfolio.git
   git push -u origin main
   ```
2. Entra a https://lovable.dev → **New project** → **Import from GitHub** y selecciona el repo.
3. Lovable detecta Vite + React automáticamente. Pulsa **Publish** para obtener tu URL `*.lovable.app`.
4. Para dominio propio: en Lovable → *Project Settings → Domains* → conecta tu dominio.

## Publicar en Vercel (alternativa rápida)

1. Sube el repo a GitHub (mismos pasos de arriba).
2. Entra a https://vercel.com → **Add New → Project** → importa el repo.
3. Vercel detecta Vite. Deja los defaults y pulsa **Deploy**.

## Publicar en Netlify

1. https://app.netlify.com → **Add new site → Import existing project** → conecta GitHub.
2. Build command: `npm run build`. Publish directory: `dist`. Pulsa **Deploy site**.

## Estructura

```
portfolio-lovable/
├─ public/
│  ├─ favicon.svg
│  └─ mi-historia.pdf
├─ src/
│  ├─ components/
│  │  ├─ Nav.tsx
│  │  ├─ Hero.tsx
│  │  ├─ Historia.tsx
│  │  ├─ Proyectos.tsx
│  │  ├─ Experiencia.tsx
│  │  ├─ Educacion.tsx
│  │  ├─ Logros.tsx
│  │  ├─ Galeria.tsx
│  │  ├─ Contacto.tsx
│  │  ├─ Footer.tsx
│  │  └─ Placeholder.tsx
│  ├─ App.tsx
│  ├─ main.tsx
│  └─ index.css
├─ index.html
├─ tailwind.config.ts
├─ vite.config.ts
└─ package.json
```

## Cómo añadir tus fotos

1. Coloca las imágenes en `public/` (por ejemplo `public/hero.jpg`).
2. En el componente correspondiente, pasa `src="/hero.jpg"` al `<Placeholder>`:
   ```tsx
   <Placeholder label="Foto profesional" src="/hero.jpg" />
   ```
3. Los placeholders con patrón a rayas desaparecen cuando hay imagen real.

## Personalización rápida

- **Color de acento:** edita `--acc` en `src/index.css` (línea ~7) y el `accent` en `tailwind.config.ts`.
- **Datos personales:** cada sección vive en su propio archivo dentro de `src/components/`.
- **Tipografías:** se cargan desde Google Fonts en `index.html`.

## Stack

- Vite 5
- React 18 + TypeScript
- Tailwind CSS 3
- Sin dependencias adicionales — máximo control y peso mínimo.
