import React from "react";
import { Text, View, Image, StyleSheet, TextInput } from "react-native";

export default function EmailInput () {
    const [text, onChangeText] = React.useState(null);
  
    return (
      <View style={StyleEmail.ViewImage}>
        <Image source = {require('../assets/Email_icon.png')} style={StyleEmail.imageStyle}/>
        <TextInput
        style={StyleEmail.input}
          onChangeText={onChangeText}
          value={text}
          keyboardType='email-address'
          placeholder="E-mail"
          placeholderTextColor = '#828080' >
          
        </TextInput>
      </View>
        

    );
  };

const StyleEmail = StyleSheet.create({
    Estilo:{
        textDecorationLine: 'underline',
        width: '80%',
        alignItems:'center',
        fontSize: 20,
        color:'#636963',
        
    },

    input: {
        padding: 10,
        justifyContent:'center',
        width: '80%',
        alignItems:'center',
        fontSize: 17,
        color: '#828080'
      },

      Espaco:{
        width:5
    },

    Imagem:{
        height: 200,
        width: 200
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

