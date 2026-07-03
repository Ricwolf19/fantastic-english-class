import Image from "next/image";

import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Retrato de la maestra para la sección "Sobre mí". Usa `site.teacher.photo`
 * (subir la foto real a /public). Mientras el placeholder siga apuntando a un
 * archivo inexistente, muestra un marco con la inicial — nunca una imagen rota.
 */
export const TeacherPortrait = ({ className }: { className?: string }) => {
  const photo = site.teacher.photo;
  const initial = site.teacher.shortName.charAt(0).toUpperCase();

  return (
    <div
      className={cn(
        "border-line bg-surface-sunken relative aspect-square overflow-hidden rounded-[2rem] border-2",
        className,
      )}
    >
      {photo ? (
        <Image
          src={photo}
          alt={site.teacher.name}
          fill
          sizes="(max-width: 640px) 80vw, 400px"
          className="object-cover"
        />
      ) : (
        <div className="from-brand/25 to-accent-sky/20 flex h-full w-full items-center justify-center bg-gradient-to-br">
          <span className="font-display text-ink-900/80 text-8xl font-extrabold">
            {initial}
          </span>
        </div>
      )}
    </div>
  );
};
