import React from "react";
import { Text, StyleSheet, TextInput, View, Image } from "react-native";

export default function SenhaInput () {
    const [text, onChangeText] = React.useState(null);
  
    return (
      <View style={StyleSenha.ViewImage}>
        <Image source = {require('../assets/senha_icon.png')} style={StyleSenha.imageStyle}/>
        <TextInput
        style={StyleSenha.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Senha"
          secureTextEntry={true}          
          placeholderTextColor = '#828080' >

          </TextInput>
      </View>
    );
  };

const StyleSenha = StyleSheet.create({
    Estilo:{
        textDecorationLine: 'underline',
        width: '80%',
        alignItems:'center',
        color:'#636963',        
        fontSize: 20,
    },
    input: {
      padding: 10,
        justifyContent:'center',
        width: '80%',
        alignItems:'center',
        fontSize: 17,
        color: '#828080'
    },

    imageStyle: {
      padding: 10,
      height: 25,
      width: 25,
      resizeMode: 'stretch',
    },

    ViewImage:{
      flexDirection:"row",
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomColor: '#BF0B0B',
      borderBottomWidth: 1,      
      width: '80%',
      marginLeft: '7%',
    }
});