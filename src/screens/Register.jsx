import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

//validação dos campos
const schema = yup.object({
   description: yup.string().required("Informe a descrição do item"),
   serialNumber: yup.string().required("Informe o número de serie do item"),
   patrimony: yup.string().required("Informe o patrimônio do item"),
   photo: yup.string().required("Anexe uma foto do item"),
   invoice: yup.string().required("Anexe a nota fiscal do item"),
   secretary: yup.string().required("Informe a secretaria que o item pertence"),
   sector: yup.string().required("Informe o setor da secretaria que o item pertence"),
   
})

export default function Register() {

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
         <Text style={styles.title}>Cadastro</Text>

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

         <Controller 
            control={control}
            name='serialNumber'
            render={({ field: { onChange, onBlur, value } }) => (
               <TextInput 
               style={[styles.input, {borderWidth: errors.serialNumber && 1, borderColor: errors.serialNumber && "#ff375b"}, styleInput()]}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder='Número de série'
               />
         )}
         />

         { errors.serialNumber && <Text style={styles.labelError}>{errors.serialNumber?.message}</Text>}

         
         <Controller 
            control={control}
            name='patrimony'
            render={({ field: { onChange, onBlur, value } }) => (
               <TextInput 
                  style={[styles.input, {borderWidth: errors.patrimony && 1, borderColor: errors.patrimony && "#ff375b"}, styleInput()]}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder='Patrimônio'
               />
         )}
         />

         { errors.patrimony && <Text style={styles.labelError}>{errors.patrimony?.message}</Text>}
         <Controller 
            control={control}
            name='photo'
            render={({ field: { onChange, onBlur, value } }) => (
               <TextInput 
                  style={[styles.input, {borderWidth: errors.photo && 1, borderColor: errors.photo && "#ff375b"}, styleInput()]}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder='Foto do item'
               />
         )}
         />
         { errors.photo && <Text style={styles.labelError}>{errors.photo?.message}</Text>}

         <Controller 
            control={control}
            name='invoice'
            render={({ field: { onChange, onBlur, value } }) => (
               <TextInput 
                  style={[styles.input, {borderWidth: errors.invoice && 1, borderColor: errors.invoice && "#ff375b"}, styleInput()]}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder='Nota fiscal'
               />
         )}
         />

         { errors.invoice && <Text style={styles.labelError}>{errors.invoice?.message}</Text>}

         <Controller 
            control={control}
            name='secretary'
            render={({ field: { onChange, onBlur, value } }) => (
               <TextInput 
                  style={[styles.input, {borderWidth: errors.secretary && 1, borderColor: errors.secretary && "#ff375b"}, styleInput()]}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder='Secretaria'
               />
         )}
         />

         { errors.secretary && <Text style={styles.labelError}>{errors.secretary?.message}</Text>}

         <Controller 
            control={control}
            name='sector'
            render={({ field: { onChange, onBlur, value } }) => (
               <TextInput 
                  style={[styles.input, {borderWidth: errors.sector && 1, borderColor: errors.sector && "#ff375b"}, styleInput()]}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder='Setor'
               />
         )}
         />

         { errors.sector && <Text style={styles.labelError}>{errors.sector?.message}</Text>}

         
        <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={handleSubmit(handleSignIn)}>
            <Text style={styles.buttonText}>Cadastrar</Text>
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