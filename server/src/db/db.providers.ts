import { Sequelize } from 'sequelize-typescript';
import { User } from './models/user.entity';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from './constants/index';
import { DataBaseConfig } from './db.config';
import { UsersPlan } from './models/users-plan.entity';
import { Plan } from './models/plan.entity';
import { Meal } from './models/meals.entity';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = DataBaseConfig.development;
          break;
        case TEST:
          config = DataBaseConfig.test;
          break;
        case PRODUCTION:
          config = DataBaseConfig.production;
          break;
        default:
          config = DataBaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([User, UsersPlan, Plan, Meal]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
