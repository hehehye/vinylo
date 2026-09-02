// app/mypage/_component/MenuList.tsx
import Link from "next/link";
import { ChevronRight, LucideIcon } from "lucide-react";

type MenuItem = {
  href: string;
  icon: LucideIcon;
  label: string;
  badge?: number;
};

export default function MenuList({
  title,
  items,
}: {
  title: string;
  items: MenuItem[];
}) {
  return (
    <section className="mb-2">
      <p className="pt-4 pb-2 text-xs font-medium text-black/40">{title}</p>
      <nav className="divide-y divide-black/10">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="w-full flex items-center gap-3 py-4 active:bg-black/5 transition-colors"
          >
            <item.icon className="w-4.5 h-4.5 text-black/60" strokeWidth={1.5} />
            <span className="text-sm text-black/80">{item.label}</span>
            <div className="ml-auto flex items-center gap-1.5">
              {item.badge !== undefined && (
                <span className="text-xs text-black/40">{item.badge}</span>
              )}
              <ChevronRight className="w-4 h-4 text-black/30" />
            </div>
          </Link>
        ))}
      </nav>
    </section>
  );
}