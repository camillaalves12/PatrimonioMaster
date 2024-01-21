import { Text, View, StyleSheet } from "react-native" 

export default function Home() {
   return(
      <View style={styles.container}>
         <Text style={styles.title}>PatrimonioMaster</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center', 
      alignItems: 'center',
   },
   title: {
      alignContent: 'center',
      fontSize: 30,
      fontWeight: 500
   }

})