import Link from "next/link";
import Image from "next/image";
import Logo from '../../public/outerwildsLogo.png'

export default function Home() {
  return (
    <div>
      {/*navbar*/}
      <div className="space-x-9 flex items-center justify-center bg-green-900 justify-self-auto">
        {/*imagen*/}
        <div>
          <Image
            src={Logo}
            alt="Logo"
            height={50}
          />
        </div>
        {/*paginas*/}
        <div className="space-x-20 justify-right">
          <Link href="/">Home</Link>
          <Link href="/">Page 1</Link>
          <Link href="/">Page 2</Link>
        </div>
      </div>
      
      {/*Bienvenida*/}
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        Pagina 2
      </div>
    </div>
  )
}
