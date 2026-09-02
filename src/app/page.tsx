import LandingSection from "@/components/ui/LandingSection";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="pt-16">
         <div className="animate-pulse w-full py-28 px-8 bg-gray-300 rounded-md" />
      </section>
      <section className="my-8">
        <div className="flex items-center justify-between py-3">
          <h2 className="text-lg font-medium">최근 본 상품</h2>
          <span className="text-sm text-gray-600">
            <Link href={"/recent"}>더 보기</Link>
          </span>
        </div>
        <LandingSection />
      </section>
      <section className="my-8">
        <div className="flex items-center justify-between py-3">
          <h2 className="text-lg font-medium">유저들이 많이 본 상품</h2>
          <span className="text-sm text-gray-600">
            <Link href={"/recent"}>더 보기</Link>
          </span>
        </div>
        <LandingSection />
      </section>
  
    </div>
  );
}
