import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { CartProvider } from './CartContext';
import { FormProvider } from './FormContext';
import { ThemeProvider } from './ThemeContext';

import MenuScreen from './MenuScreen';
import CartScreen from './CartScreen';
import ProfileScreen from './ProfileScreen';
import Form1Screen from './Form1Screen';
import Form2Screen from './Form2Screen';
import Form3Screen from './Form3Screen';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const FormStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Form1" component={Form1Screen} options={{ headerShown: false }} />
    <Stack.Screen name="Form2" component={Form2Screen} options={{ headerShown: false }} />
    <Stack.Screen name="Form3" component={Form3Screen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <CartProvider>
      <FormProvider>
        <ThemeProvider>
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen 
                name="Menu" 
                component={MenuScreen} 
                options={{ 
                  headerShown: false,
                  tabBarIcon: ({ color, size }) => (
                    <Icon name="menu" color={color} size={size} />
                  ),
                }} 
              />
              <Tab.Screen 
                name="Cart" 
                component={CartScreen} 
                options={{ 
                  headerShown: false,
                  tabBarIcon: ({ color, size }) => (
                    <Icon name="cart" color={color} size={size} />
                  ),
                }} 
              />
              <Tab.Screen 
                name="Profile" 
                component={ProfileScreen} 
                options={{ 
                  headerShown: false,
                  tabBarIcon: ({ color, size }) => (
                    <Icon name="account" color={color} size={size} />
                  ),
                }} 
              />
              <Tab.Screen 
                name="Form" 
                component={FormStack} 
                options={{ 
                  headerShown: false,
                  tabBarIcon: ({ color, size }) => (
                    <Icon name="form" color={color} size={size} />
                  ),
                }} 
              />
            </Tab.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </FormProvider>
    </CartProvider>
  );
};

export default App;
