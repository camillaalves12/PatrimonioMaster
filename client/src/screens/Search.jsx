import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal, Pressable } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  termo: yup.string().required("Informe o termo de busca")
});

export default function Search() {
  const [modalVisible, setModalVisible] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const { control, reset, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const handleSearch = async (data) => {
    console.log(data);
    try {
      const response = await fetch(`http://192.168.101.105:3002/buscar?termo=${data.termo}`);
      const json = await response.json();
      setSearchResults(json);
      openModal(); // Abre o modal após receber os resultados
      reset();
    } catch (error) {
      alert("Erro ao buscar item:", error);
    }
  }

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name='termo'
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder='Patrimônio ou Número de Série'
          />
        )}
      />
      {errors.termo && <Text style={styles.labelError}>{errors.termo?.message}</Text>}

      <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={handleSubmit(handleSearch)}>
        <Text style={styles.buttonText}>Procurar</Text>
      </TouchableOpacity>

      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <Pressable style={styles.centeredView} onPress={closeModal}>
        <View style={styles.modalView}>
      {searchResults.length > 0 ? (
        // Se houver resultados da busca, exibe os itens
        searchResults.map((item, index) => (
            <View key={index} style={styles.item}>
              <Text style={styles.title}>Descrição: <Text style={styles.itemText}>{item.descricao}</Text> </Text>
              <Text style={styles.title}>Número de série: <Text style={styles.itemText}>{item.numserie}</Text></Text>
              <Text style={styles.title}>Patrimônio: <Text style={styles.itemText}>{item.patrimonio}</Text></Text>
              <Text style={styles.title}>Secretaria: <Text style={styles.itemText}>{item.secretaria}</Text></Text>
              <Text style={styles.title}>Setor: <Text style={styles.itemText}>{item.setor}</Text></Text>
            </View>

        ))
      ) : (
        // Se nenhum item for encontrado, exibe a mensagem
        <Text style={styles.message} >Nenhum item encontrado.</Text>
      )}
    </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8
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
    marginTop: 5
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemText: {
    fontWeight: 'normal',
  },

  message: {
    color: 'red',
    fontWeight: 'bold'
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
    alignSelf: 'flex-start',
    color: '#ff375b',
    marginTop: -15,
    paddingBottom: 5,
    marginLeft: 45
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  }
});
