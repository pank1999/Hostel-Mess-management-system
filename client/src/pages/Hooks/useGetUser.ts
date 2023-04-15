import Axios from 'axios';
import { useState } from 'react';
import { IUser } from '../../interfaces/user.interface';
import { useQuery } from '@tanstack/react-query';
import {
  LocalStorageLoggedInUserKey,
  LocalStorageUserKey,
} from '../../constants/constants';

export const useGetUser = () => {
  const BASE_URL = 'http://localhost:3001';
  const [user, setUser] = useState<IUser>();
  const loggedInUser = localStorage.get(LocalStorageLoggedInUserKey);
  const { data: userDetails } = useQuery<IUser>(['user'], () => {
    return Axios.get<IUser>(`${BASE_URL}/user/${loggedInUser.id}`).then(
      (res) => {
        console.log(res.data);
        return res.data;
      },
    );
  });
  setUser(userDetails);
  localStorage.setItem(LocalStorageUserKey, JSON.stringify(userDetails));

  return [user, setUser];
};
