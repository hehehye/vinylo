"use client";
import { useState } from "react";
import { Button } from "../ui/Button";
import Link from "next/link";
export function ActionBar() {
  const [isSoldout, setIsSoldout] = useState(false);
  // async function handleBuyClick() {
  //   const res = await fetch("/api/purchases", {
  //     method: "POST",
  //     body: JSON.stringify({ listingId: listing.id }),
  //   });
  //   const { purchaseId } = await res.json();

  //   router.push(`/purchases/${purchaseId}/checkout`); // id만 URL에 실어서 이동
  // }
  return (
    <>
      <div
        className="fixed flex gap-2 bottom-0 left-1/2 -translate-x-1/2 w-full 
    max-w-app max-w-[560px] p-4 bg-white border-t border-gray-200"
      >
        <Button variant="secondary" size="lg" className="mb-3 rounded-lg">
          채팅하기
        </Button>
        <Button
          variant="primary"
          size="lg"
          disabled={isSoldout === true}
          className="mb-3 rounded-lg"
        >
          <Link href={'/purchases/1/checkout'}>{isSoldout === false ? `구매하기` : "품절"}</Link>
        </Button>
      </div>
    </>
  );
}
