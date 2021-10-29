import React from "react";
import { Text, StyleSheet, View, Button, TouchableHighlight } from "react-native";

export default function Cadastrar() {
   return<View style = {StyleCadastrar.Estilo}>        
        <Text style = {StyleCadastrar.Cor2}>Não tem login:</Text>
        <View style = {StyleCadastrar.Espaco}/>
        <TouchableHighlight
        color='#393C3E'
        onPress={() => Alert.alert('Button with adjusted color pressed')}>
            <Text style = {StyleCadastrar.Cor1}>Associe-se aqui!</Text>
        </TouchableHighlight>
    </View>
   
}

const StyleCadastrar = StyleSheet.create({
    Estilo:{
        flexDirection:"row",
        justifyContent: 'center'
    },

    Cor1:{
        color: '#ad0000',
        backgroundColor: "#393C3E"
        
    },

    Cor2:{
        color: 'whitesmoke'
    },
    Espaco:{
        width:5
    }
});