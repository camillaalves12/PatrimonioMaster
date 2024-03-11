import 'react-native-gesture-handler';
import { NativeBaseProvider } from 'native-base';
import {Routes} from './src/routes/index'
import { ProfileImage } from './src/components/ProfileImage/ProfileImage';


export default function App() {
  return (
    <ProfileImage>
      <NativeBaseProvider>
        <Routes />
      </NativeBaseProvider>
    </ProfileImage>
  );
}
