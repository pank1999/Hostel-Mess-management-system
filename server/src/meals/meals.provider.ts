import { MEAL_REPOSITORY } from 'src/db/constants';
import { Meal } from 'src/db/models/meals.entity';

export const mealsProvider = [
  {
    provide: MEAL_REPOSITORY,
    useValue: Meal,
  },
];
