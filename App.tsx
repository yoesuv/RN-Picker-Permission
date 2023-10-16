import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import * as Notifications from 'expo-notifications';
import { RootStackParamsList } from './src/screens/root-stack-params';
import { THEME_COLOR } from './src/data/colors';
import HomeScreen from './src/screens/home';
import GalleryScreen from './src/screens/gallery';
import CameraScreen from './src/screens/camera';
import FileScreen from './src/screens/file';
import LocationScreen from './src/screens/location';
import NotificationScreen from './src/screens/notification';

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

  // notification handler
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{...baseOptions}} />
        <Stack.Screen name="Gallery" component={GalleryScreen} options={{...baseOptions, title: "Take Gallery"}} />
        <Stack.Screen name="Camera" component={CameraScreen} options={{...baseOptions, title: "Take Camera"}} />
        <Stack.Screen name="File" component={FileScreen} options={{...baseOptions, title: "Pick File"}} />
        <Stack.Screen name="Location" component={LocationScreen} options={{...baseOptions, title: "Location"}} />
        <Stack.Screen name="Notification" component={NotificationScreen} options={{...baseOptions, title: "Notification"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
