import React from 'react';
import { useQuery } from 'react-query';

import * as S from './styles';
import { getPosts } from '../../services/api';

export const Home = () => {
  const query = useQuery('posts', async () => {
    const result = await getPosts();
    return result;
  });

  if (query.isLoading) {
    return (
      <S.Container>
        <S.Loading />
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.Title>Resultado da API</S.Title>
      <S.List
        data={query.data}
        renderItem={({ item }) => (
          <S.PostContainer>
            <S.PostText>{item.title}</S.PostText>
            <S.PostText>{item.body}</S.PostText>
          </S.PostContainer>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </S.Container>
  );
};
