import { TripResponseType } from "@/@types/user";
import { useMutation } from "@tanstack/react-query";


export const useAddBookingMutation = () => {
  return useMutation(async (data: {
    _id: string;
    packageId: string;
    packageName: string;
    userId: string;
    name: string;
    email: string;
    contactNumber?: string;
    totalTraveller: string;
    date: Date;
    price?: string;
  }) => {
    const response = await fetch('http://localhost:4000/api/booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json() as TripResponseType;
  }
  );
}