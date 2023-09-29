import React from 'react';

import * as S from './styles';
import { usePosts } from '../../hooks';

export const Home = () => {
  const posts = usePosts();

  if (posts.isLoading) {
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
        data={posts.data}
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
