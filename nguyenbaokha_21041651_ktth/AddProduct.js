import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addProductToApi } from './productSlice';

const AddProduct = ({ navigation }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');

  const handleAddProduct = () => {
    const newProduct = { name, price, description, img };
    
    // Dispatch addProductToApi to send the new product to the API
    dispatch(addProductToApi(newProduct)).then(() => {
      navigation.navigate('ShowProduct'); // Navigate back to ShowProduct after successful addition
    });
  };

  return (
    <View style={{ padding: 20 }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          fontWeight: '600',
          marginBottom: 15,
        }}>
        Enter Product Details
      </Text>
      <TextInput
        style={{ borderWidth: 2, padding: 6, marginBottom: 5 }}
        placeholder="Product Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={{ borderWidth: 2, padding: 6, marginBottom: 5 }}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <TextInput
        style={{ borderWidth: 2, padding: 6, marginBottom: 5 }}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={{ borderWidth: 2, padding: 6, marginBottom: 5 }}
        placeholder="Image URL"
        value={img}
        onChangeText={setImg}
      />

      <TouchableOpacity
        onPress={handleAddProduct}
        style={{ backgroundColor: 'green', padding: 10, marginTop: 10 }}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Add Product</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddProduct;
