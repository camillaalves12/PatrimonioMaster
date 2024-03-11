import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import Axios from 'axios'; // Importe o Axios aqui

export default function EditItemScreen({ route, navigation }) {
  const { item } = route.params; // Recebe o item a ser editado via parâmetro de navegação

  // Use os valores iniciais do item para preencher os campos de edição
  const [descricao, setDescricao] = useState(item.descricao);
  const [numserie, setNumSerie] = useState(item.numserie);
  const [patrimonio, setPatrimonio] = useState(item.patrimonio);
  const [secretaria, setSecretaria] = useState(item.secretaria);
  const [setor, setSetor] = useState(item.setor);

  // Função para enviar os dados atualizados para o servidor
  const updateItem = async () => {
    try {
      // Crie um objeto com os valores atualizados
      const updatedItem = {
        id: item.id,
        descricao,
        numserie,
        patrimonio,
        secretaria,
        setor
      };

      // Faça a chamada para atualizar o item no servidor
      const response = await Axios.put(`http://192.168.101.105:3002/item/${item.id}`, updatedItem);
      console.log(response.data);

      // Após atualizar, navegue de volta para a tela anterior
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput value={descricao} onChangeText={setDescricao} />
      <TextInput value={numserie} onChangeText={setNumSerie} />
      <TextInput value={patrimonio} onChangeText={setPatrimonio} />
      <TextInput value={secretaria} onChangeText={setSecretaria} />
      <TextInput value={setor} onChangeText={setSetor} />
      <Button title="Salvar" onPress={updateItem} />
    </View>
  );
}
