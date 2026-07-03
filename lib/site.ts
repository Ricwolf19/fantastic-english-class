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
