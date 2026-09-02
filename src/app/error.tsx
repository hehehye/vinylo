// app/error.tsx (전역) 또는 app/listings/error.tsx (특정 라우트 세그먼트용)
"use client"; // error.tsx는 반드시 클라이언트 컴포넌트여야 함

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <p className="text-lg font-bold mb-2">문제가 발생했어요</p>
      <p className="text-sm text-gray-500 mb-6">
        잠시 후 다시 시도해주세요.
      </p>
      <button
        onClick={reset}
        className="px-6 py-2.5 rounded-lg bg-black text-white text-sm font-medium"
      >
        다시 시도
      </button>
    </div>
  );
}