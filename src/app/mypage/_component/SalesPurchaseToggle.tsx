// app/mypage/_components/SalesPurchaseToggle.tsx
"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SalesPurchaseToggle() {
  const [tab, setTab] = useState<"sales" | "purchase">("sales");

  const earnings = {
    sales: { label: "총 판매 금액", amount: 531500 },
    purchase: { label: "총 구매 금액", amount: 214000 },
  };

  const current = earnings[tab];

  return (
    <div>
      {/* 토글 버튼 */}
      <div className="flex m-auto rounded-full p-1 w-fit">
        <button
          onClick={() => setTab("sales")}
          className={cn(
            "px-6 py-2 rounded-full text-sm font-semibold transition-colors",
            tab === "sales" ? "bg-black text-white" : "text-gray-400"
          )}
        >
          판매  
        </button>
        <button
          onClick={() => setTab("purchase")}
          className={cn(
            "px-6 py-2 rounded-full text-sm font-semibold transition-colors",
            tab === "purchase" ? "bg-black text-white" : "text-gray-400"
          )}
        >
          구매
        </button>
      </div>

      {/* 금액 카드 */}
      <button className="w-full flex items-center justify-between border border-black/20 rounded-2xl px-5 py-4 mt-4">
        <span className="text-sm text-text-secondary">
          {current.label}{" "}
          <b className="text-text text-base ml-1">
            {current.amount.toLocaleString()}원
          </b>
        </span>
        <ChevronRight className="w-4 h-4 text-text-muted" />
      </button>
    </div>
  );
}