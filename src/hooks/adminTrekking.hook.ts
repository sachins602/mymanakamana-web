

import { useMutation, useQuery } from '@tanstack/react-query';

export const useAddTrekkingMutation = () => {
  return useMutation(async (data: {
    _id?: string;
    name: string;
    image?: string;
    slogan?: string;
    createdBy: string;
    status: boolean
  }) => {
    const response = await fetch('http://localhost:4000/api/trekking/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  }
  );
}

export const useGetAllTrekkingQuery = () => {
  return useQuery(['trekking'], async () => {
    const response = await fetch('http://localhost:4000/api/trekking/get-all');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  });
}

export const useDeleteTrekkingQuery = () => {
  return useMutation(async ({ id }: { id: string }) => {
    const response = await fetch(`http://localhost:4000/api/trip/delete/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  })
}