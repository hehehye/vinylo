"use client";
import ListingCard from "@/components/listings/ListingCard";
import { useState } from "react";

const navigation = [
  { id: 1, title: "판매상품" },
  { id: 2, title: "리뷰" },
  { id: 3, title: "상점정보" },
];
export default function Tabs() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div>
      <div className="pt-12">
        <ul className="flex gap-12">
          {navigation.map((nav) => (
            <li
              key={nav.id}
              onClick={() => setActiveTab(nav.id)}
              className={`cursor-pointer pb-2 ${
                activeTab === nav.id
                  ? "font-bold border-b-2 border-black"
                  : "text-gray-400"
              }`}
            >
              {nav.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        {activeTab === 1 && (
          <div className="grid grid-cols-3 gap-2">
            <ListingCard />
            <ListingCard />
          </div>
        )}
        {activeTab === 2 && <div>리뷰</div>}
        {activeTab === 3 && <div>상점정보</div>}
      </div>
    </div>
  );
}
