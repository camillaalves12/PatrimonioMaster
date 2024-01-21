import 'react-native-gesture-handler';
import { NativeBaseProvider } from 'native-base';
import {Routes} from './src/routes/index'



export default function App() {
  return (
    <NativeBaseProvider>
      <Routes />
    </NativeBaseProvider>
  );
}
