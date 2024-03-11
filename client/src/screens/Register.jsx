import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import OpenCamera from './OpenCamera';
import { FontAwesome } from '@expo/vector-icons';
import Axios from "axios";

//validação dos campos
const schema = yup.object({
   descricao: yup.string().required("Informe a descrição do item"),
   numserie: yup.string().required("Informe o número de serie do item"),
   patrimonio: yup.string().required("Informe o patrimônio do item"),
   //photo: yup.string().required("Anexe uma foto do item"),
  // invoice: yup.string().required("Anexe a nota fiscal do item"),
   secretaria: yup.string().required("Informe a secretaria que o item pertence"),
   setor: yup.string().required("Informe o setor da secretaria que o item pertence"),
})
export default function Register() {

   // const [photoUri, setPhotoUri] = useState(null);
   // const [invoiceUri, setInvoiceUri] = useState(null);

   const { control, handleSubmit, reset, formState: { errors }, getValues } = useForm({
      resolver: yupResolver(schema)
   });

   // const submeterInformacao = (texto) => {
   // }
   
   function handleSignIn(data) {
      alert("Item cadastrado com sucesso!")
      console.log(data)
      Axios.post("http://192.168.101.105:3002/item", {item: data})
     reset();
   }

   const styleInput = () =>  {
      return{
         borderWidth: 1,
         borderColor: '#000',
         borderRadius: 8,
         padding: 5,
         fontSize: 18,
         marginTop: 10,
         width: '80%',
         height: '7%'
        }
    }

    const handlePictureTaken = (uri, type) => {
      if (type === 'photo') {
        setPhotoUri(uri);
      } else if (type === 'invoice') {
        setInvoiceUri(uri);
      }
    };

 return(
      <View style={styles.container}>
         {/* <Text style={styles.title}>Cadastro</Text> */}

         <Controller 
            control={control}
            name='descricao'
            render={({ field: { onChange, onBlur, value } }) => (
               <TextInput 
                  style={[styles.input, styleInput() ]}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder='Descrição do item'
               />
         )}
         />
         { errors.descricao && <Text style={styles.labelError}>{errors.descricao?.message}</Text>}

         <Controller 
            control={control}
            name='numserie'
            render={({ field: { onChange, onBlur, value } }) => (
               <TextInput 
               style={[styles.input, styleInput() ]}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder='Número de série'
               />
         )}
         />

         { errors.numserie && <Text style={styles.labelError}>{errors.numserie?.message}</Text>}
         
         <Controller 
            control={control}
            name='patrimonio'
            render={({ field: { onChange, onBlur, value } }) => (
               <TextInput 
                  style={[styles.input, styleInput() ]}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder='Patrimônio'
               />
         )}
         />

         { errors.patrimonio && <Text style={styles.labelError}>{errors.patrimonio?.message}</Text>}

         {/* <Controller 
            control={control}
            name='photo'
            render={({ field: { onChange, onBlur, value } }) => (
               <TextInput 
                  style={[styles.input, styleInput() ]}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder='Foto do item'
               />
         )}
         /> */}
               {/* <View style={styles.inputContainer}>
                  <Text style={styles.label}>Foto do item</Text>
                  <OpenCamera
                     onPictureTaken={(uri) => handlePictureTaken(uri, 'photo')}
                  />
                  {photoUri && <Text style={styles.photoUri}>{photoUri}</Text>}
               </View> */}
         {/* { errors.photo && <Text style={styles.labelError}>{errors.photo?.message}</Text> } */}
{/* 
         <Controller 
            control={control}
            name='invoice'
            render={({ field: { onChange, onBlur, value } }) => (
               <TextInput 
                  style={[styles.input, styleInput() ]}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder='Nota fiscal'
               />
         )}
         /> */}

         {/* <OpenCamera onPictureTaken={(photoUri) => setValue('invoice', photoUri)} /> */}

         {/* <View style={styles.inputContainer}>
            <Text style={styles.label}>Nota fiscal</Text>
            <OpenCamera
               onPictureTaken={(uri) => handlePictureTaken(uri, 'invoice')}
            />
            {invoiceUri && <Text style={styles.photoUri}>{invoiceUri}</Text>}
         </View> */}


         {/* { errors.invoice && <Text style={styles.labelError}>{errors.invoice?.message}</Text>} */}

         <Controller 
            control={control}
            name='secretaria'
            render={({ field: { onChange, onBlur, value } }) => (
               <TextInput 
                  style={[styles.input, styleInput() ]}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder='Secretaria'
               />
         )}
         />

         { errors.secretaria && <Text style={styles.labelError}>{errors.secretaria?.message}</Text>}

         <Controller 
            control={control}
            name='setor'
            render={({ field: { onChange, onBlur, value } }) => (
               <TextInput 
                  style={[styles.input, styleInput() ]}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder='Setor'
               />
         )}
         />

         { errors.setor && <Text style={styles.labelError}>{errors.setor?.message}</Text>}

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
      margin: 8
   },
   title: {
      fontSize: 34,
      marginBottom: 34,
      color: '#121212',
      fontWeight: 'bold'
   },
   input: {
      width: '80%',
      height: '7%',
      padding: 5,
      fontSize: 18,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#000',
      color: '#000',
      marginTop: 10
   },
   button: {
      width: '80%',
      height: '7%',
      borderRadius: 8,
      padding: 5,
      fontSize: 18,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#236ef8',
      marginTop: 20
   },
   buttonText: {
      color: '#fff',
      fontWeight: '600',
      fontSize: 16
   },
   labelError: {
      fontSize: 12,
      alignSelf: 'flex-start',
      color: '#ff375b',
      marginTop: -15,
      marginBottom: 5,
      marginLeft: 45,
      
   },
})