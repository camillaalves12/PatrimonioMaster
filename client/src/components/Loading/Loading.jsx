import React,{ useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Text, Button, TouchableOpacity} from 'react-native';
import Axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import EditItemScreen from '../../screens/EditItemScreen';

  const Item = ({descricao, numserie, patrimonio, secretaria, setor, id,  onDelete, onEdit}) => (
    <View style={styles.item}>
      <Text style={styles.title}>Descrição: <Text style={styles.itemText}>{descricao}</Text> </Text>
      <Text style={styles.title}>Número de série: <Text style={styles.itemText}>{numserie}</Text></Text>
      <Text style={styles.title}>Patrimônio: <Text style={styles.itemText}>{patrimonio}</Text></Text>
      <Text style={styles.title}>Secretaria: <Text style={styles.itemText}>{secretaria}</Text></Text>
      <Text style={styles.title}>Setor: <Text style={styles.itemText}>{setor}</Text></Text>
      <View >
        <View style={[styles.divOptions, styles.firstItem]}>
            <TouchableOpacity onPress={() => onDelete(id)} style={[styles.divOptionsItens, styles.firstItem]} >
              <MaterialIcons name='delete' size={24} style={{marginRight: 5}} />
              <Text >Apagar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => onEdit(id)} style={styles.divOptionsItens}>
              <MaterialIcons name='edit' size={24} style={{marginRight: 5}}/>
              <Text>Editar</Text>
            </TouchableOpacity>
          </View>
      </View>

      {/* <Button title="Apagar" onPress={() => onDelete(id)} color={'#000'} /> */}
      {/* <Button title="Editar" onPress={() => onDelete(id)} color={'#000'}/> */}
     </View>

  );


  export function Loading() {
    const navigation = useNavigation();
    const [lista, setLista] = useState();


    // const handleEditPress = ({item}) => {
    //   navigation.navigate('EditItemScreen', {item: item});
    //   Axios.put(`http://192.168.101.160:3002/item/${id}`)
    // };

    useEffect(() => {
      Axios.get("http://192.168.101.160:3002/itens").then(
        (response) => {
          setLista(response.data)
        }
      )
    }, [lista])

    
  const deletarItem = (id) => {
    Axios.delete(`http://192.168.101.160:3002/item/${id}`
    );
  }
   return (
    <View style={styles.container}>
        <FlatList
        data={lista} // Usar a lista de itens obtidos
        renderItem={({ item }) => (
          <Item
            id={item.id}
            descricao={item.descricao}
            numserie={item.numserie}
            patrimonio={item.patrimonio}
            secretaria={item.secretaria}
            setor={item.setor}
            onDelete={deletarItem}
            //onEdit={handleEditPress}

          />
        )}
        keyExtractor={item => item.id.toString()} // Use toString() para garantir que o ID seja uma string
      />

    </View>
   )

}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 16,
      paddingVertical: 16,
      backgroundColor: '#cacsa',
      marginTop:  0,

   },
    item: {
      backgroundColor: '#d2d0d0',
      padding: 10,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 10

    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    itemText: {
      fontWeight: 'normal',

    },
    divOptions: {
      flexDirection: 'row',
      color: '#000',
      marginTop: 15,
      textAlign: 'center',
      borderWidth: 1,
      borderTopColor: '#838282',
      borderRightColor: '#cdcdcd',
      borderLeftColor: '#cdcdcd',
      borderBottomColor: '#cdcdcd',
    },

    divOptionsItens: {
      width: "50%",
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
      marginTop: 5,
      
    },
    firstItem: {
      borderRightWidth: 1,
      borderColor: '#838282',
    }

  });