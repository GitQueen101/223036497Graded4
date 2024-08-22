import React, { useContext } from 'react';
import { TextInput, Button } from 'react-native';
import { FormContext } from './FormContext';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

const Form2Screen = () => {
  const { formData, updateFormData } = useContext(FormContext);
  const navigation = useNavigation();

  const handleNext = () => {
    if (formData.address && formData.city && formData.state && formData.zip) {
      navigation.navigate('Form3');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <Container>
      <Input placeholder="Address" value={formData.address} onChangeText={(text) => updateFormData('address', text)} />
      <Input placeholder="City" value={formData.city} onChangeText={(text) => updateFormData('city', text)} />
      <Input placeholder="State" value={formData.state} onChangeText={(text) => updateFormData('state', text)} />
      <Input placeholder="Zip Code" value={formData.zip} onChangeText={(text) => updateFormData('zip', text)} />
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

export default Form2Screen;
