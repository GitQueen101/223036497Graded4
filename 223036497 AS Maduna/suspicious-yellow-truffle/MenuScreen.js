import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { CartContext } from './CartContext';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';

const MenuScreen = () => {
  const { addToCart } = useContext(CartContext);

  const foodItems = [
    { 
      id: 1, 
      name: 'Margherita Pizza', 
      description: 'Classic Margherita pizza with fresh tomatoes, mozzarella cheese, and basil on a crispy crust.', 
      price: 12, 
      image: require('./components/Pizza_Margherita.jpg') 
    },
   
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <FlatList
          data={foodItems}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <ItemContainer>
              <FoodImage source={item.image} />
              <InfoContainer>
                <Text style={titleStyles}>{item.name}</Text>
                <Text style={descriptionStyles}>{item.description}</Text>
                <Text style={priceStyles}>${item.price}</Text>
              </InfoContainer>
              <AddButton onPress={() => addToCart({ ...item, quantity: 1 })}>
                <Text style={buttonTextStyles}>Add to Cart</Text>
              </AddButton>
            </ItemContainer>
          )}
        />
      </Container>
    </SafeAreaView>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #f8f8f8;
`;

const ItemContainer = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-color: #e0e0e0;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  margin: 10px;
  elevation: 3; /* For Android shadow */
  shadow-color: #000;
  shadow-offset:{};
  shadow-opacity: 0.1;
  shadow-radius: 4;
`;

const FoodImage = styled.Image`
  width: 90px;
  height: 90px;
  margin-right: 15px;
  border-radius: 5px;
  border-width: 1px;
  border-color: #ddd;
`;

const InfoContainer = styled.View`
  flex: 1;
`;

const titleStyles = {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 5,
  color: '#333',
};

const descriptionStyles = {
  fontSize: 14,
  color: '#666',
  marginBottom: 5,
};

const priceStyles = {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#333',
};

const AddButton = styled.TouchableOpacity`
  background-color: #333;
  padding: 12px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

const buttonTextStyles = {
  color: '#fff',
  fontSize: 16,
  textAlign: 'center',
};

export default MenuScreen;
