// components/collection/AlbumGrid.tsx
import AlbumThumbCard from "./AlbumThumbCard";

type AlbumThumb = {
  id: string;
  coverImageUrl: string;
  title: string;
};

export default function AlbumGrid({ albums }: { albums: AlbumThumb[] }) {
  return (
    <div className="grid grid-cols-3 gap-[3px]">
      {albums.map((album) => (
        <AlbumThumbCard key={album.id} album={album} />
      ))}
    </div>
  );
}