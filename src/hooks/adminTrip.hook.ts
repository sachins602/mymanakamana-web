import { SingleTripResponseType, Trip, TripResponseType } from "@/@types/user";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetTripsQuery = () => {
  return useQuery(['trips'], async () => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}trip/get-all`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json() as TripResponseType;
  });
}

export const usePostTripQuery = () => {
  return useMutation(async (trip: Trip) => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}trip`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(trip)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json() as TripResponseType;
  }
  );
}

export const useDeleteTrekkingQuery = () => {
  return useMutation(async ({ id }: { id: string }) => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}trip/delete/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  })
}

export const useGetIndividualTripQuery = ({ id }: { id: string }) => {
  return useQuery(['trip'], async () => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}trip/get-trip/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json() as SingleTripResponseType;
  });
}