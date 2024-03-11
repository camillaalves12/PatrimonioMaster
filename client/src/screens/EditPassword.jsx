import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import EditProfile from '../components/EditProfile/EditProfile';

export default function EditPassword() {

  const [password, setPassword] = useState('')
  const handleSave = newPassword => {
    // Lógica para salvar o email
    console.log('Senha salva:', newPassword);
    // Atualiza o email em algum lugar (por exemplo, um banco de dados)
    setPassword(newPassword)
  }

  return (
      <EditProfile type="password" onSave={handleSave} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
   }

  });