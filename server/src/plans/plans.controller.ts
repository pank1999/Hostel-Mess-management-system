import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Plan } from 'src/db/models/plan.entity';
import { PlansService } from './plans.service';

@Controller('plans')
export class PlansController {
  constructor(protected planService: PlansService) {}

  @Post('/')
  public addPlan(@Body() plan: Plan) {
    return this.planService.addPlan(plan);
  }

  @Get('/:id')
  public getPlan(@Param('id') id: number) {
    return this.planService.getPlanById(id);
  }
}
