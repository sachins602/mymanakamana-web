import { useMutation } from "@tanstack/react-query";

export const useContactMutation = () => {
  return useMutation(async (data: {
    _id: string;
    name: string;
    email: string;
    message: string;
  }) => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}query`, {
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