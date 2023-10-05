import { QueryClient, useQuery } from 'react-query';
import { getPostId, getPosts, getUsers } from '../../services';

const queryClient = new QueryClient();

export const usePosts = (enabled?: boolean) =>
  useQuery({ queryKey: 'posts', queryFn: getPosts, enabled });

export const usePostId = (id: number) =>
  useQuery({
    queryKey: ['posts', id],
    queryFn: () => getPostId(id),
  });

export const useUsers = () =>
  useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });

/** If I need some response quickly. */
export const useUsersPrefetch = () => {
  return queryClient.prefetchQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });
};
