import { Module } from '@nestjs/common';
import { PlansController } from './plans.controller';
import { plansProviders } from './plans.provider';
import { PlansService } from './plans.service';

@Module({
  imports: [],
  controllers: [PlansController],
  providers: [PlansService, ...plansProviders],
})
export class PlansModule {}
