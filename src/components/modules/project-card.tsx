import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react"; // Icon panah
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
}

export function ProjectCard({ title, description, tags, link }: Props) {
  return (
    <Card className="group relative overflow-hidden border border-zinc-800 bg-zinc-900/50 hover:border-emerald-500/50 hover:bg-zinc-900 transition-all duration-300">
      {/* Efek Glow saat Hover */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold text-zinc-100">
            {title}
          </CardTitle>
          {link && (
            <Link
              href={link}
              target="_blank"
              className="text-zinc-500 hover:text-emerald-500 transition-colors"
            >
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          )}
        </div>
        <CardDescription className="text-zinc-400 line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-zinc-800 text-zinc-300 hover:bg-emerald-500/20 hover:text-emerald-400 border border-transparent hover:border-emerald-500/30 transition-all"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
