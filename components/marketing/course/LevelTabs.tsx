"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Level = {
  id: string;
  label: string;
  day: string;
  time: string;
  topics: string[];
};

/**
 * Selector de niveles (Principiantes / Intermedios / Avanzados) sobre Radix
 * Tabs. Cada tab muestra el horario del nivel —con la hora en grande— y sus
 * temas. Los strings ya vienen traducidos desde el server.
 */
export const LevelTabs = ({
  levels,
  scheduleLabel,
  topicsLabel,
  onlineLabel,
}: {
  levels: Level[];
  scheduleLabel: string;
  topicsLabel: string;
  onlineLabel: string;
}) => (
  <Tabs defaultValue={levels[0]?.id} className="w-full">
    <TabsList>
      {levels.map((level) => (
        <TabsTrigger key={level.id} value={level.id}>
          {level.label}
        </TabsTrigger>
      ))}
    </TabsList>

    {levels.map((level) => (
      <TabsContent key={level.id} value={level.id} className="mt-6">
        <div className="rounded-card border-line bg-surface-raised shadow-soft relative overflow-hidden border p-6">
          <span
            aria-hidden
            className="bg-accent-grape absolute inset-y-0 left-0 w-1.5"
          />
          <div className="pl-1">
            <p className="text-ink-500 text-sm font-semibold tracking-wide uppercase">
              {scheduleLabel}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-pill bg-surface-sunken border-line text-ink-700 border px-3 py-1 text-sm font-semibold">
                {level.day}
              </span>
              <span className="rounded-pill bg-leaf/10 text-leaf px-3 py-1 text-sm font-semibold">
                {onlineLabel}
              </span>
            </div>
            <p className="font-display text-ink-900 mt-3 text-3xl font-extrabold tracking-tight">
              {level.time}
            </p>

            <p className="text-ink-500 mt-6 text-sm font-semibold tracking-wide uppercase">
              {topicsLabel}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2.5">
              {level.topics.map((topic) => (
                <li
                  key={topic}
                  className="rounded-pill border-line text-ink-700 border px-3.5 py-1.5 text-sm font-medium"
                >
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </TabsContent>
    ))}
  </Tabs>
);
