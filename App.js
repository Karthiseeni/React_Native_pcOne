import React, { useState } from 'react'
import { View } from 'react-native'
import Login from './app/features/Login';
import Otp from './app/features/Otp';
import PwdScreen from './app/features/PwdScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function App() {
  const Stack = createNativeStackNavigator();

  const [screenNav, setScreenNav] = useState('login')

  return (
    <View>
      {
        {
          "login": <Login setScreenNav={setScreenNav} />,
          'otp': <Otp setScreenNav={setScreenNav} />,
          'pwdScreen': <PwdScreen setScreenNav={setScreenNav} />
        }
        [screenNav]
      }
    </View>
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='Login'>
    //     <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
    //     <Stack.Screen name="OTP" component={Otp} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  )
}

export default App