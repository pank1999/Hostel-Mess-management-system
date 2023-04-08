import { Inject, Injectable } from '@nestjs/common';
import { USER_PLAN_REPOSITORY, USER_REPOSITORY } from 'src/db/constants';
import { ILoginUser } from 'src/db/interface/user.interface';
import { User } from 'src/db/models/user.entity';
import { UserDto } from './dto/user.dto';

import * as bcrypt from 'bcrypt';
import { UsersPlan } from 'src/db/models/users-plan.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
    @Inject(USER_PLAN_REPOSITORY)
    private readonly userPlanRepository: typeof UsersPlan,
  ) {}
  public async register(user: UserDto) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const userDB = await this.userRepository.findOne<User>({
      where: { mobileNumber: user.mobileNumber },
    });
    if (!userDB) {
      return await this.userRepository.create<User>({
        ...user,
        password: hashedPassword,
      });
    }
    return { message: 'user already exits with this mobile number!' };
  }

  public async login(userLoginDetails: ILoginUser) {
    const mobileNumber = userLoginDetails.mobileNumber;
    const password = userLoginDetails.password;
    const user = await this.userRepository.findOne<User>({
      where: { mobileNumber },
    });
    const isUserVerified = await this.verifyUser(password, user.password);
    if (isUserVerified) {
      return user;
    }
    return { message: 'incorrect password' };
  }

  private async verifyUser(password: string, dbPassword: string) {
    return await bcrypt.compare(password, dbPassword);
  }

  public async addUserPlan(userPlan: UsersPlan) {
    return await this.userPlanRepository.create<UsersPlan>(userPlan);
  }

  public async getActiveUserPlan(userId: number, isActive: boolean) {
    return await this.userPlanRepository.findOne({
      where: { userId, isActive },
    });
  }
  public async getAllActivePlanUser(isActive: boolean) {
    return await this.userRepository.findAll({ include: [UsersPlan] });
  }
  public async getFilteredActivePlanUser(isActive: boolean, query: string) {
    const users = await this.userRepository.findAll({ include: [UsersPlan] });
    if (query == 'all') {
      return users;
    }
    const filteredUser = users.filter((user) =>
      user.name.toLowerCase().includes(query),
    );
    return filteredUser;
  }

  public async getAllUserPlan(userId: number) {
    return await this.userPlanRepository.findAll({
      where: { userId },
    });
  }

  public async getUserById(id: number) {
    return await this.userRepository.findByPk(id);
  }
}
