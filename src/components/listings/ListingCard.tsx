// components/ListingCard.tsx
 
export default function ListingCard( ) {
  return (
    <div className="max-w-[160px] mb-4">
      <div className="animate-pulse w-[160px] py-20 px-8 bg-gray-300 rounded-md" />
      <p className="text-md mt-2">앨범명</p>
      <p>
        <span className="font-bold text-sm">00,000</span>원
      </p>
    </div>
  );
}

