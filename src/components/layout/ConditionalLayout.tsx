"use client";
import { usePathname } from "next/navigation";
import Header from "./Header";
import BottomNav from "./BottomNav";

// 기본 1단계 페이지에선 header, bottomnav보여주고,
// 상세페이지에서 숨기는 용도
function shouldHideHeader(pathname: string): boolean {
  if (pathname.startsWith("/listings") && pathname !== "/listings") {
    return true;
  }
  if (pathname.startsWith("/auth/login")) {
    return true;
  }
  if (pathname.startsWith("/search")) {
    return true;
  }
  if (pathname.startsWith("/profile")) {
    return true;
  }
  if (pathname.startsWith("/purchases")) {
    return true;
  }
  return false;
}
function shouldHideNav(pathname: string): boolean {
  if (pathname.startsWith("/listings") && pathname !== "/listings") {
    return true;
  }
  if (pathname.startsWith("/auth/login")) {
    return true;
  }
  if (pathname.startsWith("/purchases")) {
    return true;
  }
  return false;
}

export function ConditionalHeader() {
  const pathname = usePathname();
  if (shouldHideHeader(pathname)) return null;
  return <Header />;
}

export function ConditionalBottomNav() {
  const pathname = usePathname();
  if (shouldHideNav(pathname)) return null;
  return <BottomNav />;
}
