"use client";

import { MoreVerticalIcon, ShareIcon } from "lucide-react";
import { RoundBackButton } from "../ui/BackButton"; 
import { toast } from "sonner";

export default function DetailHeader() {
  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("현재 URL이 복사되었습니다.");
    } catch {
      toast.error("복사에 실패했어요. 다시 시도해주세요.");
    }
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 max-w-[560px] mx-auto bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="flex justify-between items-center gap-3 h-14 ">
        <RoundBackButton color="black"/>
        <div />
         
        <div className="flex gap-4">
          <ShareIcon onClick={()=>{handleShare()}}/> 
          <MoreVerticalIcon/>
        </div>
      </div> 
    </header>
  );
}
