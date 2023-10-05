import styled from 'styled-components/native';
import { FlatList, Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: ${Platform.OS === 'ios' ? 62 : 24}px;
`;

export const Title = styled.Text`
  font-size: 28px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'large',
  color: '#0000ff',
})``;

export const List = styled(FlatList)`
  padding-horizontal: 16px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #bbb;
  padding: 8px 16px;
  border-radius: 8px;
  margin: 16px;
`;

export const ButtonText = styled.Text``;
