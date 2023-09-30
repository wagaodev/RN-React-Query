import { useQuery } from 'react-query';
import { getPostId, getPosts } from '../../services';

export const usePosts = (enabled?: boolean) =>
  useQuery({ queryKey: 'posts', queryFn: getPosts, enabled });

export const usePostId = (id: number) =>
  useQuery({
    queryKey: ['posts', id],
    queryFn: () => getPostId(id),
  });
