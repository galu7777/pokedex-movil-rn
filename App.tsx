import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Tabs } from './src/navigation/Tabs';
//import { Navigation } from './src/navigation/Navigation';

const App = () => {
  return (

    <NavigationContainer>
      {/*<Navigation/>*/}
      <Tabs/>
    </NavigationContainer>
  )
}

export default App