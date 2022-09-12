import styled from 'styled-components/native';

export const FirebaseContainer = styled.View`
  flex: 1;
  background: #edf2f7;
  padding: 24px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  /* text-align: center; */
`;

export const TasksContainer = styled.ScrollView`
  margin: 12px 0;
  flex: 1;
`;

export const NewTaskButton = styled.TouchableOpacity`
  height: 48px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  border-radius: 8px;
  background-color: #3182ce;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const TaskItem = styled.View`
  padding: 12px;
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 8px;
  border: 1px solid #e2e8f0;
`;

export const TaskItemText = styled.Text`
  font-size: 14px;
`;
