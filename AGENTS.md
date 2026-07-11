<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# Fantastic English Class — agent & contributor guide

Sitio bilingüe multi-ruta para **Fantastic English Class**, una escuela de
inglés independiente en Chihuahua, México. El **home es un resumen**; cada curso
(Kids, Regular, Fantastic Spanish, Especiales) tiene su **propia ruta** con
metadata + OG propios (SEO). Objetivo: que la gente conozca la oferta y contacte
a la maestra por WhatsApp, correo, el formulario o el buzón de comentarios. Los
datos concretos (contacto + cursos/horarios/precios) viven en `lib/site.ts`. Sin
base de datos, sin autenticación, sin panel.

## 1. Stack

- **Next.js 16** (App Router, React 19, Server Components) — file-based routing.
  `cookies()`/`headers()`/route `params` son async: siempre `await`.
- **TypeScript (strict)** — sin `any`.
- **Tailwind CSS v4** (CSS-first `@theme` en `app/globals.css`).
- **Bun** — package manager + runner. Vercel buildea con Node; Bun es para
  instalar y correr scripts.
- **Resend** — envío del formulario de contacto y del buzón (server action).
- **reCAPTCHA v3** — verificación anti-bot del formulario (opcional, env-gated).
- **Radix UI** (`@radix-ui/react-accordion`, `-tabs`) — primitivas accesibles,
  envueltas en estilo de la casa en `components/ui/{accordion,tabs}.tsx` (no se
  usa el CLI de shadcn ni sus tokens; se re-skinnearon a los tokens del sitio).
- **iconoir-react** — librería de iconos por defecto para componentes nuevos.
  Se conserva el barrel SVG custom (`components/icons`) para lo ya existente y el
  glifo de WhatsApp (iconoir no lo trae).
- **Geist Sans** (texto) + **Baloo 2** (display) vía `next/font` (self-hosted).
- **Vercel Analytics + Speed Insights** — métricas de tráfico y Web Vitals de
  primera parte, sin cookies y sin env vars (montados en el root layout).
- **Deploy**: Vercel.

No hay DB, ORM, auth, PWA offline ni panel de administración: es una landing de
marketing deliberadamente simple. La única telemetría es Vercel Analytics/Speed
Insights (privacy-first, sin cookies); no se añaden GA/PostHog ni similares.

## 2. Estructura

Cada ruta ES (raíz) tiene su hermana EN bajo `/en`. Slug ES ↔ EN en `ROUTES`.

```
app/
  layout.tsx            Metadata global (ES), fonts, <Providers> + WhatsAppFab
  globals.css           Design system Tailwind v4 (@theme) — paleta + animaciones
  page.tsx  en/page.tsx           Home ES / EN (resumen) + JSON-LD
  ninos/  en/kids/                Curso Kids  (page + opengraph-image)
  cursos-regulares/  en/regular/  Curso Regular
  clases-espanol/  en/spanish/    Fantastic Spanish Class
  especiales/  en/special-classes/ Cursos especiales
  contacto/  en/contact/           Contacto (página dedicada: canales + form)
  opengraph-image.tsx   OG del home (una por ruta, colocada como opengraph-image)
  og/[locale]/[section] OG compartibles por sección (campañas, no page-OG)
  sitemap.ts robots.ts manifest.ts icon.svg
components/
  brand/    Mascot (SVG oficial), FaceMark (alias), Logo
  layout/   Header (nav con estado activo), Footer, LocaleToggle, WhatsAppFab
  marketing/  Landing (home = Hero + CoursesSummary + Highlights + ContactHome).
              ContactSection (usada en /contacto). DORMANT (fuera del render,
              son entry en knip.json): About, WhyMe, Credentials, Comments
  marketing/course/  Piezas de página de curso (CourseShell, CourseHero,
              PriceTable, ScheduleCards, LevelTabs, CourseFaq, ChipList,
              ActivityList, CourseCta) + <Curso>Content compositores
  contact/  ContactForm, SuggestionForm (buzón), useRecaptcha
  currency/ CurrencyContext (provider) + CurrencyToggle + Price (toggle MXN/USD)
  shared/   Container, Section, SectionHeading, WhatsAppButton, ScrollCue
  seo/      JsonLd
  icons/    Iconos SVG inline (barrel) + WhatsAppIcon
  ui/       button, input, label, textarea, Spinner, accordion, tabs (Radix)
lib/
  i18n/     config (translate/createT), es.ts, en.ts, routes.ts, index.tsx (provider)
  contact/  send.ts (server action; `kind` contact|suggestion), types.ts
  captcha/  verify.ts (reCAPTCHA v3 server-side)
  seo/      schema.ts (LanguageSchool, Person, WebSite, Course)
  site.ts   SINGLE SOURCE: contacto, marca + `courses`/`specials` + `exchangeRate`
  pricing.ts Money {mxn?,usd?} + convert/formatCurrency (toggle MXN/USD)
  og.tsx  og-sections.ts   Generador de OG + copy/acento por sección
  utils.ts errors.ts result.ts validation.ts env.ts   (infra)
proxy.ts    Middleware de detección de idioma (Next 16)
public/     mascot.svg
```

## 3. Convenciones

- **Arrow functions en todo** — enforced por ESLint (`func-style`,
  `react/function-component-definition`). Nada de `function`.
- **Server Components primero**; `"use client"` solo donde hay interacción
  (`Header`, `ContactForm`, `SuggestionForm`, `LocaleToggle`, `WhatsAppFab`,
  `LevelTabs`, `CourseFaq`, `I18nProvider`). Las islas Radix reciben strings ya
  traducidos por el server (no llaman `createT`).
- **Tokens de diseño, nunca hex** en componentes. La paleta vive en
  `app/globals.css` como CSS vars (`brand`, `leaf`, `accent-*`, `ink-*`,
  `surface`, `surface-raised`, `surface-sunken`, `line`). Un único esquema
  **oscuro** (dark comic); no hay toggle claro/oscuro. Única excepción de hex:
  el verde de marca de WhatsApp (`#25D366`) en el FAB.
- **i18n**: claves planas punteadas en `lib/i18n/{es,en}.ts`. `es.ts` es la
  fuente de las claves (`TranslationKey` se deriva de ahí) y `en.ts` debe
  cubrir **todas**. `createT(locale)` en Server Components; `useI18n().t` en
  client.
- **Copy prosa → diccionarios; datos estructurados de cursos → `site.ts`.** El
  texto visible de framing (títulos, notas, labels) vive en los diccionarios;
  las listas repetibles y editables por la maestra (horarios, precios, temarios,
  actividades, festivales) viven bilingües en `site.courses`/`site.specials`.
- **Datos del cliente solo en `lib/site.ts`.** Contacto, marca, cursos: un solo
  archivo, editable con `const`. Precios en `{ mxn?, usd? }`; el toggle global de
  moneda (`components/currency`) muestra el equivalente convirtiendo con
  `site.exchangeRate.usdToMxn` (aprox., marcado `≈`; primer render en MXN). Los
  `// TODO` (WhatsApp, correo, redes, foto, tipo de cambio) son placeholders.
- **SEO server-first**: Metadata API, JSON-LD, sitemap/robots/manifest basados
  en archivos, OG dinámico vía `opengraph-image`.
- **Estado**: sin Zustand/Redux. El locale se deriva de la URL (no hay store).

## 4. i18n y routing

- **ES es la raíz (`/`)**, EN vive bajo `/en`. Es el mercado primario. `ROUTES`
  (`lib/i18n/routes.ts`) empareja el slug ES↔EN de cada página (`home`, `kids`,
  `regular`, `spanish`, `specials`, `contact`). Agregar una página = sumar una
  entrada aquí + su carpeta en `app/`. `Record<RouteId, …>` fuerza exhaustividad.
- `alternatePathname(pathname, target)` mapea la ruta actual a su hermana (para
  el `LocaleToggle`); `sitemap.ts` itera `ROUTES`; `proxy.ts` deriva `ES_TO_EN`
  de `ROUTES` (no requiere cambios al agregar rutas).
- **Detección de idioma** (`proxy.ts`): primera visita sin cookie + navegador en
  inglés → 307 a la hermana EN y persiste `fec_locale`. Navegación explícita
  ES↔EN gana. Ambas URLs quedan crawlables.
- **hreflang + canonical** salen de `metaAlternates(id, locale)`. Cada ruta trae
  su `opengraph-image.tsx` colocada (reusa `renderOg` + `ogSectionCopy`).

## 5. Formulario de contacto y buzón (Resend)

- `sendContactMessage` (`lib/contact/send.ts`, `"use server"`) valida, verifica
  reCAPTCHA y envía por Resend. Devuelve un `Result` tipado y **nunca lanza**.
- **`kind: "contact" | "suggestion"`**: `contact` (ContactForm) exige nombre +
  correo; `suggestion` (SuggestionForm, el buzón "Coméntanos") los hace
  opcionales y solo requiere el mensaje. Ambos comparten el mismo action, correo
  y captcha; cambia el subject/cuerpo del email.
- Sin `RESEND_API_KEY` → error genérico (no rompe). Sin claves reCAPTCHA → la
  verificación se **omite** (fail-open) para dev; en prod, setéalas.

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
- Introducir DB/auth "por si acaso" — está fuera de alcance. (La telemetría se
  limita a Vercel Analytics/Speed Insights; no añadir GA/PostHog ni tag managers.)
- Redibujar la mascota: usar el SVG oficial (`app/icon.svg` / `public/mascot.svg`).
- **Renderizar secciones con datos inventados.** Solo va al render lo verídico de
  los requerimientos. Lo que no tiene datos reales (About/Sobre mí, Credentials,
  WhyMe) queda **dormant**: archivo presente + `entry` en `knip.json`, fuera de
  `Landing`. Se rehabilita cuando haya datos reales.

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

## 11. Agregar una sección del home — checklist

1. Añade las claves de copy a `lib/i18n/es.ts` **y** `en.ts` (mismas claves).
2. Crea `components/marketing/<Seccion>.tsx` (Server Component; `createT(locale)`).
   Usa `Section`/`SectionHeading` y tokens de color, no hex.
3. Insértala en `components/marketing/Landing.tsx` en el orden deseado.
4. Si es navegable, agrega su ancla al `Header`/`Footer` (por locale).
5. `bun run verify` en verde antes de commitear.

## 12. Agregar una página de curso — checklist

1. Suma la entrada a `ROUTES` (`lib/i18n/routes.ts`): `<id>: { es, en }`.
2. Añade sus claves i18n (es + en) y sus datos en `site.courses`/`site.specials`.
3. Crea el compositor `components/marketing/course/<Curso>Content.tsx` reusando
   las piezas (`CourseHero`, `PriceTable`, `ScheduleCards`, `LevelTabs`,
   `CourseFaq`, `ChipList`, `ActivityList`, `CourseCta`).
4. Crea `app/<slug-es>/page.tsx` y `app/en/<slug-en>/page.tsx` (metadata desde
   `createT` + `metaAlternates(id, locale)`; envuelve en `CourseShell`; añade
   `courseSchema` al `JsonLd` si aplica). Añade `opengraph-image.tsx` en ambas
   (reusa `renderOg` + `ogSectionCopy`; suma el `id` a `OG_SECTIONS`).
5. Enlázala en `CoursesSummary`, `Header` y `Footer`. `bun run verify` en verde.
