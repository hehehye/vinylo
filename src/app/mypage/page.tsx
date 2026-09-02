// app/mypage/page.tsx
import { Package, MessageSquare, Settings, Headset, UserIcon } from "lucide-react";
import ProfileCard from "./_component/ProfileCard";
import SalesPurchaseToggle from "./_component/SalesPurchaseToggle";
import QuickMenuGrid from "./_component/QuickMenuGrid";
import MenuList from "./_component/MenuList";

export default function Page() {
  return (
    <div className="mt-24">
      <ProfileCard
        avatarUrl="/dummy-avatar.png"
        nickname="닉네임"
        rating={0}
        reviewCount={0}
        followerCount={0}
        followingCount={0}
      />

      <div className="mt-6">
        <SalesPurchaseToggle />
      </div>

      <QuickMenuGrid />

      <div className="mt-10">
        <MenuList
          title="나의 활동"
          items={[
            { href: "/mypage/sales", icon: Package, label: "내 판매 내역" },
            {
              href: "/mypage/reviews",
              icon: MessageSquare,
              label: "내 상점 후기",
            },
            { href: "/auth/login", icon: UserIcon, label: "로그인" },
            { href: "/mypage/settings", icon: Settings, label: "설정" },
            { href: "/mypage/support", icon: Headset, label: "고객센터" },
          ]}
        />
      </div>
    </div>
  );
}
