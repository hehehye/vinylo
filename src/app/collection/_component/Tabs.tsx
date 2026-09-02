"use client";
import { useState } from "react";
import AlbumGrid from "./AlbumGrid";

const navigation = [
  { id: 1, title: "바이닐" },
  { id: 2, title: "분석" },
];
const albums: { id: string; coverImageUrl: string; title: string }[] = [
  {
    id: "1",
    coverImageUrl:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    title: "Kind of Blue",
  },
  {
    id: "2",
    coverImageUrl:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop",
    title: "Abbey Road",
  },
  {
    id: "3",
    coverImageUrl:
      "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?w=400&h=400&fit=crop",
    title: "Blue Train",
  },
  {
    id: "4",
    coverImageUrl:
      "https://images.unsplash.com/photo-1458560871784-56d23406c091?w=400&h=400&fit=crop",
    title: "The Dark Side of the Moon",
  },
  {
    id: "5",
    coverImageUrl:
      "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=400&fit=crop",
    title: "Plastic Love",
  },
  {
    id: "6",
    coverImageUrl:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=400&fit=crop",
    title: "Songs in the Key of Life",
  },
];
export default function Tabs() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="mt-24">
      <ul className="flex justify-center gap-4">
        {navigation.map((nav) => (
          <li
            key={nav.id}
            onClick={() => setActiveTab(nav.id)}
            className={`cursor-pointer ${
              activeTab === nav.id
                ? "text-white bg-black rounded-full py-1 px-4"
                : "text-gray-400  bg-white rounded-full py-1 px-4"
            }`}
          >
            {nav.title}
          </li>
        ))}
      </ul>

      <div className="mt-6">
        {
          activeTab === 1 && (
            <>
              <input
                type="search"
                placeholder="내 바이닐에서 검색..."
                className="w-full my-6 bg-surface rounded-lg px-4 py-2.5 text-sm outline-none"
              />
              <AlbumGrid albums={albums} />
            </>
          )
          // <div className="flex justify-center items-center py-60">
          //     <p className="font-medium text-stone-400">
          //       가지고있는 앨범이 있다면 등록해보세요!
          //     </p>
          //   </div>
        }
        {activeTab === 2 && (
          <div>
            <p className="font-bold text-xl">당신의 취향 분석</p>
            <div className="py-8">
              <p className="font-bold text-xl">
                `재즈` 를 가장많이 보유하고 계시네요.
              </p>
            </div>
            {/* 도넛형 */}
            {/* 차트형 */}
            <div></div>
          </div>
        )}
      </div>
    </div>
  );
}
