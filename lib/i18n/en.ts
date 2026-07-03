import type { TranslationKey } from "./es";

/**
 * Diccionario EN — locale secundario. Debe cubrir TODAS las claves de `es.ts`
 * (el tipo `Record<TranslationKey, string>` lo garantiza en build).
 */
export const en: Record<TranslationKey, string> = {
  // ── Navigation ──────────────────────────────────────────────────────────
  "nav.about": "About",
  "nav.services": "Classes",
  "nav.why": "Why me",
  "nav.contact": "Contact",
  "nav.cta": "Message me",
  "nav.langLabel": "Change language",

  // ── Hero ────────────────────────────────────────────────────────────────
  "hero.eyebrow": "English classes in Chihuahua",
  "hero.title": "Speak English with",
  "hero.titleHighlight": "confidence",
  "hero.subtitle":
    "Personalized lessons with {teacher}, a certified teacher. At your own pace, with a clear, practical method so you actually speak English — fearlessly and from your very first session.",
  "hero.ctaPrimary": "Message me on WhatsApp",
  "hero.ctaSecondary": "See classes",
  "hero.badge1": "In-person or online",
  "hero.badge2": "All ages",
  "hero.badge3": "Conversational method",
  "hero.scrollCue": "Scroll to discover more",

  // ── About ───────────────────────────────────────────────────────────────
  "about.eyebrow": "About me",
  "about.title": "Hi, I'm {teacher}",
  "about.body":
    "I've spent {years} years helping kids, teens and adults in Chihuahua master English. My approach is conversational and judgment-free: you learn by using the language from day one, with classes tailored to your level and your goals.",
  "about.body2":
    "Whether you're starting from scratch, chasing fluency, or preparing for an exam, I'll guide you every step of the way with patience and a clear plan.",
  "about.credentialsTitle": "Training & certifications",
  "about.statsExperience": "years teaching",
  "about.statsStudents": "happy students",
  "about.statsModes": "class modes",

  // ── Classes / Services ──────────────────────────────────────────────────
  "services.eyebrow": "Classes",
  "services.title": "Find the perfect class for you",
  "services.subtitle":
    "Classes designed for every goal and age. All available in person in Chihuahua or online, wherever you are.",
  "services.private.title": "Private lessons",
  "services.private.desc":
    "100% personalized attention, at your level and your pace. The fastest way to progress.",
  "services.kids.title": "English for kids",
  "services.kids.desc":
    "Playful, patient learning for the little ones, with games and activities that keep them hooked.",
  "services.conversation.title": "Conversation club",
  "services.conversation.desc":
    "Loosen up and build fluency by practicing in a relaxed, pressure-free environment.",
  "services.exam.title": "Exam preparation",
  "services.exam.desc":
    "TOEFL, IELTS and Cambridge with strategy, real practice and progress tracking.",
  "services.business.title": "Business English",
  "services.business.desc":
    "Professional communication for work, interviews and presentations, with confidence.",
  "services.school.title": "School tutoring",
  "services.school.desc":
    "Support for students who need to catch up and raise their grades.",

  // ── Why me ──────────────────────────────────────────────────────────────
  "why.eyebrow": "Why choose me",
  "why.title": "Learning English can be fun",
  "why.subtitle": "A warm, flexible method focused on real results.",
  "why.point1.title": "Practical method",
  "why.point1.desc":
    "You speak from day one. No memorizing rules you never use.",
  "why.point2.title": "Flexible schedule",
  "why.point2.desc": "We adapt to your agenda: mornings, evenings or weekends.",
  "why.point3.title": "Certified teacher",
  "why.point3.desc": "Real experience teaching students of every age.",
  "why.point4.title": "In-person or online",
  "why.point4.desc":
    "Take your classes in Chihuahua or from the comfort of home.",

  // ── Experience & certifications ─────────────────────────────────────────
  "credentials.eyebrow": "Experience & certifications",
  "credentials.title": "Preparation behind every class",
  "credentials.subtitle":
    "Years of teaching practice and ongoing training to give you quality classes, with method and measurable results.",
  "credentials.certsTitle": "Certifications",
  "credentials.expTitle": "Track record",
  "credentials.cert1.title": "TEFL Certification",
  "credentials.cert1.desc":
    "Teaching English as a foreign language with an accredited methodology.",
  "credentials.cert2.title": "Cambridge B2 First",
  "credentials.cert2.desc":
    "Language proficiency backed by the University of Cambridge.",
  "credentials.cert3.title": "Teacher training",
  "credentials.cert3.desc":
    "Pedagogical preparation to teach children, teens and adults.",
  "credentials.exp1.year": "Today",
  "credentials.exp1.title": "In-person & online classes",
  "credentials.exp1.desc":
    "I support students across Chihuahua and other cities online.",
  "credentials.exp2.year": "+100",
  "credentials.exp2.title": "Students guided",
  "credentials.exp2.desc": "From beginners to international exam preparation.",
  "credentials.exp3.year": "8+",
  "credentials.exp3.title": "Years of experience",
  "credentials.exp3.desc":
    "Teaching English with a practical, warm, judgment-free method.",

  // ── Testimonials ────────────────────────────────────────────────────────
  "testimonials.eyebrow": "Testimonials",
  "testimonials.title": "What my students say",

  // ── Contact ─────────────────────────────────────────────────────────────
  "contact.eyebrow": "Contact",
  "contact.title": "Ready to start?",
  "contact.subtitle":
    "Tell me what you need and I'll reply personally. We'll schedule your first class together.",
  "contact.whatsappTitle": "WhatsApp",
  "contact.whatsappDesc": "The fastest way to reach me.",
  "contact.emailTitle": "Email",
  "contact.emailDesc": "Write to me anytime.",
  "contact.locationTitle": "Location",
  "contact.locationDesc": "In-person classes in Chihuahua and online.",
  "contact.whatsappPrefill":
    "Hi! I'm interested in taking English classes. Could you tell me more?",
  "contact.formTitle": "Send me a message",

  // Form fields
  "contact.nameLabel": "Name",
  "contact.namePlaceholder": "Your name",
  "contact.emailLabel": "Email",
  "contact.emailPlaceholder": "you@email.com",
  "contact.messageLabel": "Message",
  "contact.messagePlaceholder":
    "Tell me what you'd like to learn, your level and your availability…",
  "contact.submit": "Send message",
  "contact.sending": "Sending…",
  "contact.success": "Thank you! I'll get back to you very soon.",
  "contact.sendAnother": "Send another message",

  // Form errors
  "contact.errorName": "Enter your name (at least 2 characters).",
  "contact.errorNameLong": "That name is too long.",
  "contact.errorRequired": "Email is required.",
  "contact.errorEmail": "Enter a valid email.",
  "contact.errorMessage": "Your message is too short (at least 10 characters).",
  "contact.errorMessageLong": "Your message is too long.",
  "contact.errorGeneric": "Couldn't send. Please try again.",
  "contact.errorCaptcha": "We couldn't verify you're human. Please try again.",

  // reCAPTCHA notice
  "contact.recaptchaProtected":
    "This site is protected by reCAPTCHA and the Google",
  "contact.recaptchaPrivacy": "Privacy Policy",
  "contact.recaptchaAnd": "and",
  "contact.recaptchaTerms": "Terms of Service",
  "contact.recaptchaApply": "apply.",

  // ── Footer ──────────────────────────────────────────────────────────────
  "footer.tagline": "English classes that give you the confidence to speak.",
  "footer.navTitle": "Navigation",
  "footer.contactTitle": "Contact",
  "footer.followTitle": "Follow me",
  "footer.rights": "All rights reserved.",
  "footer.madeBy": "Built by",
};
