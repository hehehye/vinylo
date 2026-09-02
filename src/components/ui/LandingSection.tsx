"use client";

import { useRef, useState } from "react";
import ListingCard from "../listings/ListingCard";
import Link from "next/link";

export default function LandingSection() {
  const scrollRef = useRef<HTMLUListElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // 잡은 시작점 위치
  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };
  // 놓은거
  const onMouseLeave = () => setIsDragging(false);
  const onMouseUp = () => setIsDragging(false);

  // 움직인만큼 스크롤에 반영
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // 드래그 속도 배율
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <ul
      ref={scrollRef}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      className={`flex gap-3 overflow-x-auto pb-2 select-none ${
        isDragging ? "cursor-grabbing" : "cursor-grab"
      }`}
      style={{ scrollbarWidth: "none" }}
    >
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <li key={n} style={{ flexShrink: 0, width: "160px" }}>
          <Link href={'/listings/1'}><ListingCard /></Link>
        </li>
      ))}
    </ul>
  );
}
