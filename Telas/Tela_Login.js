import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView,} from 'react-native';


import Logo from '../layout/Logo';
import ResetSenha from '../Components/ResetSenha';
import Associar from '../Components/Associar';
import EmailInput from '../Components/EmailImput';
import SenhaInput from '../Components/SenhaImput';


export default function TelaLogin() {
  let numero = 0
  const inc = () => numero + 1

  return (
    <SafeAreaView style ={styles.AumentoTela} >
      <Logo/>
      <View>        
        <EmailInput/>
      </View>
      <View>
        <SenhaInput/>
      </View>
      <View style = {styles.EstiloLogin}>
        <ResetSenha/>
      </View>
      <View >
        <TouchableOpacity style={styles.button}  onPress={inc}>
          <Text style = {styles.TextLogin}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
      <View style = {styles.container}>
        <Text style = {styles.TextOU}>ou</Text>
      </View>
      <View >
        <TouchableOpacity style={styles.buttonInscrever}  onPress={inc}>
          <Text style = {styles.TextLogin}>ENTRE COMO VISITANTE</Text>
        </TouchableOpacity>
      </View>
      <View style = {styles.container}>
        <Associar/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {    
    marginTop: 8,
    alignItems:'center'
  },

  EstiloLogin:{
    marginLeft: '7%',
    marginTop: 8,
  },

  EstiloCaixa:{
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    height: '10%',
    backgroundColor: '#266621',
    marginLeft: 50,
    marginTop: 20,
},

EstiloText:{
    marginLeft:10,
    width:'90%',
    backgroundColor:'#c5d1c5',
    marginTop: 10,
    height:'10%',
    justifyContent:'center'
},

button: {
  alignItems: 'center',
  justifyContent:'center',
  backgroundColor: '#BF0B0B',
  padding: 10,
  width: '80%',
  height: 50,
  marginTop: 15,
  marginLeft: '9%',
  borderRadius: 8,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 10,
  },
  shadowOpacity: 0.51,
  shadowRadius: 13.16,

  elevation: 20,
  
},

buttonInscrever: {
  alignItems: 'center',
  justifyContent:'center',
  backgroundColor: 'rgba(191, 11, 11, 0.56)',
  padding: 10,
  width: '80%',
  height: 50,
  marginTop: 15,
  marginLeft: '9%',
  borderRadius: 8,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 10,
  },
  shadowOpacity: 0.51,
  shadowRadius: 13.16,

  elevation: 20,
 
},

AumentoTela:{
  height: '100%',
  backgroundColor: "#393C3E"
},

TextLogin:{
  color:'whitesmoke',
  fontSize: 15
},

TextOU:{
  color:'whitesmoke',
  fontSize: 15,
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
  alignItems: 'center'
},


});