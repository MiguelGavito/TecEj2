import Link from "next/link";
import Image from "next/image";
import logo from '../../public/outerwildsLogo.png'


export default function Navigation() {
  return (
    <nav className="w-full px-8 py-4 flex items-center justify-between bg-blue-600 shadow-sm">
        <div className="flex items-center gap-8">
        {/*navbar*/}
        <div className="space-x-9 flex items-center justify-center bg-green-900 justify-self-auto">
            {/*imagen*/}
            <Link href={'/'}>
                <Image
                    src={logo}
                    alt="Logo"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-md"
                />
                
            </Link>
            <div>
            
            </div>
            {/*paginas*/}
            <div className="space-x-20 justify-right">
            <Link href="/">Home</Link>
            <Link href="/page1">Page 1</Link>
            <Link href="/">Page 2</Link>
            </div>
        </div>
        
        {/*Bienvenida*/}
        <div className="min-h-screen flex flex-col items-center justify-center gap-4">
            Welcome
        </div>
        </div>
    </nav>
  )
}