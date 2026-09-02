"use client";

export default function CategoryModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <>
      {/* 배경 오버레이 - 화면 전체, 페이지 컨테이너(560px) 안에서만 어두워지게 */}
      <div
        onClick={onClose}
        className="fixed top-14 left-0 right-0 bottom-0 z-40"
      >
        <div className="max-w-[560px] h-full mx-auto bg-black/50" />
      </div>

      {/* 사이드 드로어 - 560px 컨테이너의 왼쪽에 붙음 */}
      <div className="fixed top-14 left-0 right-0 bottom-0 z-50 pointer-events-none">
        <div className="max-w-[560px] h-full mx-auto relative">
          <div
            className="absolute top-0 left-0 h-full w-60 bg-white shadow-lg pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className="p-4 font-bold">카테고리</h1>
          </div>
        </div>
      </div>
    </>
  );
}
