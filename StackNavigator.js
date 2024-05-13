import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from './src/common/HomeScreen';
// import AboutSliderScreen from './src/common/about/AboutSliderScreen';
// import ClientLoginScreen from './src/client/Login/ClientLoginScreen';
import ClientDashboardScreen from './src/client/Dashboard/ClientDashboardScreen';


const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="AboutSliderScreen" component={AboutSliderScreen} options={{ headerShown: false }} /> */}
         {/* <Stack.Screen name="ClientLoginScreen" component={ClientLoginScreen} options={{ headerShown: false }} /> */}
        <Stack.Screen name="ClientDashboardScreen" component={ClientDashboardScreen} options={{ headerShown: false }} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
