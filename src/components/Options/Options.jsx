import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Feather  } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default  function Options({text, iconName, iconSize})  {
    return (
      <View style={styles.div}>
         {iconName && iconName.startsWith('feather:') ? ( // Verifica se o ícone é do Feather
        <Feather name={iconName.split(':')[1]} size={iconSize} color='blue' style={styles.iconItem} />
      ) : (
        <MaterialIcons name={iconName} size={iconSize} color='blue' style={styles.iconItem} />
      )}
        <View style={styles.divItens} >
          <Text style={styles.text}>{text}</Text>
          <MaterialIcons name="arrow-forward-ios" size={20} color='#bebdbd'  style={styles.iconArrow}/>
        </View>
      </View>
    )

}
  
 const styles = StyleSheet.create({
   div: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#d8d4d4',
      width: '90%',
      borderRadius: 24,
      padding: 16,
      top: 40,
      marginBottom: 15
   },
   divItens: {
      width: '120%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: "center",
   },
   iconItem: {
   },
   text: {
      fontWeight: '600',
      marginLeft: -75
   },

 });