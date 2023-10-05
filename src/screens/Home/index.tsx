import React, { useState } from 'react';
import { Button, ListRenderItemInfo } from 'react-native';
import { useAddPost, usePosts } from '../../hooks';
import { TPosts } from '../../types';
import { ContentFlatList } from './components/renderItem';

import * as S from './styles';

export const Home = () => {
  const [canLoad, setCanLoad] = useState(false);
  const useMutationAddPost = useAddPost();
  const posts = usePosts(canLoad);
  const handleFetchData = () => {
    setCanLoad(true);
  };

  const handleAddPost = () => {
    useMutationAddPost.mutate({
      title: 'Post adicionado',
      body: 'Corpo do post adicionado',
      userId: 1,
    });
  };

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
      <Button onPress={handleAddPost} title="Adicionar Post" />
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
