import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
// Import Icon Brands (Pastikan sudah npm install react-icons)
import {
  SiNextdotjs,
  SiLaravel,
  SiFlutter,
  SiMysql,
  SiDocker,
  SiTailwindcss,
  SiReact,
} from "react-icons/si";
import { Database } from "lucide-react"; // Fallback icon

interface Props {
  title: string;
  description: string;
  role: string; // Baru
  period: string; // Baru
  slug: string; // Baru
  tags: readonly string[];
  image?: string;
}

// Helper untuk mapping icon (Bisa dipindah ke utils jika mau)
const getTechIcon = (tag: string) => {
  const t = tag.toLowerCase();
  if (t.includes("next")) return <SiNextdotjs title="Next.js" />;
  if (t.includes("react")) return <SiReact title="React" />;
  if (t.includes("laravel")) return <SiLaravel title="Laravel" />;
  if (t.includes("flutter")) return <SiFlutter title="Flutter" />;
  if (t.includes("mysql") || t.includes("database"))
    return <SiMysql title="MySQL" />;
  if (t.includes("docker")) return <SiDocker title="Docker" />;
  if (t.includes("tailwind")) return <SiTailwindcss title="Tailwind" />;
  return <Database title={tag} />; // Default
};

export function ProjectCard({
  title,
  description,
  role,
  period,
  slug,
  tags,
  image,
}: Props) {
  return (
    <Link href={`/projects/${slug}`} className="group block h-full">
      <div className="flex flex-col h-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 hover:border-zinc-700 transition-all duration-300 shadow-sm hover:shadow-md">
        {/* 1. GAMBAR (Full Width seperti Gambar 1) */}
        {image && (
          <div className="relative w-full aspect-[16/9] overflow-hidden bg-zinc-900">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}

        {/* 2. KONTEN (Title, Role, Tech Icons) */}
        <div className="flex flex-col flex-1 p-5">
          {/* Title */}
          <h3 className="text-xl font-bold text-zinc-100 font-sans mb-1 group-hover:text-emerald-500 transition-colors">
            {title}
          </h3>

          {/* Role & Period (Abu-abu kecil) */}
          <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono mb-6">
            <span>{role}</span>
            <span>•</span>
            <span>{period}</span>
          </div>

          {/* Tech Stack Icons (Baris bawah) */}
          <div className="mt-auto flex items-center gap-3 text-zinc-400">
            {tags.map((tag) => (
              <div
                key={tag}
                className="text-xl hover:text-emerald-400 transition-colors"
              >
                {getTechIcon(tag)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
