import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/next.svg"; 


export default function Navigation() {
  return (
    <nav className="w-full px-8 py-4 flex items-center justify-between bg-blue-600 shadow-sm">
        <div className="flex items-center gap-8">
        {/*navbar*/}
            {/*imagen*/}
            <Link href={'/'}>
                <Image
                    src={Logo}
                    alt="Logo"
                    width={100}
                    height={24}
                    className="invert"
                />
            </Link>
            
            <div className="flex gap-6">
                <Link href="/" className="text-white hover:text-gray-200">
                    Home
                </Link>
                <Link href="/page1" className="text-white hover:text-gray-200">
                    Page 1
                </Link>
                <Link href="/page2" className="text-white hover:text-gray-200">
                    Page 2
                </Link>
                <Link href="/page3" className="text-white hover:text-gray-200">
                    Page 3
                </Link>
                <Link href="/counter" className="text-white hover:text-gray-200">
                    Counter
                </Link>
                <Link href="/signup" className="text-white hover:text-gray-200">
                    Sign up
                </Link>
            </div>
        </div>
    </nav>
  )
}