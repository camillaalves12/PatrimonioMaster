import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Feed from '../screens/Feed'

const Stack = createNativeStackNavigator()

export default function StackRoutes() {
   return(
      <Stack.Navigator screenOptions={{headerShown: false}}>
         <Stack.Screen 
            name="novo" 
            component={Feed} 
         />
      </Stack.Navigator>
   )
}