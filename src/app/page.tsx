import Image from "next/image";
import Navigation from "./components/Navigation";
import Logo from "../../public/next.svg";


export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-73px)] flex-col items-center justify-center p-8">
      <div className="flex flex-col items-center gap-8">

        
        <Image
          src={Logo}
          alt="Logo"
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
        <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
          Get Started
        </button>
      </div>
    </main> 
  )
}
