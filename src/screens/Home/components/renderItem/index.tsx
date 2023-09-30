import React from 'react';
import * as S from './styles';
import { TPosts } from '@/types';

export const ContentFlatList = ({ title, body }: TPosts) => (
  <S.PostContainer>
    <S.PostText>{title}</S.PostText>
    <S.PostText>{body}</S.PostText>
  </S.PostContainer>
);
