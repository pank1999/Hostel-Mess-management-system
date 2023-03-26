import { Inject, Injectable } from '@nestjs/common';
import { PLAN_REPOSITORY } from 'src/db/constants';
import { Plan } from 'src/db/models/plan.entity';

@Injectable()
export class PlansService {
  constructor(
    @Inject(PLAN_REPOSITORY) private readonly plansRepository: typeof Plan,
  ) {}
  public async addPlan(plan: Plan) {
    return await this.plansRepository.create<Plan>(plan);
  }

  public async getPlanById(id: number) {
    return await this.plansRepository.findOne({ where: { id } });
  }
}
