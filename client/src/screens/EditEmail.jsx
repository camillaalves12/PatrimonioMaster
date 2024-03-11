import React from 'react';
import { View, StyleSheet } from 'react-native';
import EditProfile from '../components/EditProfile/EditProfile';

export default function EditEmail() {
  const handleSave = email => {
    // Lógica para salvar o email
    console.log('Email salvo:', email);
    // Atualiza o email em algum lugar (por exemplo, um banco de dados)
  };

  return (
      <EditProfile type="email" onSave={handleSave} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
   }

  });