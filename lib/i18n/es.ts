/**
 * Diccionario ES — locale primario. Es la fuente de verdad de las claves:
 * `TranslationKey` se deriva de este objeto y `en.ts` debe cubrir cada clave.
 * Claves planas punteadas, agrupadas por sección. Nada de texto hardcodeado
 * en componentes: todo el copy vive aquí.
 */
export const es = {
  // ── Navegación ──────────────────────────────────────────────────────────
  "nav.about": "Sobre mí",
  "nav.services": "Clases",
  "nav.why": "Por qué yo",
  "nav.contact": "Contacto",
  "nav.cta": "Escríbeme",
  "nav.langLabel": "Cambiar idioma",

  // ── Hero ────────────────────────────────────────────────────────────────
  "hero.eyebrow": "Clases de inglés en Chihuahua",
  "hero.title": "Habla inglés con",
  "hero.titleHighlight": "confianza",
  "hero.subtitle":
    "Clases personalizadas con {teacher}, maestra certificada. A tu ritmo, con un método claro y práctico para que hables inglés de verdad, sin miedo y desde la primera sesión.",
  "hero.ctaPrimary": "Escríbeme por WhatsApp",
  "hero.ctaSecondary": "Ver clases",
  "hero.badge1": "Presencial u online",
  "hero.badge2": "Todas las edades",
  "hero.badge3": "Método conversacional",
  "hero.scrollCue": "Desliza para conocer más",

  // ── Sobre mí ────────────────────────────────────────────────────────────
  "about.eyebrow": "Sobre mí",
  "about.title": "Hola, soy {teacher}",
  "about.body":
    "Llevo {years} años ayudando a niños, jóvenes y adultos de Chihuahua a dominar el inglés. Mi enfoque es conversacional y sin miedo al error: aprendes usando el idioma desde el primer día, con clases pensadas para tu nivel y tus metas.",
  "about.body2":
    "Ya sea que empieces desde cero, quieras ganar fluidez o prepararte para un examen, te acompaño en cada paso con paciencia y un plan claro.",
  "about.credentialsTitle": "Formación y certificaciones",
  "about.statsExperience": "años enseñando",
  "about.statsStudents": "alumnos felices",
  "about.statsModes": "modalidades",

  // ── Clases / Servicios ──────────────────────────────────────────────────
  "services.eyebrow": "Clases",
  "services.title": "Encuentra la clase perfecta para ti",
  "services.subtitle":
    "Clases diseñadas para cada objetivo y edad. Todas disponibles de forma presencial en Chihuahua o en línea desde donde estés.",
  "services.private.title": "Clases particulares",
  "services.private.desc":
    "Atención 100% personalizada, a tu nivel y a tu ritmo. El camino más rápido para avanzar.",
  "services.kids.title": "Inglés para niños",
  "services.kids.desc":
    "Aprendizaje lúdico y paciente para los más pequeños, con juegos y actividades que enganchan.",
  "services.conversation.title": "Club de conversación",
  "services.conversation.desc":
    "Suelta la lengua y gana fluidez practicando en un ambiente relajado y sin presiones.",
  "services.exam.title": "Preparación de exámenes",
  "services.exam.desc":
    "TOEFL, IELTS y Cambridge con estrategia, práctica real y seguimiento de tu progreso.",
  "services.business.title": "Inglés de negocios",
  "services.business.desc":
    "Comunicación profesional para el trabajo, entrevistas y presentaciones con seguridad.",
  "services.school.title": "Regularización escolar",
  "services.school.desc":
    "Refuerzo para estudiantes que necesitan ponerse al día y subir sus calificaciones.",

  // ── Por qué yo ──────────────────────────────────────────────────────────
  "why.eyebrow": "Por qué elegirme",
  "why.title": "Aprender inglés puede ser divertido",
  "why.subtitle":
    "Un método cercano, flexible y enfocado en resultados reales.",
  "why.point1.title": "Método práctico",
  "why.point1.desc":
    "Hablas desde el día uno. Nada de memorizar reglas sin usarlas.",
  "why.point2.title": "Horarios flexibles",
  "why.point2.desc":
    "Nos adaptamos a tu agenda: mañanas, tardes o fines de semana.",
  "why.point3.title": "Maestra certificada",
  "why.point3.desc":
    "Experiencia real enseñando a alumnos de todas las edades.",
  "why.point4.title": "Presencial u online",
  "why.point4.desc":
    "Toma tus clases en Chihuahua o desde la comodidad de tu casa.",

  // ── Experiencia y certificaciones ───────────────────────────────────────
  "credentials.eyebrow": "Experiencia y certificaciones",
  "credentials.title": "Preparación que respalda cada clase",
  "credentials.subtitle":
    "Años de práctica enseñando y formación continua para darte clases de calidad, con método y resultados comprobables.",
  "credentials.certsTitle": "Certificaciones",
  "credentials.expTitle": "Trayectoria",
  // Certificaciones (placeholders — reemplazar con las reales en lib/site.ts)
  "credentials.cert1.title": "Certificación TEFL",
  "credentials.cert1.desc":
    "Enseñanza de inglés como lengua extranjera con metodología acreditada.",
  "credentials.cert2.title": "Cambridge B2 First",
  "credentials.cert2.desc":
    "Dominio del idioma avalado por la Universidad de Cambridge.",
  "credentials.cert3.title": "Formación docente",
  "credentials.cert3.desc":
    "Preparación pedagógica para enseñar a niños, jóvenes y adultos.",
  // Trayectoria (timeline)
  "credentials.exp1.year": "Hoy",
  "credentials.exp1.title": "Clases presenciales y online",
  "credentials.exp1.desc":
    "Acompaño a alumnos de todo Chihuahua y de otras ciudades vía online.",
  "credentials.exp2.year": "+100",
  "credentials.exp2.title": "Alumnos acompañados",
  "credentials.exp2.desc":
    "Desde principiantes hasta preparación de exámenes internacionales.",
  "credentials.exp3.year": "8+",
  "credentials.exp3.title": "Años de experiencia",
  "credentials.exp3.desc":
    "Enseñando inglés con un método práctico, cercano y sin miedo al error.",

  // ── Testimonios ─────────────────────────────────────────────────────────
  "testimonials.eyebrow": "Testimonios",
  "testimonials.title": "Lo que dicen mis alumnos",

  // ── Contacto ────────────────────────────────────────────────────────────
  "contact.eyebrow": "Contacto",
  "contact.title": "¿List@ para empezar?",
  "contact.subtitle":
    "Cuéntame qué necesitas y te respondo personalmente. La primera clase la agendamos juntos.",
  "contact.whatsappTitle": "WhatsApp",
  "contact.whatsappDesc": "La forma más rápida de contactarme.",
  "contact.emailTitle": "Correo",
  "contact.emailDesc": "Escríbeme cuando quieras.",
  "contact.locationTitle": "Ubicación",
  "contact.locationDesc": "Clases presenciales en Chihuahua y en línea.",
  "contact.whatsappPrefill":
    "¡Hola! Me interesa tomar clases de inglés. ¿Me das más información?",
  "contact.formTitle": "Envíame un mensaje",

  // Campos del formulario
  "contact.nameLabel": "Nombre",
  "contact.namePlaceholder": "Tu nombre",
  "contact.emailLabel": "Correo electrónico",
  "contact.emailPlaceholder": "tu@correo.com",
  "contact.messageLabel": "Mensaje",
  "contact.messagePlaceholder":
    "Cuéntame qué te gustaría aprender, tu nivel y tus horarios…",
  "contact.submit": "Enviar mensaje",
  "contact.sending": "Enviando…",
  "contact.success": "¡Gracias! Te contactaré muy pronto.",
  "contact.sendAnother": "Enviar otro mensaje",

  // Errores del formulario
  "contact.errorName": "Escribe tu nombre (mínimo 2 caracteres).",
  "contact.errorNameLong": "El nombre es demasiado largo.",
  "contact.errorRequired": "El correo es obligatorio.",
  "contact.errorEmail": "Escribe un correo válido.",
  "contact.errorMessage": "Tu mensaje es muy corto (mínimo 10 caracteres).",
  "contact.errorMessageLong": "Tu mensaje es demasiado largo.",
  "contact.errorGeneric": "No se pudo enviar. Inténtalo de nuevo.",
  "contact.errorCaptcha":
    "No pudimos verificar que eres humano. Inténtalo de nuevo.",

  // Aviso reCAPTCHA
  "contact.recaptchaProtected":
    "Este sitio está protegido por reCAPTCHA y aplican la",
  "contact.recaptchaPrivacy": "Política de Privacidad",
  "contact.recaptchaAnd": "y los",
  "contact.recaptchaTerms": "Términos de Servicio",
  "contact.recaptchaApply": "de Google.",

  // ── Footer ──────────────────────────────────────────────────────────────
  "footer.tagline": "Clases de inglés que te dan confianza para hablar.",
  "footer.navTitle": "Navegación",
  "footer.contactTitle": "Contacto",
  "footer.followTitle": "Sígueme",
  "footer.rights": "Todos los derechos reservados.",
  "footer.madeBy": "Desarrollado por",
} as const;

export type TranslationKey = keyof typeof es;
