import { Trip, TripResponseType } from "@/@types/user";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetTripsQuery = () => {
  return useQuery(['trips'], async () => {
    const response = await fetch('http://localhost:4000/api/trip/get-all');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json() as TripResponseType;
  });
}

export const usePostTripQuery = () => {
  return useMutation(async (trip: Trip) => {
    const response = await fetch('http://localhost:4000/api/trip', {
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