// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <p className="text-lg font-bold mb-2">페이지를 찾을 수 없어요</p>
      <p className="text-sm text-gray-500 mb-6">
        요청하신 페이지가 존재하지 않거나 삭제되었어요.
      </p>
      <Link
        href="/"
        className="px-6 py-2.5 rounded-lg bg-black text-white text-sm font-medium"
      >
        홈으로 가기
      </Link>
    </div>
  );
}