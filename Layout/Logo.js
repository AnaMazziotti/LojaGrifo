import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

export default props => {
    return (
        <View style = {styleTest.Logo}>
            <Image source = {require('../assets/Ativo3.png')} 
            style = {styleTest.Imagem} />            
        </View>
    )
}

const styleTest = StyleSheet.create({
    Logo:{
        marginTop: '20%',
        alignItems:'center'
    },

    Imagem:{
        height: 200,
        width: 200
    }
    
})