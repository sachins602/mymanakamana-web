
import { SignInResponseType, UserRegisterSuccessResponseType } from '@/@types/user';
import { useMutation } from '@tanstack/react-query';

export const useUserLoginMutation = () => {
  return useMutation(async (data: {
    email: string;
    password: string;
  }) => {
    const response = await fetch('http://localhost:4000/api/authentication/sign-in', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json() as SignInResponseType;
  }
  );
}

export const useUserRegisterMutation = () => {
  return useMutation(async (data: {
    username: string;
    email: string;
    password: string;
  }) => {
    const response = await fetch('http://localhost:4000/api/authentication/sign-up', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json() as UserRegisterSuccessResponseType;
  }
  );
}