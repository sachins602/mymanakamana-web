import { BlogResponseType } from "@/@types/user";
import { useQuery } from "@tanstack/react-query";

export const useGetAllBlogQuery = () => {
  return useQuery(['blog'], async () => {
    const response = await fetch('http://localhost:4000/api/blog/get-all');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json() as BlogResponseType;
  });
}
