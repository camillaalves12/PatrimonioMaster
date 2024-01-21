import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons'

import Home from "../screens/Home";
import Register from '../screens/Register'
import Search from "../screens/Search";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
   return(
      <Tab.Navigator screenOptions={{headerShown: false}} >
         <Tab.Screen 
         name="Home" 
         component={Home} 
         options={{
            tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size}/>,
            tabBarLabel: 'Inicio'
         }}
         />
         <Tab.Screen 
         name="Cadastrar item" 
         component={Register}
         options={{
            tabBarIcon: ({ color, size }) => <Feather name="plus" color={color} size={size}/>,
            tabBarLabel: 'Cadastrar'
         }}
         /> 
         <Tab.Screen 
         name="Procurar Item" 
         component={Search}
         options={{
            tabBarIcon: ({ color, size }) => <Feather name="search" color={color} size={size}/>,
            tabBarLabel: 'Procurar'
         }}
         /> 
      </Tab.Navigator>
   )
}