import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        fetch('http://192.168.101.105:3002/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
        .then(response => {
            if (response.ok) {
                // Login bem-sucedido
                Alert.alert('Sucesso', 'Login bem-sucedido');
            } else {
                // Credenciais inválidas
                Alert.alert('Erro', 'Credenciais inválidas');
            }
        })
        .catch(error => {
            console.error('Erro ao fazer login:', error);
            Alert.alert('Erro', 'Erro ao fazer login');
        });
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nome de usuário"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    button: {
        width: '100%',
        height: 40,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
    },
});

// import React from 'react';
// import { StyleSheet, Text, View,TextInput, TouchableOpacity} from 'react-native';


// export default function Login() {
//    return(
//       <View style={styles.div}>
//         <Text style={styles.title}>Patrimônio Master</Text>
  
//         <View style={styles.divInputs}>
//           <View style={styles.inputs}>
//             <Text style={styles.textInput}>Login:</Text>
//             <TextInput style={styles.input}/>
//           </View>
//           <View style={styles.inputs}>
//             <Text style={styles.textInput}>Senha:</Text>
//             <TextInput style={styles.input}/>
//           </View>
//             <TouchableOpacity style={styles.button} activeOpacity={0.7}  >
//               <Text style={styles.textButton}>Entrar</Text>
//             </TouchableOpacity>
//             <Text style={{textAlign:'center', color:'#385898' }}>Esqueceu a senha?</Text>
//         </View>
//     </View>
//     )
// }

// const styles = StyleSheet.create({

//    div: {
//     flex: 1,
//      justifyContent: 'center', 
//      alignItems: 'center',
//    },
//    title: {
//      textAlign: 'center',
//      fontSize: 16,
//      bottom: 32
//    },
//    divInputs: {
//      display: 'flex',
//      gap: 10
//    },
//    inputs: {
//      display:'flex',
//      gap: 8,
//      width: 100
//    },
//    input: {
//      border: '1px solid #000',
//      height: 20,
//      borderRadius: 8,
//      fontSize: 12,
//    },
//    textInput: {
//      fontSize: 12
//    },
//    button: {
//      backgroundColor: '#1877F2',
//      alignItems: 'center',
//      padding: 8,
//      borderRadius: 8,
//      color: '#fff',
//      marginTop: 8
//    },
//    textButton: {
//       color: '#fff',
//       fontSize: 10,
//       fontWeight: 'bold'
//     },
//  });
 