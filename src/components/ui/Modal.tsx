import Link from "next/link";

export function Popover({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen:()=>void}) {
  return (
    <>
      {isOpen && (
        <div className="absolute right-0 top-11 w-28 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-gray-100 py-1.5 z-50">
          <Link
            href="/mypage"
            className="block px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-50"
            // onClick={() => setIsOpen(false)}
          >
            마이페이지
          </Link>
          <Link
            href="/reservation"
            className="block px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-50"
            // onClick={() => setIsOpen(false)}
          >
            예약내역
          </Link> 
        </div>
      )}
    </>
  );
}
