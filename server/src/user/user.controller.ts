import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersPlan } from 'src/db/models/users-plan.entity';
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

  @Post('/plan')
  public addUserPlan(@Body() userPlan: UsersPlan) {
    return this.userService.addUserPlan(userPlan);
  }

  @Get('/plan/:id')
  public getUserActivePlan(@Param('id') userId: number) {
    return this.userService.getActiveUserPlan(userId, true);
  }

  @Get('plan/all/:id')
  public getAllUserPlan(@Param('id') userId: number) {
    return this.userService.getAllUserPlan(userId);
  }

  @Get('/')
  public getAllUserWithActivePlan() {
    return this.userService.getAllActivePlanUser(true);
  }

  @Get('/filter/:query')
  public getFilteredUserWithActivePlan(@Param('query') query: string) {
    return this.userService.getFilteredActivePlanUser(true, query);
  }

  @Get('/:id')
  public getUserById(@Param('id') id: number) {
    return this.userService.getUserById(id);
  }
}
