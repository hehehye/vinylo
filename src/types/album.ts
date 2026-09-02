// types/album.ts - Discogs에서 가져오는 마스터 데이터
export interface  Album {
  id: string;
  discogsId: string;
  title: string;
  artist: string;
  genre: string;
  coverImageUrl: string;
  tracklist: { position: string; title: string; duration: string }[];
};

// types/listing.ts - 판매 매물
export interface Listing  {
  id: string;
  albumId: string;
  sellerId: string;
  price: number;
  condition: "S급" | "A급" | "B급";
  edition: "오리지널반" | "재발매반" | "한정반";
  vinylColor: "블랙반" | "컬러반" | "픽처디스크";
  status: "예약확인" | "예약확정" | "예약거절" | "픽업완료" | "예약취소";
  likes: number;
};

// types/collection.ts - 나의 바이닐
export interface CollectionItem  {
  id: string;
  userId: string;
  albumId: string;
  addedAt: string;
};