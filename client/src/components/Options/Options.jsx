import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Feather  } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Options({text, iconName, iconSize, destination})  {

    const navigation = useNavigation();

    const onPressOption = () => {
      navigation.navigate(destination);
    }

    return (
      <TouchableOpacity style={styles.touchable} onPress={onPressOption}>
        <View style={styles.div}>
          {iconName && iconName.startsWith('feather:') ? (
            <Feather name={iconName.split(':')[1]} size={iconSize} color='blue' style={styles.iconItem} />
          ) : (
            <MaterialIcons name={iconName} size={iconSize} color='blue' style={styles.iconItem} />
          )}
          <View style={styles.divItens}>
            <Text style={styles.text}>{text}</Text>
            <MaterialIcons name="arrow-forward-ios" size={20} color='#bebdbd' style={styles.iconArrow} />
          </View>
        </View>
    </TouchableOpacity>
    )

}
  
 const styles = StyleSheet.create({
  touchable: {
    width: '100%',
    alignItems: 'center',
  },
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
   }

 });