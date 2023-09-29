export type TPosts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type TUsers = {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  address?: {
    street?: string;
  };
};
