import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OpenCamera from '../screens/OpenCamera';
import Profile from '../screens/Profile';
import Photo from '../components/Photo/Photo';
import EditName from '../screens/EditName';
import EditEmail from '../screens/EditEmail';
import EditPassword from '../screens/EditPassword';
import Login from '../screens/Login';
import EditItemScreen from '../screens/EditItemScreen';

const ProfileStack = createNativeStackNavigator();
const FilterStack = createNativeStackNavigator();

export function ProfileStackRoutes() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="perfil"
        component={Profile}
        options={{
          headerTitle: 'Perfil',
          headerBackVisible: true
        }}
      />
      <ProfileStack.Screen
        name="EditName"
        component={EditName}
        options={{
          headerTitle: 'Editar Nome',
          headerBackVisible: true
        }}
      />
      <ProfileStack.Screen
        name="EditPhoto"
        component={Photo}
        options={{
          headerTitle: 'Foto de perfil',
          headerBackVisible: true
        }}
      />
      <ProfileStack.Screen
        name="EditEmail"
        component={EditEmail}
        options={{
          headerTitle: 'Editar Email',
          headerBackVisible: true
        }}
      />
      <ProfileStack.Screen
        name="EditPassword"
        component={EditPassword}
        options={{
          headerTitle: 'Editar senha',
          headerBackVisible: true
        }}
      />
      <ProfileStack.Screen
        name="EditItemScreen"
        component={EditItemScreen}
        options={{
          headerTitle: 'Editar Item',
          headerBackVisible: true
        }}
      />
    </ProfileStack.Navigator>
  );
}

export function FilterStackRoutes() {
  return (
    <FilterStack.Navigator screenOptions={{ headerShown: false }}>
      <FilterStack.Screen name="filtro" component={Login} />
    </FilterStack.Navigator>
  );
}
