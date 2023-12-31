
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
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}category/`, {
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
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}category/get-all`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json() as ViewCategoryResponseType;
  });
}

export const useDeleteCategoryQuery = () => {
  return useMutation(async ({ id }: { id: string }) => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}category/delete/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json() as ViewCategoryResponseType;
  })
}