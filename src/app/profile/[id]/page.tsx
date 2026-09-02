import DetailHeader from "@/components/layout/DetailHeader"; 
import Tabs from "../_component/Tabs"; 
export default function page() {
  return (
    <div>
      <DetailHeader />
      <div className="pt-20">
        <div className="flex gap-2">
          <div className="rounded-full bg-gray-300 py-6 px-6"></div>
          <div className="flex flex-col">
            <span>유저명</span>
            <span className="text-stone-400 text-sm">@abcd1234</span>
          </div>
        </div>
      </div>
      <Tabs/>
    </div>
  );
}
