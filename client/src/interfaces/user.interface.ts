export interface IUser {
  id: number;
  name: string;
  mobileNumber: number;
  password: string;
  role: string;
  usersPlan: UsersPlan;
}

export interface IPlan {
  title: string;
  noOfMeals: number;
  price: string;
}

export interface UsersPlan {
  userId: number;
  planId: number;
  isActive: boolean;
}

export interface Meal {
  timestamp: string;
  userId: number;
  planId: number;
  isFullFilled: boolean;
  type: string;
}
