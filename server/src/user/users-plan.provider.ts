import { USER_PLAN_REPOSITORY } from 'src/db/constants';
import { UsersPlan } from 'src/db/models/users-plan.entity';

export const usersPlanProvider = [
  {
    provide: USER_PLAN_REPOSITORY,
    useValue: UsersPlan,
  },
];
