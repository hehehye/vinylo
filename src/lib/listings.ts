export type Listing = {
  id: string;
  title: string;
  price: number;
};

const listings: Listing[] = [
  { id: "1", title: "Kind of Blue", price: 85000 },
  { id: "2", title: "Abbey Road", price: 120000 },
];

export function getListing(id: string): Listing | null {
  const listing = listings.find((l) => l.id === id);
  return listing ?? null;
}