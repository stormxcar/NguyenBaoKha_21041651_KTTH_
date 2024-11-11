import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './store'; // Import the Redux store
import Home from './Home';
import ShowProduct from './ShowProduct';
import DetailProduct from './DetailProduct';
import AddProduct from './AddProduct'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="ShowProduct" component={ShowProduct} />
          <Stack.Screen name="DetailProduct" component={DetailProduct} />
          <Stack.Screen name="AddProduct" component={AddProduct} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
