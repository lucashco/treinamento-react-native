import styled from 'styled-components/native';

export const CounterContainer = styled.View``;

export const NumberText = styled.Text`
  font-size: 48px;
  font-weight: bold;
  text-align: center;
`;

export const BaseButton = styled.TouchableOpacity`
  height: 48px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  border-radius: 8px;
`;

export const IncrementButton = styled(BaseButton)`
  background-color: #3182ce;
`;

export const DecrementButton = styled(BaseButton)`
  background-color: #dd6b20;
  margin-bottom: 44px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
`;
