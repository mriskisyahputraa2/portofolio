"use client";

import { useEffect, useState } from "react";

export default function GithubCalendarWrapper(props: any) {
  const [Calendar, setCalendar] = useState<any>(null);

  useEffect(() => {
    import("react-github-calendar").then((mod: any) => {
      // BERSIH & EFISIEN:
      // Berdasarkan hasil debug tadi, komponen ada di properti bernama 'GitHubCalendar'.
      // Kita ambil itu langsung.
      const component = mod.GitHubCalendar ?? mod.default ?? mod;

      setCalendar(() => component);
    });
  }, []);

  // Loading Skeleton (Anti-Hydration Error)
  if (!Calendar) {
    return (
      <div className="h-40 w-full flex flex-col gap-2 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
        <div className="h-4 w-32 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse mb-4" />
        <div className="flex gap-1 h-full items-end">
          {[
            20, 45, 30, 80, 55, 90, 40, 60, 35, 75, 50, 85, 25, 65, 45, 70, 30,
            60, 40, 90,
          ].map((height, i) => (
            <div
              key={i}
              className="w-full bg-zinc-100 dark:bg-zinc-800 rounded animate-pulse"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    );
  }

  return <Calendar {...props} />;
}
