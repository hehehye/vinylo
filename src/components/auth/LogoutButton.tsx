"use client";
import { createClient } from "@/utils/supabase/client"; 
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function LogOutButton({ 
  className = "",
}: { 
  className?: string;
}) {
  const supabase = createClient();
  const router = useRouter();
  const [status, setStatus] = useState("확인 중...");

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("로그아웃 실패");
      return;
    }

    toast.success("로그아웃 되었습니다");

    router.refresh();
    setStatus("로그아웃됨");
  };

  return (
    <div  className={`${className}`} onClick={handleLogout}>
      로그아웃
    </div>
  );
}
