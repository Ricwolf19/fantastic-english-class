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

  // ── Navegación (rutas de curso) ─────────────────────────────────────────
  "nav.home": "Inicio",
  "nav.kids": "Niños",
  "nav.regular": "Regulares",
  "nav.spanish": "Español",
  "nav.specials": "Especiales",

  // ── Home: resumen de cursos ─────────────────────────────────────────────
  "home.coursesEyebrow": "Nuestros cursos",
  "home.coursesTitle": "Encuentra tu clase perfecta",
  "home.coursesSubtitle":
    "Elige el curso a tu medida. Cada uno tiene su propia página con horarios, temario y precios.",
  "home.learnMore": "Ver detalles",
  "home.kidsCard":
    "Inglés para niños de 6 a 11 años, con juegos, dinámicas y mucha diversión.",
  "home.regularCard":
    "Para adultos y adolescentes, por nivel: principiante, intermedio y avanzado.",
  "home.spanishCard":
    "¿Hablas inglés y quieres aprender español? Sin presión, jugando y platicando.",
  "home.specialsCard":
    "Festivales y clases temáticas únicas: Navidad, Halloween, ciencia y más.",

  // ── Etiquetas de curso (compartidas) ────────────────────────────────────
  "course.scheduleTitle": "Horarios",
  "course.topicsTitle": "Temas que veremos",
  "course.activitiesTitle": "Cómo aprendemos",
  "course.otherSchedule":
    "¿Necesitas otro día u horario? Escríbeme por privado y lo acomodamos.",
  "course.examNote": "Examen GRATIS cada dos meses para mostrar tu avance.",
  "course.absenceNote":
    "Si faltas y afecta tu aprendizaje, te comparto ejercicios para ponerte al día.",
  "course.zoomNote": "Clases por Zoom; el link llega a tu correo electrónico.",
  "course.cta": "Aparta tu lugar",
  "course.backHome": "Volver al inicio",
  "course.online": "En línea por Zoom",
  "course.faqTitle": "Buen saber",
  "course.examTitle": "Exámenes",
  "course.absenceTitle": "¿Faltaste a una clase?",
  "course.formatTitle": "Formato de las clases",

  // Precios (compartidos)
  "pricing.title": "Inversión",
  "pricing.subtitle":
    "Precios claros, sin sorpresas. El pago se hace un día antes de la clase.",
  "pricing.firstClass": "Primera clase",
  "pricing.firstClassNote":
    "Clase de introducción para conocer tus intereses y tu nivel.",
  "pricing.perClass": "Por clase",
  "pricing.monthly": "Paquete mensual",
  "pricing.packageFree":
    "Si pagas el paquete desde la primera clase, la primera es gratis.",
  "pricing.payBefore": "El pago se realiza un día antes de la clase.",
  "pricing.approxNote":
    "El equivalente en la otra moneda es aproximado (tipo de cambio referencial).",

  // ── Kids ────────────────────────────────────────────────────────────────
  "kids.eyebrow": "Niños",
  "kids.title": "Inglés para niños",
  "kids.subtitle":
    "Grupos reducidos por edad (6 a 11 años) donde aprender inglés se siente como jugar.",
  "kids.intro":
    "Lo más importante es que los peques estén cómodos y se diviertan aprendiendo inglés. Trabajamos algo de escritura y ejercicios tradicionales, pero sobre todo dinámicas, presentaciones y juegos que integran gramática y vocabulario en cada clase.",
  "kids.groupsTitle": "Grupos y horarios",
  "kids.advancedNote":
    "Si un peque muestra un nivel más avanzado que el resto, abrimos un grupo para que aprenda a su ritmo.",
  "kids.cameraNote":
    "Pedimos siempre cámara encendida y participación, para mantener la atención y la dinámica de la clase.",

  // ── Regulares ───────────────────────────────────────────────────────────
  "regular.eyebrow": "Regulares",
  "regular.title": "Clases regulares",
  "regular.subtitle":
    "Para adultos y adolescentes, organizadas por nivel: principiante, intermedio y avanzado.",
  "regular.intro":
    "En Fantastic English Class aplicamos el inglés de forma… fantástica. Seguimos las necesidades de cada nivel con muchas dinámicas, lejos del libro de texto y las unidades tediosas, pero siempre aprendiendo el idioma de manera profesional y correcta.",
  "regular.levelsTitle": "Niveles y horarios",

  // ── Fantastic Spanish Class ─────────────────────────────────────────────
  "spanish.eyebrow": "Fantastic Spanish Class",
  "spanish.title": "Clases de español",
  "spanish.subtitle":
    "¿Hablas inglés y quieres aprender español? Encontraste tu lugar correcto.",
  "spanish.intro":
    "Aprende español sin presión, jugando y platicando de una forma divertida y relajada. Vamos a tu ritmo y a partir de tus intereses.",
  "spanish.scheduleTitle": "Horario",

  // ── Cursos especiales / festivales ──────────────────────────────────────
  "specials.eyebrow": "Especiales",
  "specials.title": "Cursos especiales y festivales",
  "specials.subtitle":
    "A veces enfocados a un solo nivel, a veces mezclando todos. Clases temáticas y dinámicas únicas que se salen de lo común.",
  "specials.listTitle": "Algunos de nuestros festivales",
  "specials.note": "¿Se te ocurre una temática? Coméntanosla y la armamos.",

  // ── Coméntanos (buzón de comentarios) ───────────────────────────────────
  "comments.eyebrow": "Coméntanos",
  "comments.title": "Coméntanos lo que sea",
  "comments.subtitle":
    "Desde qué temas te gustaría aprender hasta qué dinámicas agregar o quitar. Lo que tú quieras, te leemos.",
  "comments.nameLabel": "Nombre (opcional)",
  "comments.emailLabel": "Correo (opcional)",
  "comments.messageLabel": "Tu comentario",
  "comments.messagePlaceholder": "Escríbenos lo que quieras…",
  "comments.submit": "Enviar comentario",
  "comments.sending": "Enviando…",
  "comments.success": "¡Gracias por tu comentario! Lo tomamos en cuenta.",
  "comments.sendAnother": "Enviar otro comentario",

  // ── Home: meta de las cards de curso ────────────────────────────────────
  "home.kidsMeta": "Niños de 6 a 11",
  "home.regularMeta": "3 niveles",
  "home.spanishMeta": "Para angloparlantes",
  "home.specialsMeta": "Clases temáticas",
  "home.fromPrice": "Desde",

  // ── Highlights (datos reales — reemplaza el viejo "por qué") ─────────────
  "highlights.eyebrow": "Por qué elegirnos",
  "highlights.title": "Aprender inglés en serio, sin aburrirte",
  "highlights.subtitle":
    "Clases pensadas para que hables desde el primer día, con seguimiento real de tu avance.",
  "highlights.online.title": "En línea por Zoom",
  "highlights.online.desc":
    "Toma tus clases desde donde estés; el link llega a tu correo.",
  "highlights.exam.title": "Examen gratis cada 2 meses",
  "highlights.exam.desc":
    "Medimos tu avance sin costo, para ver resultados reales.",
  "highlights.groups.title": "Grupos reducidos",
  "highlights.groups.desc":
    "Por edad y nivel, para atención cercana y el ritmo adecuado.",
  "highlights.intro.title": "Primera clase de introducción",
  "highlights.intro.desc":
    "Conocemos tus intereses y tu nivel antes de empezar.",

  // ── Contacto (home condensado + página dedicada) ────────────────────────
  "contact.homeCta": "Ver todas las formas de contacto",
} as const;

export type TranslationKey = keyof typeof es;
