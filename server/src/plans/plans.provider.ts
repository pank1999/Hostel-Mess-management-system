import { PLAN_REPOSITORY } from 'src/db/constants';
import { Plan } from 'src/db/models/plan.entity';

export const plansProviders = [
  {
    provide: PLAN_REPOSITORY,
    useValue: Plan,
  },
];
