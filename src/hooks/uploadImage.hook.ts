
import { useMutation } from '@tanstack/react-query';

export const useAddImageMutation = () => {
  return useMutation(async (data: FormData) => {
    console.log(data);
    const response = await fetch('http://localhost:4000/api/media/upload', {
      method: 'POST',
      body: data,
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  }
  );
}