import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';

import TabRoutes from './tab.routes';
import { ProfileStackRoutes, FilterStackRoutes } from './stack.routes';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
   return(
      <Drawer.Navigator screenOptions={{ headerShown: true }}>
         <Drawer.Screen
            name="Recentes"
            component={TabRoutes}
            options={{
               drawerIcon: ({ color, size }) => <Feather name="home" color={color} size={size}/>,
               drawerLabel: 'Início'
               
            }}
         />
         <Drawer.Screen
            name="profile"
            component={ProfileStackRoutes}
            options={{
               drawerIcon: ({ color, size }) => <Feather name="user" color={color} size={size}/>,
               drawerLabel: 'Meu perfil',
               headerShown: false
            }}
         />
         <Drawer.Screen
            name="filter"
            component={FilterStackRoutes}
            options={{
               drawerIcon: ({ color, size }) => <Feather name="filter" color={color} size={size}/>,
               drawerLabel: 'Filtrar por Secretaria'
            }}
         />
      </Drawer.Navigator>
   )
}