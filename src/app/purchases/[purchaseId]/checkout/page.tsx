// app/purchases/[purchaseId]/checkout/page.tsx
import { RoundBackButton, XBackButton } from "@/components/ui/BackButton";
import {  X, Info } from "lucide-react"; 

export default async function CheckoutPage({
  params,
}: {
  params: { purchaseId: string };
}) {
  //   const purchase = await getPurchase(params.purchaseId);
  //   const listing = await getListing(purchase.listingId);

  return (
    <div className="min-h-screen pb-24">
      {/* 헤더 */}
      <header className="fixed top-0  w-full bg-white flex items-center justify-between max-w-[560px] mx-auto px-4 py-3 border-b border-gray-100">
        <RoundBackButton color="black"/>
        <span className="font-bold text-base">결제</span>
        <XBackButton color="black"/>
      </header>

      <div className="max-w-[560px] mx-auto mt-12 px-4">
        {/* 거래방법 */}
        <section className="pt-6">
          <h2 className="font-bold text-base mb-2">거래방법</h2>
          <p className="text-sm text-gray-700">일반택배 (선불)</p>
        </section>

        {/* 배송지 */}
        <section className="pt-6">
          <h2 className="font-bold text-base mb-2">배송지</h2>
          <div className="border border-gray-200 rounded-lg p-4 flex items-start justify-between">
            <div className="space-y-1">
              <p className="font-bold text-sm">받는사람 이름</p>
              <p className="text-sm text-gray-600">
                (00000) 배송지 주소가 들어갑니다
              </p>
              <p className="text-sm text-gray-600">010-0000-0000</p>
            </div>
            <button className="text-sm text-gray-500 underline shrink-0">
              변경
            </button>
          </div>
          <p className="text-sm text-gray-400">
            * 주소 및 개인정보는 DB에 저장되지 않습니다
          </p>
          <label className="flex items-center gap-2 mt-3 text-sm text-gray-700">
            <input type="checkbox" defaultChecked className="w-4 h-4" />
            안심번호 사용{" "}
            <span className="text-gray-400 underline">자세히</span>
          </label>
        </section>

        {/* 요청사항 */}
        <section className="pt-6">
          <h2 className="font-bold text-base mb-2">
            판매자분께 전달할 요청 사항을 적어주세요
          </h2>
          <input
            type="text"
            placeholder="예) 포장 꼼꼼하게 부탁드려요"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none"
          />
        </section>

        {/* 주문 상품 */}
        <section className="pt-8">
          <h2 className="font-bold text-base mb-3">주문 상품</h2>
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-gray-200 rounded-md shrink-0" />
            <div>
              <p className="font-bold text-sm">00,000원</p>
              <p className="text-sm text-gray-500">앨범명 · 아티스트</p>
            </div>
          </div>
        </section>

        {/* 결제수단 */}
        <section className="pt-8">
          <h2 className="font-bold text-base mb-3">결제수단</h2>
          <div className="border border-gray-200 rounded-lg divide-y divide-gray-100">
            <label className="flex items-center gap-3 px-4 py-4 cursor-pointer">
              <input
                type="radio"
                name="payment"
                defaultChecked
                className="w-4 h-4"
              />
              <span className="font-bold text-sm">토스페이먼츠</span>
            </label>
            <label className="flex items-center gap-3 px-4 py-4 cursor-pointer">
              <input type="radio" name="payment" className="w-4 h-4" />
              <span className="text-sm text-gray-500">
                결제 스킵 (테스트용)
              </span>
            </label>
          </div>
        </section>

        {/* 결제금액 */}
        <section className="pt-8">
          <h2 className="font-bold text-base mb-3">결제금액</h2>
          <div className="border border-gray-200 rounded-lg p-4 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">상품금액</span>
              <span>00,000원</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 flex items-center gap-1">
                배송비 <Info className="w-3 h-3" />
              </span>
              <span>+0,000원</span>
            </div>
            <div className="flex justify-between pt-3 border-t border-gray-100">
              <span className="font-bold">총 결제금액</span>
              <span className="font-bold text-base">00,000원</span>
            </div>
          </div>
        </section>

        {/* 약관 동의 */}
        <section className="pt-8">
          <label className="flex items-center gap-2 text-sm font-bold">
            <input type="checkbox" className="w-4 h-4" />
            아래 내용에 전체 동의해요.
          </label>
          <div className="mt-3 space-y-2 text-xs text-gray-500">
            <div className="flex items-center justify-between">
              <span>✓ 서비스 이용약관 동의 (필수)</span>
              <span className="underline">자세히</span>
            </div>
            <div className="flex items-center justify-between">
              <span>✓ 개인정보 제3자 제공 동의 (필수)</span>
              <span className="underline">자세히</span>
            </div>
          </div>
        </section>
      </div>

      {/* 하단 고정 결제 버튼 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100">
        <div className="max-w-[560px] mx-auto px-4 py-3">
          <button className="w-full py-4 rounded-lg bg-[var(--primary)] text-white font-bold text-base">
            00,000원 결제하기
          </button>
        </div>
      </div>
    </div>
  );
}
