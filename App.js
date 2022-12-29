import React, { useState } from 'react'
import { View } from 'react-native'
import Login from './app/features/Login';
import Otp from './app/features/Otp';

function App() {

  const [screenNav, setScreenNav] = useState('login')

  return (
    <View>
      {
        {
          "login": <Login setScreenNav={setScreenNav} />,
          'otp': <Otp setScreenNav={setScreenNav} />
        }
        [screenNav]
      }
    </View>
  )
}

export default App