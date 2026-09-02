import { Disc, Home, Search, UserIcon } from "lucide-react";
import Link from "next/link";
import SpeedDial from "./SpeedDial";

export default function BottomNav() {
  return (
    <nav className="w-full bg-white  px-2 py-1">
      <ul className="flex justify-between items-center px-6 py-2">
        <li>
          <Link href={"/"}>
            <Home />
          </Link>
        </li>
        <li>
          <Link href={"/search"}>
            <Search />
          </Link>
        </li>
        <li>
          <SpeedDial />
        </li>
        <li>
          <Link href={"/collection"}>
            <Disc />
          </Link>
        </li>
        <li>
          <Link href={"/mypage"}>
            <UserIcon />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
