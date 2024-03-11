// EditProfile.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function EditProfile({ type, onSave }) {
  const [value, setValue] = useState('');
  const [savedValue, setSavedValue] = useState('');

  const handleSave = () => {
    // Lógica para salvar o valor
    console.log(`${type} salvo:`, value);
    // Atualiza savedValue com o último valor digitado
    setSavedValue(value);
    // Chama a função onSave passada via prop para salvar o valor
    onSave(value);
    // Limpa o campo de texto após salvar
    setValue('');
  };

  const getFieldLabel = (type) => {
    switch (type) {
      case 'name':
        return 'Nome atual';
      case 'email':
        return 'Email atual';
      case 'password':
        return 'senha atual';
      default:
        return '';
    }
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>{type === 'name' ? 'Nome atual' : 'Email atual'}: {savedValue}</Text> */}
      <Text style={styles.title}>
        {getFieldLabel(type)}: {savedValue}
      </Text>


      <TextInput
        placeholder={`Digite o novo ${type}`}
        style={styles.input}
        onChangeText={text => setValue(text)}
        value={value}
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={handleSave}
      >
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    width: '80%',
    height: 40,
    padding: 5,
    fontSize: 18,
    borderRadius: 8,
    borderBottomWidth: 1,
    borderColor: '#000',
    color: '#000',
    marginTop: 5
  },
  button: {
    width: '80%',
    height: 40,
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
});
