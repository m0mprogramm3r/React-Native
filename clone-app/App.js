import React from "react";
import { ImageBackground, StyleSheet, View, Image, Button, Alert } from "react-native";

const image = { uri: "https://i.pinimg.com/originals/97/63/cc/9763cc72c5422db0f02ceb688e13be5f.jpg" };

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    </ImageBackground>
    <Image 
      style={styles.Logo}
      source={{uri: 'https://www.crunchyroll.com/about/logos/crunchyroll_logo_vertical.png'}}
    />   
    <Button 
    title="Login"
    onPress={() => Alert.alert('Simple button pressed')}
    />
    <Button
    title="Create Account"
    onPress={() => Alert.alert('Simple button pressed')}
    />                       
  </View>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    height: '98%', 
    width: '98%',
  }
});

export default App;