import { Text, View, StyleSheet } from "react-native" 
import { Loading } from "../components/Loading"

export default function Home() {
   return(
      <View style={styles.container}>
         <Loading />
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