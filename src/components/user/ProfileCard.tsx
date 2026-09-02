import { Star } from "lucide-react";
import Link from "next/link";

export function ProfileCard() {
  return (
    <div className="py-12">
      <Link href={"/profile/1"}>
        <div className="flex  items-center justify-between">
          <div className="flex gap-2">
            <div className="rounded-full bg-gray-300 py-6 px-6"></div>
            <div className="flex flex-col">
              <span>유저명</span>
              <span className="text-stone-400 text-sm">@abcd1234</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Star fill="black" />
            <b>5.0</b>
          </div>
        </div>
      </Link>
    </div>
  );
}
export function ProfileCardSmall() {
  return (
    <div>
      <Link href={"/profile/1"}>
        <div className="flex gap-2">
          <div className="rounded-full bg-gray-300 py-6 px-6"></div>
          <div className="flex flex-col">
            <span>유저명</span>
            <span className="text-stone-400 text-sm">@abcd1234</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
