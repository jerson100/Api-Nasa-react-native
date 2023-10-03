import {Image, StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Explore</Text>
      <Image
        source={require('src/assets/images/logo-nasa.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 100,
    objectFit: 'cover',
  },
});

export default Header;
