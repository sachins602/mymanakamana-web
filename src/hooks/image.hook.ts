
import { ImageResponseType } from '@/@types/user';
import { useMutation, useQueries, useQuery } from '@tanstack/react-query';

export const useAddImageMutation = () => {
  return useMutation(async (data: FormData) => {
    const response = await fetch('http://localhost:4000/api/media/upload', {
      method: 'POST',
      body: data,
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json() as ImageResponseType;
  }
  );
}

export const useGetImageQuery = ({ fileName }: { fileName: string }) => {
  return useQuery(['image'], async () => {
    const response = await fetch(`http://localhost:4000/api/media/file/${fileName}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.blob();
  });
}

export const useCallMultipleImagesQuery = ({ fileNames }: { fileNames: string[] }) => {
  return useQueries({
    queries: fileNames.map((fileName) => ({
      queryKey: ['image', fileName],
      queryFn: async () => {
        const response = await fetch(`http://localhost:4000/api/media/file/${fileName}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return await response.blob();
      },
    })),

  },
  )
}


