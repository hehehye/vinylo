"use client";

import { ArrowLeft, ChevronLeft, X } from "lucide-react";
import { useRouter } from "next/navigation";

export function BackButton() {
  const router = useRouter();
  return (
    <div className="pl-2 w-9 flex justify-start">
      <button
        type="button"
        onClick={() => router.back()}
        aria-label="뒤로가기"
        className="p-1 -ml-1"
      >
        <ArrowLeft className="w-5 h-5 text-gray-800" />
      </button>
    </div>
  );
}
export function RoundBackButton({ color }: { color: string }) {
  const router = useRouter();
  return <ChevronLeft color={color} size={22} onClick={() => router.back()} />;
}
export function XBackButton({ color }: { color: string }) {
  const router = useRouter();
  return (
    <div className=" w-9 flex justify-start">
      <X color={color} size={22} onClick={() => router.back()} />
    </div>
  );
}
