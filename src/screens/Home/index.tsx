import React from 'react';
import { ListRenderItemInfo } from 'react-native';

import { usePosts } from '../../hooks';
import { TPosts } from '@/types';
import { ContentFlatList } from './components/renderItem';

import * as S from './styles';

export const Home = () => {
  const posts = usePosts();

  if (posts.isFetching) {
    return (
      <S.Container>
        <S.Loading />
      </S.Container>
    );
  }

  console.log('RENDERIZAÇÕES?', new Date());

  const renderItem = ({ item }: ListRenderItemInfo<TPosts>) => (
    <ContentFlatList {...item} />
  );

  return (
    <S.Container>
      <S.Title>Resultado da API</S.Title>
      <S.List
        data={posts.data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </S.Container>
  );
};
