
import React from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity, SafeAreaView, ScrollView, StatusBar } from 'react-native';


const styleInput = () =>  {
   return{
       outlineStyle: 'none'
 
     }
 }

export default function Login() {
   return(
      <View style={styles.div}>
        <Text style={styles.title}>Patrimônio Master</Text>
  
        <View style={styles.divInputs}>
          <View style={styles.inputs}>
            <Text style={styles.textInput}>Login:</Text>
            <TextInput style={[styles.input, styleInput()]}/>
          </View>
          <View style={styles.inputs}>
            <Text style={styles.textInput}>Senha:</Text>
            <TextInput style={[styles.input, styleInput()]}/>
          </View>
            <TouchableOpacity style={styles.button} activeOpacity={0.7}  >
              <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>
            <Text style={{textAlign:'center', color:'#385898' }}>Esqueceu a senha?</Text>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({

   div: {
    flex: 1,
     justifyContent: 'center', 
     alignItems: 'center',
   },
   title: {
     textAlign: 'center',
     fontSize: '2rem',
     bottom: '5rem'
   },
   divInputs: {
     display: 'flex',
     gap: '0.8rem'
   },
   inputs: {
     display:'flex',
     gap: '0.5rem',
     width: '17rem'
   },
   input: {
     border: '1px solid #000',
     height: '2.5rem',
     borderRadius: '0.5rem',
     fontSize: '1.2rem',
   },
   textInput: {
     fontSize: '1.2rem'
   },
   button: {
     backgroundColor: '#1877F2',
     alignItems: 'center',
     padding: '0.5rem',
     borderRadius: '0.5rem',
     color: '#fff',
     marginTop: '0.5rem'
   },
   textButton: {
      color: '#fff',
      fontSize: '1.2rem',
      fontWeight: 'bold'
    },
 });
 