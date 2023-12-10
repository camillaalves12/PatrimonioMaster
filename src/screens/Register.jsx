
import React from 'react';
import { Text, View,TextInput, TouchableOpacity, StyleSheet} from 'react-native';

const styleInput = () =>  {
   return{
       outlineStyle: 'none'
 
     }
 }

export default function Register  ()  {
   return(
     <View style={styles.div}>
     <View style={styles.divInputs}>
       <View style={styles.inputs}>
         <Text style={styles.textInput}>Descrição:</Text>
         <TextInput style={[styles.input, styleInput()]}/>
       </View>
       <View style={styles.inputs}>
         <Text style={styles.textInput}>Número de série:</Text>
         <TextInput style={[styles.input, styleInput()]}/>
       </View>
       <View style={styles.inputs}>
         <Text style={styles.textInput}>Patrimônio:</Text>
         <TextInput style={[styles.input, styleInput()]}/>
       </View>
       <View style={styles.inputs}>
         <Text style={styles.textInput}>Foto:</Text>
         <TextInput style={[styles.input, styleInput()]}/>
       </View>
       <View style={styles.inputs}>
         <Text style={styles.textInput}>Nota fiscal:</Text>
         <TextInput style={[styles.input, styleInput()]}/>
       </View>
       <View style={styles.inputs}>
         <Text style={styles.textInput}>Secretaria:</Text>
         <TextInput style={[styles.input, styleInput()]}/>
       </View>
       <View style={styles.inputs}>
         <Text style={styles.textInput}>Setor:</Text>
         <TextInput style={[styles.input, styleInput()]}/>
       </View>
         <TouchableOpacity style={styles.button} activeOpacity={0.7}  >
           <Text style={styles.textButton}>Cadastrar</Text>
         </TouchableOpacity>
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
    h1: {
      fontSize: 22,
      marginBottom: '2rem'
    },
 });