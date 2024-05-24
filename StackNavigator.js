import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/common/HomeScreen';
import AboutSliderScreen from './src/common/about/AboutSliderScreen';
import ClientLoginScreen from './src/client/login/ClientLoginScreen';
import ClientDashboardScreen from './src/client/dashboard/ClientDashboardScreen';
import ReportsScreen from './src/client/reports/ReportsScreen';
import BillAnalysisScreen from './src/client/bill_analysis/BillAnalysisScreen';
import GenerationScreen from './src/client/generation/GenerationScreen';
import CleaningScreen from './src/client/cleaning/CleaningScreen';
import EpiScreen from './src/client/epi/EpiScreen';
import PlantInformationScreen from './src/client/plant_information/PlantInformationScreen';
import IrradiationScreen from './src/client/irradiation/IrradiationScreen';
import FinancialAnalysisScreen from './src/client/financial_analysis/FinancialAnalysisScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />  */}
        {/* <Stack.Screen name="AboutSliderScreen" component={AboutSliderScreen} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="ClientLoginScreen" component={ClientLoginScreen} options={{ headerShown: false }} />  */}
        {/* <Stack.Screen name="ClientDashboardScreen" component={ClientDashboardScreen} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Reports" component={ReportsScreen} options={{ headerTitleAlign: 'center'  , headerfont : 2.5 , headerTitleStyle: { fontWeight: 'bold' } }} /> */}
        {/* <Stack.Screen name="Bill_Analysis" component={BillAnalysisScreen} options={{ headerTitleAlign: 'center', headerfont: 2.5, headerTitleStyle: { fontWeight: 'bold' } }} /> */}

        {/* <Stack.Screen name="GenerationScreen" component={GenerationScreen} /> */}
        {/* <Stack.Screen name="CleaningScreen" component={CleaningScreen} /> */}
        {/* <Stack.Screen name="EPI" component={EpiScreen} options={{ headerTitleAlign: 'center', headerfont : 2.5 , headerTitleStyle: { fontWeight: 'bold' } }} />        */}
        {/* <Stack.Screen name="PlantInformationScreen" component={PlantInformationScreen} /> */}
        {/* <Stack.Screen name="IrradiationScreen" component={IrradiationScreen} /> */}

        <Stack.Screen name="Financial_Analysis" component={FinancialAnalysisScreen} options={{ headerTitleAlign: 'center', headerfont: 2.5, headerTitleStyle: { fontWeight: 'bold' } }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
