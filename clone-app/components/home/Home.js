import React from "react";
import { ImageBackground, View, TouchableOpacity, Text } from "react-native";
import { StyleSheet } from "react-native";

const image = { uri: "https://i.pinimg.com/originals/97/63/cc/9763cc72c5422db0f02ceb688e13be5f.jpg" };

export default Home = ({ navigation }) => (
<View style={styles.container}>
    <ImageBackground
    source={image}
    resizeMode="cover"
    style={styles.image}
    ></ImageBackground>
    <View style={{ flexDirection: "row", width: "100%" }}>
<TouchableOpacity style={{ backgroundColor: "white", width: "50%", color: "orange", position: "relative", zIndex: 9}} 
        onPress={() => {
        navigation.navigate("Login");
        }}
    ></TouchableOpacity>
    <Button style={{ backgroundColor: "orange", width: "50%", color: "white"}} title="Create Account"
        onPress={() => {
        navigation.navigate("CreateAccount");
        }}
    ></Button>
    </View>
</View>
);

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
},
image: {
    flex: 1,
    justifyContent: "center",
    height: "98%",
    width: "100%",
    margin: 0,
},
});
