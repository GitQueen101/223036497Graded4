import React, { useContext } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { CartContext } from './CartContext';
import styled from 'styled-components/native';

const CartScreen = () => {
  const { cart, updateCartItem, removeFromCart, clearCart } = useContext(CartContext);

  const totalCost = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        {cart.map(item => (
          <ItemContainer key={item.id}>
            <ItemDetails>
              <Text>Name: {item.name}</Text>
              <Text>Quantity: {item.quantity}</Text>
            </ItemDetails>
            <ButtonRow>
              <StyledButton onPress={() => updateCartItem(item.id, item.quantity + 1)}>
                <ButtonText>+</ButtonText>
              </StyledButton>
              <StyledButton onPress={() => updateCartItem(item.id, item.quantity - 1)}>
                <ButtonText>-</ButtonText>
              </StyledButton>
              <StyledButton onPress={() => removeFromCart(item.id)}>
                <ButtonText>Remove</ButtonText>
              </StyledButton>
            </ButtonRow>
          </ItemContainer>
        ))}
        <TotalText>Total: ${totalCost.toFixed(2)}</TotalText>
        <StyledButton onPress={clearCart}>
          <ButtonText>Checkout</ButtonText>
        </StyledButton>
      </Container>
    </SafeAreaView>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #f8f8f8;
`;

const ItemContainer = styled.View`
  margin-bottom: 20px;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  shadow-color: #000;
  
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 2;
`;

const ItemDetails = styled.View`
  margin-bottom: 10px;
`;

const ButtonRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const StyledButton = styled(TouchableOpacity)`
  background-color: #007bff;
  padding: 10px;
  border-radius: 5px;
  margin-right: 5px;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

const TotalText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
`;

export default CartScreen;
