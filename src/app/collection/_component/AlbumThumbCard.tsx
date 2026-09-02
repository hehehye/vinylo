// components/collection/AlbumThumbCard.tsx
import Image from "next/image";
import Link from "next/link";

type AlbumThumb = {
  id: string;
  coverImageUrl: string;
  title: string;
};

export default function AlbumThumbCard({ album }: { album: AlbumThumb }) {
  return (
    <Link
      href={`/browse/${album.id}`}
      className="group relative block aspect-square overflow-hidden bg-gray-200"
    >
      <Image
        src={album.coverImageUrl}
        alt={album.title}
        fill
        className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.06] group-hover:-translate-y-0.5"
      />

      {/* 비닐 반사 - 평소엔 숨김, 호버 시 스윽 지나감 */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 -translate-x-1/3 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-x-1/3"
        style={{
          background:
            "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.35) 45%, rgba(255,255,255,0.1) 55%, transparent 70%)",
        }}
      />

      {/* 살짝 뜨는 그림자 (호버 시) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 shadow-[0_8px_20px_rgba(0,0,0,0.25)] transition-opacity duration-300 group-hover:opacity-100"
      />
    </Link>
  );
}