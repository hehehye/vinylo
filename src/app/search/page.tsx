import {BackButton} from "@/components/ui/BackButton";
import { SearchIcon } from "lucide-react";

export default function Page() {
  return (
    <div>
      <div className="flex items-center">
        <div className="mt-2">
          <BackButton />
        </div>
        <div
          className="w-full relative flex items-center rounded-full border border-text/20 
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
      </div>
      <div className="mt-8">
        <p className="font-bold">최근 검색어</p>
        <div className="py-12 flex justify-center">
            <span className="text-stone-400 text-sm">최근 검색어가 없습니다.</span>
        </div>
      </div>
      <div className="mt-8">
        <p  className="font-bold">카테고리</p>
        <div>

        </div>
      </div>
    </div>
  );
}
