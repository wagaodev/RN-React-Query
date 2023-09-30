import React, { useState } from 'react';
import { ListRenderItemInfo } from 'react-native';

import { usePosts } from '../../hooks';
import { TPosts } from '@/types';
import { ContentFlatList } from './components/renderItem';

import * as S from './styles';

export const Home = () => {
  const [canLoad, setCanLoad] = useState(false);
  const posts = usePosts(canLoad);
  const handleFetchData = () => setCanLoad(true);

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
      {!canLoad && (
        <S.Button onPress={handleFetchData}>
          <S.ButtonText>Buscar os dados</S.ButtonText>
        </S.Button>
      )}
      <S.List
        data={posts.data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </S.Container>
  );
};
