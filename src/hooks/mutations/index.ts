import { useMutation } from 'react-query';
import { addPost } from '../../services';

export const useAddPost = () =>
  useMutation({
    mutationFn: addPost,
  });
