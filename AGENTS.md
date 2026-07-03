<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# Fantastic English Class — agent & contributor guide

Landing bilingüe (one-page) para **Fantastic English Class**, una escuela de
inglés independiente en Chihuahua, México. Su objetivo único es que la gente
conozca la oferta y contacte a la maestra por WhatsApp, correo o el formulario.
Los datos concretos de la maestra viven en `lib/site.ts` (no en esta doc). Sin
base de datos, sin autenticación, sin panel.

## 1. Stack

- **Next.js 16** (App Router, React 19, Server Components) — file-based routing.
  `cookies()`/`headers()`/route `params` son async: siempre `await`.
- **TypeScript (strict)** — sin `any`.
- **Tailwind CSS v4** (CSS-first `@theme` en `app/globals.css`).
- **Bun** — package manager + runner. Vercel buildea con Node; Bun es para
  instalar y correr scripts.
- **Resend** — envío del formulario de contacto (server action).
- **reCAPTCHA v3** — verificación anti-bot del formulario (opcional, env-gated).
- **Geist Sans** (texto) + **Fredoka** (display) vía `next/font` (self-hosted).
- **Deploy**: Vercel.

No hay DB, ORM, auth, PWA offline, analytics ni panel de administración: es una
landing de marketing deliberadamente simple.

## 2. Estructura

```
app/
  layout.tsx            Metadata global (ES), fonts, <Providers>
  globals.css           Design system Tailwind v4 (@theme) — paleta + animaciones
  page.tsx              Landing ES (raíz) + JSON-LD
  en/page.tsx           Landing EN (/en) + JSON-LD
  opengraph-image.tsx   OG social ES · en/opengraph-image.tsx OG social EN
  icon.svg              Favicon (mascota)
  sitemap.ts robots.ts manifest.ts
components/
  brand/    Mascot (SVG oficial), FaceMark (alias), Logo
  layout/   Header, Footer, LocaleToggle
  marketing/ Landing (compositor) + Hero, About, Services, WhyMe,
             Credentials, ContactSection
  contact/  ContactForm (client), useRecaptcha
  shared/   Container, Section, SectionHeading, WhatsAppButton, ScrollCue
  seo/      JsonLd
  icons/    Iconos SVG inline (barrel) + WhatsAppIcon
  ui/       button, card, input, label, textarea, badge, Spinner
lib/
  i18n/     config (translate/createT), es.ts, en.ts, routes.ts, index.tsx (provider)
  contact/  send.ts (server action), types.ts
  captcha/  verify.ts (reCAPTCHA v3 server-side)
  seo/      schema.ts (LanguageSchool, Person, WebSite)
  site.ts   SINGLE SOURCE de los datos del cliente
  og.tsx    Generador de OG images (next/og)
  env.ts    Gate de env (solo avisa, nunca rompe)
  utils.ts  cn, siteUrl, absoluteUrl
  errors.ts result.ts validation.ts  (infra del server action)
proxy.ts    Middleware de detección de idioma (Next 16)
public/     mascot.svg
```

## 3. Convenciones

- **Arrow functions en todo** — enforced por ESLint (`func-style`,
  `react/function-component-definition`). Nada de `function`.
- **Server Components primero**; `"use client"` solo donde hay interacción
  (`Header`, `ContactForm`, `LocaleToggle`, `I18nProvider`).
- **Tokens de diseño, nunca hex** en componentes. La paleta vive en
  `app/globals.css` como CSS vars (`brand`, `leaf`, `accent-*`, `ink-*`,
  `surface`, `surface-raised`, `surface-sunken`, `line`). Un único esquema
  claro (no hay dark mode).
- **i18n**: claves planas punteadas en `lib/i18n/{es,en}.ts`. `es.ts` es la
  fuente de las claves (`TranslationKey` se deriva de ahí) y `en.ts` debe
  cubrir **todas**. `createT(locale)` en Server Components; `useT()` en client.
- **Todo el copy vive en los diccionarios.** Ningún texto visible se hardcodea
  en un componente.
- **Datos del cliente solo en `lib/site.ts`.** Teléfono, correo, redes,
  certificaciones, nombre: un solo archivo, editable con `const`. Los `// TODO`
  son placeholders a reemplazar antes de producción.
- **SEO server-first**: Metadata API, JSON-LD, sitemap/robots/manifest basados
  en archivos, OG dinámico vía `opengraph-image`.
- **Estado**: sin Zustand/Redux. El locale se deriva de la URL (no hay store).

## 4. i18n y routing

- **ES es la raíz (`/`)**, EN vive bajo `/en`. Es el mercado primario. La
  fuente de las URLs hermanas es `ROUTES` en `lib/i18n/routes.ts`.
- **Detección de idioma** (`proxy.ts`): en la primera visita sin cookie, si el
  navegador prefiere inglés, redirige 307 a `/en` una vez y persiste
  `fec_locale`. Cualquier navegación explícita ES↔EN gana. Ambas URLs quedan
  crawlables.
- **hreflang + canonical** salen de `metaAlternates(id, locale)`.

## 5. Formulario de contacto (Resend)

- `sendContactMessage` (`lib/contact/send.ts`, `"use server"`) valida los
  campos, verifica reCAPTCHA y envía por Resend. Devuelve un `Result` tipado y
  **nunca lanza** al cliente.
- Sin `RESEND_API_KEY` → devuelve error genérico (no rompe la página).
- Sin claves de reCAPTCHA → la verificación se **omite** (fail-open) para que el
  form funcione en dev; en prod, setéalas para evitar spam.

## 6. Marca

- La **mascota** (`components/brand/Mascot.tsx`) es la identidad principal:
  favicon (`app/icon.svg`), avatar del hero/about, y las OG images. El SVG es un
  trazado (potrace) provisto por el cliente; no lo redibujes a mano.
- **Animaciones**: utilidades en `globals.css` — `animate-fade-up` (entrada de
  texto, combinable con `[animation-delay:*]` para stagger), `animate-float`
  (flotación), `animate-bob`/`animate-draw`/`animate-wiggle` (los ScrollCue).
  Todas respetan `prefers-reduced-motion`.

## 7. Comandos

```bash
bun install
bun run dev        # dev server (Turbopack)
bun run build      # build de producción
bun run verify     # format + lint + typecheck + circular-deps + build (gate de CI)
bun run knip       # dead-code / dependencias sin usar
```

## 8. Deploy

Vercel autodetecta Next.js. **Ninguna env var es obligatoria** — el sitio se
puede deployar y mostrar sin configurar nada. Setea `NEXT_PUBLIC_APP_URL` al
dominio real y las claves de Resend/reCAPTCHA cuando quieras activar el
formulario. Ver `.env.example`.

## 9. Anti-patrones a evitar

- Hardcodear texto visible en un componente (va a los diccionarios).
- Hardcodear datos del cliente fuera de `lib/site.ts`.
- Usar hex en componentes en vez de tokens (`bg-brand`, `text-ink-600`, …).
- Añadir una clave a `es.ts` sin su par en `en.ts` (rompe el build).
- Introducir DB/auth/analytics "por si acaso" — está fuera de alcance.
- Redibujar la mascota: usar el SVG oficial (`app/icon.svg` / `public/mascot.svg`).

## 10. Invariants (no romper sin avisar)

1. **`en.ts` cubre todas las claves de `es.ts`.** El tipo lo fuerza; si falta
   una, el build falla.
2. **El copy vive en los diccionarios; los datos del cliente en `lib/site.ts`.**
   Nada de datos de contacto dispersos por el código.
3. **El server action nunca lanza al cliente** — siempre `Result` vía
   `safeAsync`. No filtrar `cause`/mensajes crudos.
4. **Ninguna env var es obligatoria para renderizar/deployar.** Degradar, nunca
   romper (requisito explícito del cliente para mostrar la landing publicada).
5. **ES en la raíz, EN en `/en`.** No invertir sin revisar `proxy.ts`,
   `routes.ts`, sitemap y hreflang juntos.
6. **Sin `any`, sin `console.log`** en código de producción (ESLint lo marca).

## 11. Agregar una sección — checklist

1. Añade las claves de copy a `lib/i18n/es.ts` **y** `en.ts` (mismas claves).
2. Crea `components/marketing/<Seccion>.tsx` (Server Component; `createT(locale)`).
   Usa `Section`/`SectionHeading` y tokens de color, no hex.
3. Insértala en `components/marketing/Landing.tsx` en el orden deseado.
4. Si es navegable, agrega su ancla al `Header`/`Footer` (por locale).
5. `bun run verify` en verde antes de commitear.
