import { TripResponseType, UserBookingResponse } from "@/@types/user";
import { useMutation, useQuery } from "@tanstack/react-query";


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

export const useUserBookingsQuery = ({ id }: { id: string }) => {
  return useQuery(['userBooking'], async () => {
    const response = await fetch(`http://localhost:4000/api/booking/getByUser/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json() as UserBookingResponse;
  }, {
    enabled: !!id,
  });
}

export const useAllBookingsQuery = () => {
  return useQuery(['allBooking'], async () => {
    const response = await fetch('http://localhost:4000/api/booking/get-all');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json() as UserBookingResponse;
  });
}