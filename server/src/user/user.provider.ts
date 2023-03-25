import { User } from './../db/models/user.entity';
import { USER_REPOSITORY } from './../db/constants/index';

export const usersProviders = [
  {
    provide: USER_REPOSITORY,
    useValue: User,
  },
];
