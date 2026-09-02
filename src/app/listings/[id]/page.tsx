import { ActionBar } from "@/components/listings/ActionBar";
import { RoundBackButton } from "@/components/ui/BackButton";
import { ProfileCard, ProfileCardSmall } from "@/components/user/ProfileCard";
import { getListing } from "@/lib/listings";
import { Heart } from "lucide-react";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
   const listing = await getListing(id);

  if (!listing) {
    notFound();
  } 

  return (
    <div>
      <div className="py-2">
        <div className="bg-black/60 w-8 h-8 cursor-pointer rounded-full flex justify-center items-center">
          <RoundBackButton color="white" />
        </div>
      </div>
      <section className="py-20">
        <div>
          <div className="py-56 relative">
            <span className="flex justify-center text-3xl font-bold text-stone-300">
              VINYL
            </span>
            <span
              className="absolute bottom-8 left-0 font-bold 
            text-stone-500 border border-stone-200 px-2 rounded-lg"
            >
              1/3
            </span>
          </div>
          {/* <div>
            <ul className="flex gap-2 mt-2">
              {" "}
              <li className="border border-blue-300 w-16 h-16 rounded-xl"></li>
              {[1, 2].map((d) => (
                <li
                  className="border border-stone-400 w-16 h-16 rounded-xl"
                  key={d}
                ></li>
              ))}
            </ul>
          </div> */}
          <ProfileCardSmall />
        </div>
        <div className="py-6 flex items-center justify-between">
          <div>
            <p className="font-bold text-lg">앨범명</p>
            <p className="text-sm pb-2">아티스트 · 장르 · 상태</p>
            <b className="text-lg">00,000원</b>
          </div>
          <div className="pb-2">
            <div className="py-2 px-2 border border-gray-300 rounded-full">
              <Heart />
            </div>
          </div>
        </div>
        <div>
          <pre>
            상세 설명입니다. <br />
            상태좋습니다.
          </pre>
        </div>
        <div className="mt-12 flex items-center justify-between">
          <span>음반 &gt; 재즈 </span>
          <p>0시간 전 등록</p>
        </div>
        <ProfileCard />
      </section>
      <ActionBar />
    </div>
  );
}
