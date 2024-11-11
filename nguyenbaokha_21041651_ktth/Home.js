import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import imageMain from './images/bione-removebg-preview.png';

const Home = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: 'white', flex: 1, padding: 20 }}>
      <Text style={{ flex: 1, fontWeight: 600, textAlign: 'center',fontSize:18 }}>
        A premium online store for sporter and their stylish choice !
      </Text>
      <View
        style={{
          padding: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 4,
          borderRadius: 40,
          backgroundColor: '#E941411A',
        }}>
        <Image
          source={imageMain}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </View>

      <Text
        style={{
          textAlign: 'center',
          color: 'black',
          fontWeight: 600,
          fontSize: 23,
          flex: 1,
        }}>
        POWER BIKE SHOP
      </Text>

      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('ShowProduct')}>
          <Text
            style={{ textAlign: 'center', color: 'white', fontWeight: 600 }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'red',
    width: '100%',
    padding: 15,
    borderRadius: 40,
  },
});
