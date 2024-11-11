import {StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import ShowProduct from './ShowProduct';
import DetailProduct from './DetailProduct';
import Cart from './Cart';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} headerShown={false} />
        <Stack.Screen name="ShowProduct" component={ShowProduct} />
        <Stack.Screen name="DetailProduct" component={DetailProduct} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
