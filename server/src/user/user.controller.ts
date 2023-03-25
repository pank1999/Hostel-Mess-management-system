import { Body, Controller, Post } from '@nestjs/common';
import { UserDto, UserLoginDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(protected userService: UserService) {}
  @Post('/register')
  public register(@Body() user: UserDto) {
    console.log(user);
    return this.userService.register(user);
  }

  @Post('/login')
  public login(@Body() userLoginDetails: UserLoginDto) {
    return this.userService.login(userLoginDetails);
  }
}
