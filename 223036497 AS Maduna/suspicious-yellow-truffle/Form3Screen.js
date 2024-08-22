import React, { useContext } from 'react';
import { TextInput, Button } from 'react-native';
import { FormContext } from './FormContext';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

const Form3Screen = () => {
  const { formData, updateFormData } = useContext(FormContext);
  const navigation = useNavigation();

  const handleSubmit = () => {
    if (formData.creditCard && formData.expiration && formData.cvv) {
      alert('Form submitted successfully!');
      navigation.navigate('Profile');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <Container>
      <Input placeholder="Credit Card Number" keyboardType="numeric" value={formData.creditCard} onChangeText={(text) => updateFormData('creditCard', text)} />
      <Input placeholder="Expiration Date (MM/YY)" value={formData.expiration} onChangeText={(text) => updateFormData('expiration', text)} />
      <Input placeholder="CVV" keyboardType="numeric" secureTextEntry value={formData.cvv} onChangeText={(text) => updateFormData('cvv', text)} />
      <Button title="Submit" onPress={handleSubmit} />
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

export default Form3Screen;
