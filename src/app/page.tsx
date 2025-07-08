import Image from "next/image";
import HeaderMenu from "@/components/HeaderMenu/HeaderMenu";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="w-full bg-black text-white min-h-screen flex flex-col items-center justify-between p-4">
      <HeaderMenu />
     
      <Footer />
    </div>
  );
}
