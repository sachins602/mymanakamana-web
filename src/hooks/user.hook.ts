
import { SignInResponseType, UserRegisterSuccessResponseType } from '@/@types/user';
import { useMutation } from '@tanstack/react-query';

export const useUserLoginMutation = () => {
  return useMutation(async (data: {
    email: string;
    password: string;
  }) => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}authentication/sign-in`, {
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
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}authentication/sign-up`, {
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

export const useUserForgotPasswordMutation = () => {
  return useMutation(async (data: {
    email: string;
    password: string;
  }) => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}authentication/forgotpassword`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    console.log(response.json());

    return await response.json();
  }
  );
}
