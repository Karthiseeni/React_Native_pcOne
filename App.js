import React from 'react'
import Login from './app/features/Login';
import Otp from './app/features/Otp';
import PwdScreen from './app/features/PwdScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { Store } from './app/redux/store';
import PartSelection from './app/features/PartSelection';
import LaunguageSelection from './app/features/LaunguageSelection';
import DeviceCapable from './app/features/DeviceCapable';
import Home from './app/features/Home';
import NavBar from './app/components/NavBar';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
          <Stack.Screen options={{ headerShown: false }} name="Otp" component={Otp} />
          <Stack.Screen options={{ headerShown: false }} name="PwdScreen" component={PwdScreen} />
          <Stack.Screen options={{ headerShown: false }} name="PartSelection" component={PartSelection} />
          <Stack.Screen options={{ headerShown: false }} name="LaunguageSelection" component={LaunguageSelection} />
          <Stack.Screen options={{ headerShown: false }} name="DeviceCapable" component={DeviceCapable} />
          <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider >
  )
}

export default App