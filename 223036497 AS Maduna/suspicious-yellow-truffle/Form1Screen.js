import React, { useContext } from 'react';
import { TextInput, Button } from 'react-native';
import { FormContext } from './FormContext';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

const Form1Screen = () => {
  const { formData, updateFormData } = useContext(FormContext);
  const navigation = useNavigation();

  const handleNext = () => {
    if (formData.name && formData.email && formData.phone) {
      navigation.navigate('Form2');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <Container>
      <Input placeholder="Name" value={formData.name} onChangeText={(text) => updateFormData('name', text)} />
      <Input placeholder="Email" value={formData.email} onChangeText={(text) => updateFormData('email', text)} />
      <Input placeholder="Phone" value={formData.phone} onChangeText={(text) => updateFormData('phone', text)} />
      <Button title="Next" onPress={handleNext} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

const Input = styled.TextInput`
  border: 1px solid #ccc;
  margin-bottom: 15px;
  padding: 10px;
  font-size: 18px;
`;

export default Form1Screen;
