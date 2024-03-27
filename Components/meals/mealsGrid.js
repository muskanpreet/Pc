import MealItem from "./mealItem";
import style from "./mealsGris.module.scss";

export default function MealsGrid({ meals }) {
  return (
    <>
      <ul className={style.meals}>
        {meals.map((meal) => (
          <li key={meal.id}>
            <MealItem {...meal}/>
          </li>
        ))}
      </ul>
    </>
  );
}
