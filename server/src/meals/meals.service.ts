import { Inject, Injectable } from '@nestjs/common';
import { MEAL_REPOSITORY } from 'src/db/constants';
import { Meal } from 'src/db/models/meals.entity';

@Injectable()
export class MealsService {
  constructor(
    @Inject(MEAL_REPOSITORY) private readonly mealsRepository: typeof Meal,
  ) {}

  public async addMeal(meal: Meal) {
    return await this.mealsRepository.create<Meal>(meal);
  }

  public async getAllUserMeal(userId: number, planId: number) {
    return await this.mealsRepository.findAll({ where: { userId, planId } });
  }

  public async getAllMealsByMealType(mealType: string) {
    return await this.mealsRepository.findAll({ where: { type: mealType } });
  }
}
