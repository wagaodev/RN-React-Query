import { useQuery } from 'react-query';
import { getPostId, getPosts } from '../../services';

export const usePosts = () =>
  useQuery({ queryKey: 'posts', queryFn: getPosts });

export const usePostId = (id: number) =>
  useQuery({
    queryKey: ['posts', id],
    queryFn: () => getPostId(id),
  });
