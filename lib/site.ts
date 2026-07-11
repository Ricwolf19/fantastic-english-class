/**
 * Single source of truth: datos de contacto, marca y ubicación de la escuela.
 *
 * Todo lo que el cliente pueda querer cambiar vive aquí. Los valores marcados
 * con `// TODO` son placeholders — reemplazalos con los datos reales de Zaida
 * antes de producción. Cambiar un teléfono/correo es editar UN archivo, nunca
 * cazar por el código.
 */

export const site = {
  brand: "Fantastic English Class",
  /** Tagline corta reutilizada en OG, manifest y footer. */
  tagline: {
    es: "Clases de inglés en Chihuahua",
    en: "English classes in Chihuahua",
  },

  teacher: {
    /** Nombre completo confirmado. */
    name: "Zaida Armenta Lourdes Payán",
    /** Nombre corto para saludos y firmas. */
    shortName: "Zaida",
    role: {
      es: "Maestra de inglés certificada",
      en: "Certified English teacher",
    },
    /** Años de experiencia enseñando. */
    yearsExperience: "8", // TODO: confirmar con la maestra
    /** Foto profesional en /public. */
    // Foto profesional en /public. `null` → el retrato usa un placeholder con
    // la inicial. Poné la ruta (p. ej. "/zaida.jpg") cuando subas la foto real.
    photo: null as string | null, // TODO: subir la foto real y apuntar aquí
  },

  contact: {
    /**
     * WhatsApp en formato E.164 SIN signos ni espacios (para el deep-link
     * wa.me). `whatsappDisplay` es la versión legible que se muestra en la UI.
     */
    whatsapp: "5216141234567", // TODO: número real
    whatsappDisplay: "+52 614 123 4567", // TODO: número real
    /** Correo a donde llegan los mensajes del formulario. */
    email: "hola@fantasticenglishclass.com", // TODO: correo real
  },

  location: {
    city: "Chihuahua",
    state: "Chihuahua",
    country: "MX",
    /** Zona/área de servicio — usada por el schema LocalBusiness. */
    areaServed: "Chihuahua, México",
    /**
     * Modalidad de clases. Ambas activas: presencial en Chihuahua y online.
     * Afecta el copy de servicios y el schema.
     */
    modes: ["in-person", "online"] as const,
  },

  social: {
    facebook: null as string | null, // TODO: URL o null
    instagram: null as string | null, // TODO: URL o null
    tiktok: null as string | null, // TODO: URL o null
  },

  /**
   * Certificaciones / credenciales de la maestra (E-E-A-T). Se listan en la
   * sección "Sobre mí" y alimentan el schema Person. Vacío = no se muestran.
   */
  credentials: [
    // TODO: reemplazar con las credenciales reales, p. ej.:
    // { es: "Certificación TEFL", en: "TEFL Certified" },
    // { es: "Cambridge C2 Proficiency", en: "Cambridge C2 Proficiency" },
  ] as ReadonlyArray<{ es: string; en: string }>,

  /**
   * Oferta de cursos: horarios, precios, temarios y actividades. Son datos del
   * cliente (editables aquí). La prosa de marketing (intros, notas, políticas)
   * vive en los diccionarios i18n. Los precios usan `{ mxn?, usd? }`: hoy solo
   * llevan su moneda nativa; agrega la otra moneda para mostrar ambas (ver
   * `lib/pricing.ts`). `accent` referencia la paleta OG (`lib/og.tsx`).
   */
  courses: {
    kids: {
      accent: "sky",
      groups: [
        {
          label: { es: "6 a 8 años", en: "Ages 6–8" },
          day: { es: "Martes", en: "Tuesday" },
          time: "3:30–4:30 pm",
        },
        {
          label: { es: "9 a 11 años", en: "Ages 9–11" },
          day: { es: "Miércoles", en: "Wednesday" },
          time: "3:30–4:30 pm",
        },
      ],
      pricing: {
        firstClass: { mxn: 150 },
        perClass: { mxn: 300 },
        monthly: { mxn: 1075 },
      },
      activities: [
        { es: "Puzles en presentaciones", en: "Puzzles in presentations" },
        { es: "Trabajo visual y auditivo", en: "Visual and auditory work" },
        {
          es: "Juegos individuales y por equipos",
          en: "Individual and team games",
        },
      ],
      topics: [
        { es: "El clima", en: "The weather" },
        { es: "Los miembros de la familia", en: "Family members" },
        { es: "Ir al doctor", en: "Going to the doctor" },
        {
          es: "El verbo to be (ser, estar, parecer)",
          en: 'The verb "to be"',
        },
        { es: "Cómo formular preguntas", en: "How to ask questions" },
      ],
    },
    regular: {
      accent: "grape",
      levels: [
        {
          label: { es: "Principiantes", en: "Beginners" },
          day: { es: "Lunes y miércoles", en: "Monday & Wednesday" },
          time: "7:30–8:30 pm",
          topics: [
            { es: "El clima", en: "The weather" },
            {
              es: "El verbo to be (ser, estar, parecer)",
              en: 'The verb "to be"',
            },
            { es: "Los números", en: "Numbers" },
          ],
        },
        {
          label: { es: "Intermedios", en: "Intermediate" },
          day: { es: "Martes y jueves", en: "Tuesday & Thursday" },
          time: "7:30–8:30 pm",
          topics: [
            {
              es: "Modal verbs (should, would, could…)",
              en: "Modal verbs (should, would, could…)",
            },
            { es: "Tiempos continuos", en: "Continuous tenses" },
          ],
        },
        {
          label: { es: "Avanzados", en: "Advanced" },
          day: { es: "Viernes", en: "Friday" },
          time: "7:30–8:30 pm",
          topics: [
            {
              es: "Situaciones reales: aeropuerto, hospital",
              en: "Real situations: airport, hospital",
            },
            {
              es: "Clases muy centradas en conversación",
              en: "Conversation-focused classes",
            },
          ],
        },
      ],
      pricing: {
        firstClass: { mxn: 150 },
        perClass: { mxn: 230 },
        monthly: { mxn: 800 },
      },
      activities: [
        { es: "Puzles en presentaciones", en: "Puzzles in presentations" },
        { es: "Trabajo visual y auditivo", en: "Visual and auditory work" },
        {
          es: "Juegos individuales y por equipos",
          en: "Individual and team games",
        },
        {
          es: "Dinámicas conversacionales para expresarte mejor",
          en: "Conversation drills to express yourself better",
        },
        {
          es: "Dinámicas de escucha con inglés nativo y fluido",
          en: "Listening drills with fluent, native English",
        },
        {
          es: "Repasos de temas cuando se necesitan",
          en: "Topic reviews whenever needed",
        },
      ],
    },
    spanish: {
      accent: "lime",
      schedule: {
        day: { es: "Sábados", en: "Saturdays" },
        time: "3:30–4:30 pm",
      },
      pricing: {
        firstClass: { usd: 15 },
        perClass: { usd: 20 },
        monthly: { usd: 45 },
      },
    },
  },

  /**
   * Tipo de cambio para el toggle MXN/USD. NO es una conversión oficial: solo
   * alimenta el equivalente aproximado que se muestra al intercambiar moneda.
   */
  exchangeRate: {
    usdToMxn: 18.5, // TODO: confirmar el tipo de cambio real con la maestra
  },

  /** Cursos especiales / festivales. Lista editable de temáticas. */
  specials: [
    { es: "Clases fantásticas de Navidad", en: "Christmas fantastic classes" },
    {
      es: "Clases fantásticas de Halloween",
      en: "Halloween fantastic classes",
    },
    {
      es: "Clases fantásticas de fiestas mexicanas",
      en: "Mexican holiday fantastic classes",
    },
    {
      es: "Clases fantásticas de fiestas americanas",
      en: "American holiday fantastic classes",
    },
    { es: "Clases fantásticas de ciencia", en: "Science fantastic classes" },
    { es: "Clases fantásticas girlie", en: "Girlie fantastic classes" },
  ] as ReadonlyArray<{ es: string; en: string }>,

  /**
   * Crédito del desarrollador (footer). Editá o vaciá según prefieras.
   */
  developer: {
    name: "Ricardo Tapia",
    url: "https://ricardotapia.dev",
  },
} as const;

/** Deep-link de WhatsApp con mensaje pre-llenado (localizable). */
export const waLink = (message: string): string =>
  `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;
