import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const Cart = ({ navigation, route }) => {
  const { cartList } = route.params;

  const renderItemCart = ({ item }) => {
    return (
      <View style={{display: 'flex',alignItems:'center', flexDirection:'row',justifyContent:'space-between',borderWidth:1,borderRadius:6,padding:8}}>
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text>Danh sach san pham</Text>

      <View >
      {cartList ? (<FlatList
      style={{height:400}}
          data={cartList}
          keyExtractor={(item) => item.id}
          renderItem={renderItemCart}
        />) : null}

         <TouchableOpacity
          style={{ flex: 1,display:'flex',alignItems:'center',justifyContent:'center', borderWidth: 1, borderRadius: 20, padding: 10,backgroundColor:'cyan' }}>
          <Text style={{ textAlign: 'center' ,color:'white'}}>Buy now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
