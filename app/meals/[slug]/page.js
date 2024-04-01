import Image from "next/image"
import style from './page.module.scss'
import { getMeal } from "@/lib/meals"
import { notFound } from "next/navigation";
export default function meals({params}) {
  const meal=getMeal(params.slug);
    return (
      <>
      <header className={style.header}>
        <div className={style.image}>
          <Image fill/>
        </div>
        <div className={style.headerText}>
          <h1>TITLE</h1>
          <p className={style.creator}>by <a href={`mailto:${'EMAIL'}`}>Muskan</a></p>
          <p className={style.summary}>Summary</p>
        </div>
      </header>
      <main>
        <p className={style.instructions}
        dangerouslySetInnerHTML={{__html:'...'}}></p>
      </main>
      </>
    )
  }
  