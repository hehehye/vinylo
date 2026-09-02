// components/ui/SearchOverlay.tsx
"use client";
import { Search, SearchIcon, X } from "lucide-react";

export default function SearchOverlay({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  const suggestedKeywords = [
    "재즈",
    "시티팝",
    "락",
    "한정반",
    "인기매물",
    "김광석",
    "카시오페아",
  ];

  return (
    <>
      {/* 배경 오버레이 */}
      <div
        className="fixed top-14 left-0 right-0 bottom-0 z-40 bg-black/50"
        onClick={onClose}
      />

      {/* 검색 패널 */}
      <div className="fixed top-14 left-0 right-0 z-50 bg-white">
        <div className="max-w-[560px] mx-auto">
          {/* 검색창 + 닫기 */}
          <div
            className="flex items-center gap-3 py-3 px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="w-full relative flex items-center rounded-full border-[2px] border-text/20
        bg-bg px-4 mt-2 pr-28 py-2 focus-within:border-text/50 transition-colors"
            >
              <input
                type="search"
                placeholder="아티스트, 앨범 등 검색..."
                className="w-full bg-transparent outline-none text-sm placeholder:text-text-muted"
              />
              <div className="absolute right-4">
                <SearchIcon
                  className="w-4 h-4 text-text-muted shrink-0"
                  strokeWidth={1.5}
                />
              </div>
            </div>
            <button
              onClick={onClose}
              className="cursor-pointer text-sm font-medium text-text-secondary shrink-0 mt-2"
            >
              닫기
            </button>
          </div>

          {/* 추천 검색어 */}
          <div
            className="flex items-center gap-6 px-4 py-4"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-bold text-sm text-text-muted ">추천</p>
            <div className="flex flex-wrap gap-6">
              {suggestedKeywords.map((keyword) => (
                <button
                  key={keyword}
                  className="cursor-pointer text-sm font-medium text-text-secondary bg-surface text-stone-600 rounded-full"
                >
                  {keyword}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
