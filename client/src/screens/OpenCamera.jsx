import React, { useState, useEffect, useRef } from "react";
import { SafeAreaView, View, StyleSheet, TouchableOpacity, Modal, Text, Image } from "react-native";
import { Camera } from "expo-camera";
import { FontAwesome } from '@expo/vector-icons'
import * as Permissions from 'expo-permissions'
import * as MediaLibrary from 'expo-media-library'

export default function OpenCamera() {
  const camRef = useRef(null)
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasPermission, setHasPermission] = useState(null);
  const [capturedPhoto, setCapturePhoto  ] = useState(null)
  const [open, setOpen  ] = useState(false)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();

    (async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>Acesso negado!</Text>;
  }

  // async function takePicture() {
  //   if(camRef) {
  //     const data = await camRef.current.takePictureAsync();
  //     setCapturePhoto(data.uri)
  //     setOpen(true)
  //     console.log(data);
  //   }
  // }

  async function takePicture() {
    if (hasPermission) { // Verifica se a permissão foi concedida
      if (camRef.current) {
        const data = await camRef.current.takePictureAsync();
        setCapturePhoto(data.uri);
        setOpen(true);
        console.log(data);
        if (props.onPictureTaken) {
          props.onPictureTaken(data.uri);
        }
      }
    } else {
      console.log("Permissão para acessar a câmera não foi concedida.");
    }
  }

  async function savePicture() {
    const asset = await MediaLibrary.createAssetAsync(capturedPhoto)
    .then(()=> {
      alert('Salvo com sucesso')
    })
    .catch(error => {
      console.log('err', error)
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera 
        style={{ flex: 1 }} 
        type={type}
        ref={camRef}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row",
          }}
        >
          {/* muda a camera - para frontal */}
          {/* <TouchableOpacity
            style={{ position: "absolute", bottom: 20, left: 20 }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
            
          > 
          <Text style={{fontSize: 20, marginBottom: 13, color: '#fff'}}>Trocar</Text>
          
          </TouchableOpacity> */}
        </View>
      </Camera>

      <TouchableOpacity style={styles.button} onPress={takePicture}>
            <FontAwesome name="camera" size={23} color='#fff'/>
      </TouchableOpacity>

      {
        capturedPhoto && 
        <Modal 
          animationType="slide"
          transparent={false}
          visible={open}> 

          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', margin: 10}}>

            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20}}>

            <TouchableOpacity style={{margin: 10}} onPress={() => setOpen(false)}>
              <FontAwesome name="window-close" size={50} color='#FF0000'/>
            </TouchableOpacity>
            <TouchableOpacity style={{margin: 10}} onPress={ savePicture }>
              <FontAwesome name="upload" size={50} color='#121212'/>
            </TouchableOpacity>

            </View>

            <Image 
              style={{width: '100%', height: '70%', justifyContent: 'center', alignItems: 'center', borderRadius: 20}}
              source={{uri: capturedPhoto}}
              />
            </View>
        </Modal>

      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
    margin: 20,
    borderRadius: 10,
    height: 50
  }
});
