import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

//validação dos campos
const schema = yup.object({
   description: yup.string().required("Informe a descrição do item")
})

export default function Search() {

   const {control, handleSubmit, formState: { errors } }  = useForm({
      resolver: yupResolver(schema)
   })

   function handleSignIn(data) {
      console.log(data)
   }

   const styleInput = () =>  {
      return{
         outlineStyle: 'none'
      }
   }

 return(
      <View style={styles.container}>
         <Text style={styles.title}>Procurar Item</Text>

         <Controller 
            control={control}
            name='description'
            render={({ field: { onChange, onBlur, value } }) => (
               <TextInput 
               style={[styles.input, {borderWidth: errors.description && 1, borderColor: errors.description && "#ff375b"}, styleInput()]}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder='Descrição do item'
               />
         )}
         />
         { errors.description && <Text style={styles.labelError}>{errors.description?.message}</Text>}

        <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={handleSubmit(handleSignIn)}>
            <Text style={styles.buttonText}>Procurar</Text>
         </TouchableOpacity>


      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center', 
      alignItems: 'center',
      gap: '1rem',
      margin: '1rem'
   },
   title: {
      fontSize: 34,
      marginBottom: 34,
      color: '#121212',
      fontWeight: 'bold'
   },
   input: {
      width: '90%',
      height: '7%',
      border: '1px solid #000',
      borderRadius: 8,
      padding: 5,
      fontSize: 18
   },
   button: {
      width: '90%',
      height: '7%',
      borderRadius: 8,
      padding: 5,
      fontSize: 18,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#236ef8',
   },
   buttonText: {
      color: '#fff',
      fontWeight: '600',
      fontSize: 16
   },
   labelError: {
      alignSelf: 'flex-start',
      color: '#ff375b',
      marginTop: -15,
      marginLeft: 20
   }
})