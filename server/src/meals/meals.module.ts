import { Module } from '@nestjs/common';
import { MealsService } from './meals.service';
import { MealsController } from './meals.controller';
import { mealsProvider } from './meals.provider';

@Module({
  providers: [MealsService, ...mealsProvider],
  controllers: [MealsController],
})
export class MealsModule {}
