import React from "react";
import { Text, StyleSheet, View, TouchableHighlight } from "react-native";

export default function ResetPassword() {
   return(
       <View style = {StyleReset.Caixa}>
           <TouchableHighlight
            color='#393C3E'
            onPress={() => Alert.alert('Button with adjusted color pressed')}>
                <Text style = {StyleReset.Estilo}>Esqueceu a Senha?</Text>
            </TouchableHighlight>
       </View>   
   );
}

const StyleReset = StyleSheet.create({
    Estilo:{
        alignItems: 'center',
        color: 'whitesmoke'
    },
    Caixa:{
        flexDirection:"row",
        justifyContent: 'flex-start'
    }
});