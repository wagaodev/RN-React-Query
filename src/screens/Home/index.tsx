import React from 'react';
import * as S from './styles';
import { usePosts } from '../../hooks';
import { TPosts } from '@/types';
import { ListRenderItem } from 'react-native';

export const Home = () => {
  const posts = usePosts();

  if (posts.isLoading) {
    return (
      <S.Container>
        <S.Loading />
      </S.Container>
    );
  }

  const renderItem = ({ item }) => (
    <S.PostContainer>
      <S.PostText>{item.title}</S.PostText>
      <S.PostText>{item.body}</S.PostText>
    </S.PostContainer>
  );

  return (
    <S.Container>
      <S.Title>Resultado da API</S.Title>
      <S.List
        data={posts.data}
        renderItem={renderItem as ListRenderItem<TPosts>}
        keyExtractor={item => item.id.toString()}
      />
    </S.Container>
  );
};
