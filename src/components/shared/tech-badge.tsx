"use client";

import { getTechDetails } from "@/data/tech-stack";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TechBadgeProps {
  name: string;
}

export function TechBadge({ name }: TechBadgeProps) {
  const { icon: Icon, color } = getTechDetails(name);

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          {/* Container Icon */}
          <div
            className="flex items-center justify-center p-2 rounded-md 
            bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/50 
            hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors "
          >
            <Icon className="w-4 h-4" style={{ color: color }} />
          </div>
        </TooltipTrigger>

        {/* Isi Tooltip (Muncul Melayang) */}
        <TooltipContent
          side="bottom"
          className="text-xs font-bold text-zinc-600 dark:text-zinc-300 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm border-zinc-200 dark:border-zinc-800"
        >
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
