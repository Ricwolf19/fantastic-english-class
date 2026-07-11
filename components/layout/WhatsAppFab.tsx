"use client";

import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { useI18n } from "@/lib/i18n";
import { waLink } from "@/lib/site";

/**
 * Botón flotante de WhatsApp (fixed abajo a la derecha), presente en todas las
 * páginas. Abre wa.me con un mensaje pre-llenado por locale. Client component
 * para leer el idioma de la URL; sin JS más allá del hover (CSS).
 */
export const WhatsAppFab = () => {
  const { t } = useI18n();
  const label = t("nav.cta");

  return (
    <a
      href={waLink(t("contact.whatsappPrefill"))}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="group fixed right-4 bottom-4 z-40 flex items-center sm:right-6 sm:bottom-6"
    >
      <span className="rounded-pill bg-surface-raised border-line text-ink-800 shadow-card pointer-events-none absolute right-16 hidden border px-3 py-1.5 text-sm font-semibold whitespace-nowrap opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:block">
        {label}
      </span>
      <span className="flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-transform duration-200 group-hover:scale-110">
        <WhatsAppIcon className="size-7" />
      </span>
    </a>
  );
};
