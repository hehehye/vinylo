// app/mypage/_components/QuickMenuGrid.tsx
import { Tag, Truck } from "lucide-react";
import Link from "next/link";

const menuItems = [
  { href: "/profile/me", icon: Tag, label: "내 상품 관리", count: 9 },
  { href: "/mypage/sales-history", icon: "W", label: "판매내역", count: 70 },
  { href: "/mypage/shipping", icon: Truck, label: "배송신청/관리", count: null },
];

export default function QuickMenuGrid() {
  return (
    <div className="grid grid-cols-3 gap-3 mt-6">
      {menuItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="flex flex-col items-center gap-2"
        >
          <div className="border border-black/20 relative w-14 h-14 rounded-full bg-surface flex items-center justify-center">
            {typeof item.icon === "string" ? (
              <span className="w-6 h-6 rounded-full bg-text text-bg text-xs font-bold flex items-center justify-center">
                {item.icon}
              </span>
            ) : (
              <item.icon className="w-5 h-5 text-text" strokeWidth={1.5} />
            )}
            {item.count !== null && (
              <span className="absolute -bottom-1 -right-1 bg-black text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {item.count}
              </span>
            )}
          </div>
          <span className="text-xs text-text-secondary text-center">
            {item.label}
          </span>
        </Link>
      ))}
    </div>
  );
}