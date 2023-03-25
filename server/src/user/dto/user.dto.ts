export class UserDto {
  readonly name: string;
  readonly mobileNumber: number;
  readonly password: string;
}

export class UserLoginDto {
  readonly mobileNumber: number;
  readonly password: string;
}
