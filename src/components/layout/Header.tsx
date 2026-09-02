"use client";
import { BellIcon, PlusIcon, SearchIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import HamburgerIcon from "../ui/MenuIcon";
import { usePathname } from "next/navigation";
import SearchOverlay from "../ui/SearchOverlay";
import { useState } from "react";
import CategoryModal from "../ui/CategoryModal";
import { Popover } from "../ui/Popover";

export default function Header() {
  const pathname = usePathname();
  const hideLogo = pathname === "/mypage" || pathname === "/collection";
  const collecLogo = pathname === "/collection";
  const myLogo = pathname === "/mypage";
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogout = () => {};
  const openSearchBar = () => {
    setIsSearchOpen(true);
    setIsCategoryOpen(false);
  };
  const openCategory = () => {
    setIsCategoryOpen(true);
    setIsSearchOpen(false);
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-[999] bg-white">
      {/* 여기 안쪽에 max-w 컨테이너를 반드시 넣어야 함 */}
      <div className="max-w-[560px] mx-auto px-4">
        <SearchOverlay
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />
        <div className="flex z-999 items-center justify-between py-3">
          {collecLogo ? (
            <div>
              <h1 className="flex-1 text-lg font-bold truncate">내 바이닐</h1>
            </div>
          ) : (
            <></>
          )}
          {myLogo ? <div></div> : <></>}
          <CategoryModal
            isOpen={isCategoryOpen}
            onClose={() => setIsCategoryOpen(false)}
          />
          {!hideLogo && (
            <div onClick={() => openCategory()}>
              <HamburgerIcon />
            </div>
          )}
          {!hideLogo && (
            <div className="flex items-center gap-6 select-none">
              <Link href={"/"}>
                <span
                  className="text-2xl font-bold tracking-tight text-text"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  VinylO
                </span>
              </Link>
            </div>
          )}
          {!myLogo && !collecLogo ? (
            <div className="flex items-center gap-4">
              <BellIcon/>
              {/* <UserIcon/> */}
              <button onClick={() => openSearchBar()}>
                <SearchIcon />
              </button>
            </div>
          ) : (
            <></>
          )}
          {collecLogo ? (
            <>
              <Popover
                trigger={<PlusIcon className="w-5 h-5" />}
                items={[{ title: "바이닐 추가", url: "/collection/write" }]}
              />
            </>
          ) : (
            <></>
          )}
          {myLogo ? (
            <Popover
              trigger={<UserIcon className="w-5 h-5" />}
              items={
                isLoggedIn
                  ? [{ title: "로그아웃", onClick: handleLogout }]
                  : [
                      { title: "로그인", url: "/auth/login" },
                      { title: "회원가입", url: "/auth/join" },
                    ]
              }
            />
          ) : (
            <></>
          )}
        </div>
        {/* <div className="mt-6 flex items-center gap-10">
        <div className="flex items-center gap-2">
          <HamburgerIcon />
          <span className="mt-[1px] font-bold">카테고리</span>
        </div>
        <div className="mt-[1px]">
          <ul className="flex font-bold gap-10">
            <li>
              <Link href={"/listings"}>재즈</Link>
            </li>
            <li>
              <Link href={"/listings"}>락</Link>
            </li>
            <li>
              <Link href={"/listings"}>시티팝</Link>
            </li>
            <li>
              <Link href={"/listings"}>클래식</Link>
            </li>
          </ul>
        </div>
      </div> */}
      </div>
    </header>
  );
}
