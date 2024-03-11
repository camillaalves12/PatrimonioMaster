import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Avatar } from 'native-base';
import { useProfileImage } from '../ProfileImage/ProfileImage';

export default function Photo() {
  const [image, setImage] = useState(null);
  const { updateProfileImage } = useProfileImage();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (result.cancelled === false && result.assets && result.assets.length > 0) {
      const selectedImage = result.assets[0];
      setImage(selectedImage.uri);
      updateProfileImage(selectedImage.uri); // Atualiza a imagem selecionada no contexto
    }
  };

  return (
    <View style={styles.container}>
        {image ? (
          <Avatar size="xl" source={{ uri: image }} />
        ) : (
          <Avatar size="xl" />
        )}
        <Button title="Escolher Foto" onPress={pickImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
