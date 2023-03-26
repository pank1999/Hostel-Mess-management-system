import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { Meal } from 'src/db/models/meals.entity';
import { MealsService } from './meals.service';

@Controller('meals')
export class MealsController {
  constructor(private mealService: MealsService) {}

  @Post('/')
  public addMeal(@Body() meal: Meal) {
    return this.mealService.addMeal(meal);
  }

  @Get('/:id')
  public getAllUserMeal(
    @Query('planId') planId: number,
    @Param('id') userId: number,
  ) {
    this.mealService.getAllUserMeal(userId, planId);
  }

  @Get('/')
  public getAllMealByMealType(@Query('mealType') mealType: string) {
    return this.mealService.getAllMealsByMealType(mealType);
  }
}
