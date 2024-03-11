import React from 'react';
import { View, Text } from 'react-native';

export default function CustomDrawerContent({ navigation }){
   // Obtenha o nome da tela atual
   const routeName = navigation.dangerouslyGetState().routes[navigation.dangerouslyGetState().index].name;

   return (
      <View>
         {/* Título dinâmico que será atualizado com base na rota atual */}
         <Text>{routeName}</Text>
         {/* Renderize o restante dos itens do drawer */}
         <DrawerItemList {...props} />
      </View>
   );
}

