import styled from 'styled-components/native';

export const AddMultiplierContainer = styled.View`
  padding-top: 44px;
  border-top-width: 1px;
  border-style: solid;
  border-color: #ddd;
`;

export const Label = styled.Text`
  color: #222234;
  font-size: 16px;
  margin-bottom: 8px;
  font-weight: bold;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  border-radius: 8px;
  height: 48px;
  padding: 0 16px;
  border: 2px solid #222234;
`;

export const Button = styled.TouchableOpacity`
  height: 48px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  border-radius: 8px;
  background-color: #222234;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
`;
