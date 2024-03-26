import Link from "next/link";
import Logoimg from '@/assets/logo.png';
import Image from "next/image";
import style from './MainHeader.module.css'
import MainheaderBg from "./mainHeaderBg";
export default function MainHeader  () {
  return (
    <>
    
    <MainheaderBg></MainheaderBg>
    
    <header className={style.header}>
         <Link href="/" className={style.logo}>
          <Image src={Logoimg} alt="A plate with food on it" priority />
          Next Level food
          </Link>
        <nav className={style.nav}>
          <ul> <li>
                <Link href="/meals">Browse meals</Link>
            </li>
            <li>
                <Link href='/community'>Foodies community</Link>
            </li>
          </ul>
        </nav>
    </header>
    </>
  )
}
