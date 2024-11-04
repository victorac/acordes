import ActionBar from "@/components/ActionBar";
import Header from "@/components/Header";
import Neck from "@/components/Neck";

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen items-center bg-[#101013]">
      <Header />
      <Neck />
      <ActionBar />
    </div>
  );
}
