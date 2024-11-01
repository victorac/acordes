// import GridContainer from "@/components/GridContainer";
import Neck from "@/components/Neck";

export default function Home() {
  return (
    <div className="flex flex-col w-screen items-center">
      <nav className="flex items-center justify-between w-full h-[38px] pt-2 px-4 text-[#B3BDC7] text-[11px] leading-3">
        <h1 className="px-4">Acorde</h1>
        <a className="px-4 py-2" href="./settings">
          Settings
        </a>
      </nav>
      <main className="flex-grow w-full">
        {/* <GridContainer /> */}
        <Neck/>
      </main>
    </div>
  );
}
