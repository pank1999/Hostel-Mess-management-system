import { Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY } from 'src/db/constants';
import { ILoginUser } from 'src/db/interface/user.interface';
import { User } from 'src/db/models/user.entity';
import { UserDto } from './dto/user.dto';

import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
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
}
