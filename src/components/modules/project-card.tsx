import Link from "next/link";
import Image from "next/image";
// Import Helper dari file pusat
import { getTechDetails } from "@/data/tech-stack";

interface Props {
  title: string;
  description: string;
  role: string;
  period: string;
  slug: string;
  tags: readonly string[];
  image?: string;
}

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
      <div className="flex flex-col h-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 hover:border-zinc-700 transition-all duration-300 shadow-sm hover:shadow-emerald-500/10">
        {/* GAMBAR */}
        {image && (
          <div className="relative w-full aspect-[16/9] overflow-hidden bg-zinc-900">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </div>
        )}

        {/* KONTEN */}
        <div className="flex flex-col flex-1 p-5">
          <h3 className="text-xl font-bold text-zinc-100 font-sans mb-1 group-hover:text-emerald-500 transition-colors line-clamp-1">
            {title}
          </h3>

          <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono mb-6">
            <span className="font-medium text-zinc-400">{role}</span>
            <span className="text-zinc-700">•</span>
            <span>{period}</span>
          </div>

          {/* TECH STACK ICONS (OTOMATIS BERWARNA DARI HELPER) */}
          <div className="mt-auto flex items-center gap-4">
            {tags.map((tag) => {
              // Panggil helper untuk dapatkan icon dan warna
              const { icon: Icon, color } = getTechDetails(tag);

              return (
                <div
                  key={tag}
                  className="text-2xl transition-transform hover:scale-110 duration-200 "
                  title={tag}
                  style={{ color: color }} // Terapkan warna disini
                >
                  <Icon />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
}
