import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { FormContext } from './FormContext';
import { ThemeContext } from './ThemeContext';
import styled from 'styled-components/native';

const ProfileScreen = () => {
  const { formData } = useContext(FormContext);
  const { theme, updateTheme } = useContext(ThemeContext);

  return (
    <Container style={{ backgroundColor: theme.backgroundColor }}>
      <ProfileText style={{ color: theme.textColor }}>Name: {formData.name}</ProfileText>
      <ProfileText style={{ color: theme.textColor }}>Email: {formData.email}</ProfileText>
      <ProfileText style={{ color: theme.textColor }}>Phone: {formData.phone}</ProfileText>
      {/* Add more profile details */}
      <Button title="Change Text Color" onPress={() => updateTheme({ ...theme, textColor: '#ff0000' })} />
      <Button title="Change Background Color" onPress={() => updateTheme({ ...theme, backgroundColor: '#000000' })} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

const ProfileText = styled.Text`
  font-size: 18px;
  margin-bottom: 10px;
`;

export default ProfileScreen;
