import { SuggestionForm } from "@/components/contact/SuggestionForm";
import { Section, SectionHeading } from "@/components/shared/Section";
import { createT, type Locale } from "@/lib/i18n/config";

/**
 * Buzón "Coméntanos lo que sea" (Sección 4). Un textarea libre con nombre y
 * correo opcionales; los mensajes llegan por email como el resto del contacto.
 */
export const Comments = ({ locale }: { locale: Locale }) => {
  const t = createT(locale);
  const anchor = locale === "en" ? "tell-us" : "comentanos";

  return (
    <Section id={anchor} surface="sunken">
      <SectionHeading
        eyebrow={t("comments.eyebrow")}
        title={t("comments.title")}
        subtitle={t("comments.subtitle")}
      />
      <div className="rounded-card border-line bg-surface-raised shadow-soft mx-auto mt-10 max-w-xl border p-6 sm:p-8">
        <SuggestionForm />
      </div>
    </Section>
  );
};
