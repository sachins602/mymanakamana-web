import { TripResponseType } from "@/@types/user";
import { useQuery } from "@tanstack/react-query";

export const useGetTripsQuery = () => {
  return useQuery(['trips'], async () => {
    const response = await fetch('http://localhost:4000/api/trip/get-all');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json() as TripResponseType;
  });
}