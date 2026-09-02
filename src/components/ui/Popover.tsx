"use client";
 
import Link from "next/link";
import { useState } from "react";
 
interface PopoverProps {
  trigger: React.ReactNode; // 여기에 어떤 아이콘이든 자유롭게 넣을 수 있음
  items: PopoverItem[];
}   
interface PopoverItem {
  title: string;
  url?: string;        // 있으면 Link로 이동
  onClick?: () => void; // 있으면 함수 실행 (로그아웃 등)
}

export function Popover({ trigger, items }: PopoverProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button type="button" onClick={() => setIsOpen((prev) => !prev)} aria-label="더보기">
        {trigger}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-28 bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-gray-100 py-1.5 z-50">
          {items.map((item) =>
            item.url ? (
              // url이 있으면 Link로 이동
              <Link
                key={item.title}
                href={item.url}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-50"
              >
                {item.title}
              </Link>
            ) : (
              // url이 없으면 그냥 버튼으로, onClick 실행
              <button
                key={item.title}
                type="button"
                onClick={() => {
                  item.onClick?.();
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-50"
              >
                {item.title}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
}