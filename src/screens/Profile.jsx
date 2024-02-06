import React from 'react';
import { Text, View,TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { Avatar } from "native-base";
import Options from '../components/Options/Options';

export default  function Profile()  {
    return (
      <View style={styles.container}>
        <View style={styles.divProfile}>
          <Avatar alignSelf="center" bg="amber.500" size="xl" source={{
          uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        }}>
            Camilla Alves
          </Avatar>

          <View style={styles.aboutMe}>
            <Text style={styles.title}>Camilla Alves</Text>
            <Text>camillaalves@gmail</Text>
          </View>

        </View>
            <Options 
              iconName="drive-file-rename-outline" 
              iconSize={24} 
              text="Nome"

              />
            <Options 
              iconName="add-photo-alternate" 
              iconSize={24} 
              text="Foto"

              />
            <Options 
              iconName="feather:message-square" 
              iconSize={24} 
              text="Email"

              />
            <Options 
              iconName="feather:unlock" 
              iconSize={24} 
              text="Senha"

              />
            <Options 
              iconName="feather:phone-call" 
              iconSize={24} 
              text="Suporte"

              />
            <Options 
              iconName="feather:log-out" 
              iconSize={24} 
              text="Sair       "

              />




      </View>
    )


}
  
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
   },
  divProfile: {
    alignContent: 'space-around',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    height: '30%',
    backgroundColor: '#80a1e9',
    padding: 8,
    borderEndEndRadius: 16,
    borderEndStartRadius: 16
   },
   aboutMe: {
    marginTop: 10,
    alignItems: 'center',
   },
   title: {
    fontSize: 24,
    fontWeight: 'bold',
   },
   divOptions: {
    padding: 24
   }
 });