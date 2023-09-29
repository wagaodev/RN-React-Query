import { TPosts, TUsers } from '../../types';
import { req } from '../config';

export const getPosts = async (): Promise<TPosts[]> => {
  const response = await req.get('posts');
  return response.data;
};

export const getPostId = async (id: number): Promise<TPosts> => {
  const response = await req.get(`posts/${id}`);
  return response.data;
};

export const getUsers = async (): Promise<TUsers[]> => {
  const response = await req.get('users');
  return response.data;
};
