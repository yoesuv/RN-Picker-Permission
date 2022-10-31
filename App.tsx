import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { RootStackParamsList } from './src/screens/root-stack-params';
import { THEME_COLOR } from './src/data/colors';
import Home from './src/screens/home';

const Stack = createNativeStackNavigator<RootStackParamsList>();

const baseOptions: NativeStackNavigationOptions = {
  title: "Permission & Picker",
  headerStyle: {
    backgroundColor: THEME_COLOR
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  statusBarColor: THEME_COLOR,
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{...baseOptions}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
