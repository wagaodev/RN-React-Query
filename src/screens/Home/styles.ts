import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 28px;
`;

export const PostContainer = styled.View`
  margin-vertical: 8px;
`;

export const PostText = styled.Text`
  font-size: 18px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'large',
  color: '#0000ff',
})``;

export const List = styled.FlatList``;
