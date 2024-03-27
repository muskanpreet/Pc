import Link from 'next/link'
import style from './page.module.scss'
import MealsGrid from '@/Components/meals/mealsGrid'
import { getMeals } from '@/lib/meals';
//here we can simply get data with async and await no fetching is needed
export default async function meals() {
  const meals = await getMeals();

  return (
   <>
   <header className={style.header}>
    <h1>
      Delicious meals, created<span className={style.highlight}>by Muskanpreet</span>
    </h1>
    <p>Choose your favourite recipe and cook it yourself. It is easy and fun</p>
    <p className={style.cta}>
      <Link href="/meals/share"> Share your own recipe</Link>
    </p>
   </header>
   <main className={style.main}>
    <MealsGrid meals={meals}/>
   </main>
   </>
  )
}
