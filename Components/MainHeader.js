'use client';


import Link from "next/link";
import Logoimg from '@/assets/logo.png';
import Image from "next/image";
import style from './MainHeader.module.css'
import MainheaderBg from "./mainHeaderBg";
import { usePathname } from "next/navigation";
export default function MainHeader  () {
  const path = usePathname();
  return (
    <>
    
    <MainheaderBg />
    
    <header className={style.header}>
         <Link href="/" className={style.logo}>
          <Image src={Logoimg} alt="A plate with food on it" priority />
          Next Level food
          </Link>
        <nav className={style.nav}>
          <ul> <li>
                <Link href="/meals" className={path.startsWith('/meals') ? style.active : undefined}>Browse meals</Link>
            </li>
            <li>
                <Link href='/community' className={path.startsWith('/community') ? style.active : undefined}>Foodies community</Link>
            </li>
          </ul>
        </nav>
    </header>
    </>
  )
}
