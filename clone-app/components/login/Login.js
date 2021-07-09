import 'react-native-gesture-handler';
import React from 'react';
import {  View, TextInput } from 'react-native';

export default function Login(){
    return (
        <View style={{marginTop: 200}}>
            <TextInput style={{backgroundColor: "orange"}}
            placeholder="Email"/>
            <TextInput style={{backgroundColor: "orange", marginTop: 10}}
            placeholder="Senha" secureTextEntry={true}/> 
        </View>
    )
}