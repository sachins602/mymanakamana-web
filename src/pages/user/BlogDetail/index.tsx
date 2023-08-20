import { useLocation } from 'react-router-dom';

export function BlogDetail() {
  const { state } = useLocation();
  console.log(state.blogId);
  return <div>Blog</div>;
}
