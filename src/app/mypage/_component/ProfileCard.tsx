// app/mypage/_components/ProfileCard.tsx
import Image from "next/image";
import { ChevronRight, Star } from "lucide-react";
import Link from "next/link";

type ProfileCardProps = {
  avatarUrl: string;
  nickname: string;
  rating: number;
  reviewCount: number;
  followerCount: number;
  followingCount: number;
};

export default function ProfileCard({
  avatarUrl,
  nickname,
  rating,
  reviewCount,
  followerCount,
  followingCount,
}: ProfileCardProps) {
  return (
    <Link
      href="/profile/me"
      className="flex items-center justify-between rounded-2xl border border-black/20 bg-surface px-5 py-4"
    >
      <div className="flex items-center gap-3">
        <div className="relative w-14 h-14 rounded-full overflow-hidden bg-bg shrink-0">
          {/* <Image src={avatarUrl} alt={nickname} fill className="object-cover" /> */}
          
          <div className="rounded-full bg-gray-300 py-8 px-8"></div>
        </div>
        <div>
          <p className="font-bold text-lg">{nickname}</p>
          <p className="text-sm text-text-secondary flex items-center gap-1 mt-0.5">
            <Star className="w-3.5 h-3.5 fill-accent text-accent" />
            {rating.toFixed(1)} · 후기 {reviewCount} · 팔로워 {followerCount} · 팔로잉{" "}
            {followingCount}
          </p>
        </div>
      </div>
      <ChevronRight className="w-5 h-5 text-text-muted shrink-0" />
    </Link>
  );
}