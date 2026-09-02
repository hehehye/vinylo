"use client";

import { Plus, Disc } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SpeedDial() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex items-center justify-center">
      {open && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 flex flex-col items-center gap-3">
          <SpeedDialItem
            href="/listings/write"
            icon={<Disc className="w-4 h-4 " strokeWidth={1.5} />}
            label="매물등록"
            onClick={() => setOpen(false)}
          /> 
        </div>
      )}

      {/* Plus 버튼은 그대로 유지 */}
      <div className="cursor-pointer" onClick={() => setOpen((prev) => !prev)}>
        <Plus />
      </div>
    </div>
  );
}

function SpeedDialItem({
  href, 
  label,
  onClick,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <Link href={href} onClick={onClick} className="group flex items-center gap-2">
      <div className="flex items-center gap-1 whitespace-nowrap bg-black/90 text-white text-xs  px-3 py-2.5 rounded-lg shadow-md">
        <Plus size={14}/>
        <span>{label}</span>
      </div> 
    </Link>
  );
}