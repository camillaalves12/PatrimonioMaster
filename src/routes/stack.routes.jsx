import { createNativeStackNavigator } from '@react-navigation/native-stack'

import New from '../screens/New'

const Stack = createNativeStackNavigator()

export default function StackRoutes() {
   return(
      <Stack.Navigator screenOptions={{headerShown: false}}>
         <Stack.Screen 
            name="novo" 
            component={New} 
         />
      </Stack.Navigator>
   )
}