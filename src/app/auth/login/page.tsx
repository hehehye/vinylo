import KakaoLoginButton, {
  GoogleLoginButton,
} from "@/components/auth/LoginButton"; 
import { XBackButton } from "@/components/ui/BackButton";
 
import { Disc3, Mail } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col pt-16 pb-8">
      <div className="mb-4">
        <XBackButton color="black" />
      </div>

      {/* 브랜드 + 헤드라인 */}
      <div className="flex-1">
        <div className="flex gap-1.5 mb-4">
          <Disc3 className="w-4 h-4 text-accent" strokeWidth={1.5} />
          <p
            className="text-sm font-bold tracking-tight text-accent"
            style={{ fontFamily: "var(--font-display)" }}
          >
            VINYLO
          </p>
        </div>
        <h1 className="text-xl font-bold text-black leading-snug">
          내 취향의 바이닐을
          <br />
          찾고, 팔고, 모아보세요
        </h1>
        <p className="text-sm text-black/50 mt-2">
          믿을 수 있는 개인 간 거래로 시작하는 나만의 컬렉션
        </p>
      </div>


      {/* 하단 로그인 영역 */}
      <div className="space-y-5">
        {/* 데모 계정 */}
        <button
          type="button"
          className="w-full py-3.5 rounded-xl border border-primary text-primary text-sm font-bold"
        >
          데모계정으로 테스트 해보기
        </button>

        {/* 구분선 */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400 whitespace-nowrap">
            간편 로그인
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* 소셜 로그인 버튼들 */}
        <div className="space-y-2.5">

          <div className="w-full py-3.5 cursor-pointer rounded-xl bg-[#FEE500] hover:bg-[#FDD835] text-text text-sm font-bold flex items-center justify-center gap-2">
            <KakaoLoginButton />
          </div>

          <div className="w-full py-3.5 border border-[#dadce0] hover:border-[#c8c9cb] cursor-pointer rounded-xl bg-[#ffffff] text-text text-sm font-bold flex items-center justify-center gap-2">
            <GoogleLoginButton />
          </div> 
          <button
            type="button"
            disabled
            className="w-full py-3.5 rounded-xl bg-gray-100 text-gray-400 text-sm font-bold flex items-center justify-center gap-2 disabled:cursor-not-allowed"
          >
            <Mail className="w-4 h-4" />
            이메일로 시작하기
          </button>
        </div>

        {/* 회원가입 링크 */}
        <p className="text-center text-xs text-gray-400 pt-1">
          아직 회원이 아니신가요?{" "}
          <Link
            href="/signup"
            className="text-gray-700 underline underline-offset-2"
          >
            회원가입
          </Link>
        </p>
      </div>
    </div>
  );
}
