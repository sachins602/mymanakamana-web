
import { CategoryResponseType, ViewCategoryResponseType } from '@/@types/user';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useAddCategoryMutation = () => {
  return useMutation(async (data: {
    _id?: string;
    name: string;
    image?: string;
    slogan?: string;
    createdBy: string;
    status: boolean
  }) => {
    const response = await fetch('http://localhost:4000/api/category/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json() as CategoryResponseType;
  }
  );
}

export const useGetAllCategoryQuery = () => {
  return useQuery(['category'], async () => {
    const response = await fetch('http://localhost:4000/api/category/get-all');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json() as ViewCategoryResponseType;
  });
}