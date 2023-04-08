import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { usersProviders } from './user.provider';
import { usersPlanProvider } from './users-plan.provider';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, ...usersProviders, ...usersPlanProvider],
})
export class UserModule {}
