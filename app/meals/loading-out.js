import style from './loading.module.scss'
export default function MealsLoading()
{
    return (<p className={style.loading}>Fetching Meals...</p>)
}