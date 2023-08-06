import { AddBlogData, BlogResponseType } from "@/@types/user";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetAllBlogQuery = () => {
  return useQuery(['blog'], async () => {
    const response = await fetch('http://localhost:4000/api/blog/get-all');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json() as BlogResponseType;
  });
}

export const useAddBlogMutation = () => {
  return useMutation(async (data: AddBlogData) => {
    const response = await fetch('http://localhost:4000/api/blog/', {
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

export const useGetBlogByIdQuery = (id: string) => {
  return useQuery(['blog', id], async () => {
    const response = await fetch(`http://localhost:4000/api/blog/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json() as BlogResponseType;
  });
}

export const useDeleteBlogMutation = () => {
  return useMutation(async ({ id }: { id?: string }) => {
    const response = await fetch(`http://localhost:4000/api/blog/delete/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  }
  );
}

