<p align="center">
  <img src="./public/mascot.png" alt="Fantastic English Class" width="96" height="96" />
</p>

<h1 align="center">Fantastic English Class</h1>

<p align="center">
  Landing bilingüe (español / inglés) para una escuela de inglés independiente
  en Chihuahua, México.<br />
  Una sola página, enfocada en un objetivo: que la gente conozca las clases y la
  contacte por WhatsApp, correo o formulario. SEO-first, sin base de datos.
</p>

<p align="center">
  <img alt="Next.js 16" src="https://img.shields.io/badge/Next.js-16-000?logo=nextdotjs" />
  <img alt="React 19" src="https://img.shields.io/badge/React-19-149eca?logo=react" />
  <img alt="Tailwind CSS v4" src="https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwindcss&logoColor=white" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-strict-3178c6?logo=typescript&logoColor=white" />
</p>

## Qué es

Una **landing one-page** que presenta a la maestra, sus clases (particulares,
niños, conversación, exámenes, negocios, regularización), su experiencia y
certificaciones, y facilita el contacto. Bilingüe con español como idioma
principal (raíz `/`) e inglés bajo `/en`. Pensada para ser rápida, encontrable
en Google y fácil de mantener: todo el contenido y los datos de contacto viven
en un par de archivos.

## Características

- **Bilingüe (ES/EN)** — español en la raíz, inglés en `/en`, con detección de
  idioma del navegador, hreflang recíproco y un toggle.
- **SEO server-first** — Metadata API, JSON-LD (`LanguageSchool`, `Person`,
  `WebSite`), sitemap/robots/manifest basados en archivos y OG images dinámicas.
- **Contacto real** — formulario que envía por Resend (server action) con
  verificación reCAPTCHA v3 opcional, más botón directo de WhatsApp y correo.
- **Diseño con carácter** — estética comic-friendly (mascota de marca, acentos
  rosa/verde) en un registro claro y profesional, con animaciones sutiles.
- **Cero backend** — sin base de datos, sin login. Se deploya y se muestra sin
  configurar ninguna variable de entorno.

## Stack

| Capa               | Elección                                             |
| ------------------ | ---------------------------------------------------- |
| Framework          | Next.js 16 (App Router, React 19, Server Components) |
| Lenguaje           | TypeScript (strict)                                  |
| Estilos            | Tailwind CSS v4 (CSS-first `@theme`)                 |
| Fuentes            | Geist Sans (texto) + Fredoka (display)               |
| Email              | Resend (server action)                               |
| Anti-bot           | reCAPTCHA v3 (opcional)                              |
| Package manager    | Bun                                                  |
| Deploy             | Vercel                                               |

## Quick start

```bash
bun install
cp .env.example .env   # opcional — el sitio corre sin ninguna variable
bun run dev            # http://localhost:3000  (ES)  ·  /en  (EN)
```

## Scripts

| Script                 | Qué hace                                              |
| ---------------------- | ---------------------------------------------------- |
| `bun run dev`          | Dev server (Turbopack)                               |
| `bun run build`        | Build de producción                                  |
| `bun run verify`       | format + lint + typecheck + circular-deps + build    |
| `bun run knip`         | Detecta código y dependencias sin usar               |
| `bun run format:fix`   | Formatea con Prettier                                |

## Configuración

Todos los datos del cliente (nombre, WhatsApp, correo, redes, certificaciones)
viven en **`lib/site.ts`** como constantes editables. El texto visible vive en
los diccionarios **`lib/i18n/es.ts`** y **`lib/i18n/en.ts`**.

Las variables de entorno son **todas opcionales** (ver
[`.env.example`](./.env.example)): `RESEND_API_KEY` activa el envío del
formulario, las claves de reCAPTCHA activan la protección anti-bot, y
`NEXT_PUBLIC_APP_URL` fija el dominio canónico. Sin ellas, el sitio igual
renderiza y se puede deployar.

## Deploy

Se deploya en **Vercel** (autodetecta Next.js). No requiere variables para la
primera publicación — ideal para mostrar la landing ya en línea. Configura
`NEXT_PUBLIC_APP_URL` con el dominio real y las claves de Resend/reCAPTCHA
cuando quieras activar el formulario de contacto.

## Documentación

`AGENTS.md` documenta la arquitectura, convenciones e invariantes del proyecto
para quien lo mantenga (humano o agente de IA).
