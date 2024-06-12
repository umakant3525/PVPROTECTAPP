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
import CleaningMainScreen from './src/client/cleaning/CleaningMainScreen';
import EpiScreen from './src/client/epi/EpiScreen';
import PlantInformationScreen from './src/client/plant_information/PlantInformationScreen';
import IrradiationScreen from './src/client/irradiation/IrradiationScreen';
import FinancialAnalysisScreen from './src/client/financial_analysis/FinancialAnalysisScreen';
import SelectRoleScreen from './src/common/role/SelectRoleScreen';
import TechnicianLoginScreen from './src/technician/login/TechnicianLoginScreen';
import TechnicianDashboardScreen from './src/technician/dashboard/TechnicianDashboardScreen';
import PaymentTrackingScreen from './src/client/payment_tracking/Payment_TrackingScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />  */}
        {/* <Stack.Screen name="AboutSliderScreen" component={AboutSliderScreen} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="SelectRoleScreen" component={SelectRoleScreen} options={{ headerShown: false }} /> */}

        {/* client screens */}
        {/* <Stack.Screen name="ClientLoginScreen" component={ClientLoginScreen} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="ClientDashboardScreen" component={ClientDashboardScreen} options={{ headerShown: false }}  /> */}

        {/* <Stack.Screen name="Bill_Analysis" component={BillAnalysisScreen} options={{ headerTitleAlign: 'center', headerfont: 2.5, headerTitleStyle: { fontWeight: 'bold' } }} /> */}
        {/* <Stack.Screen name="Generation_Values" component={GenerationScreen} options={{ headerTitleAlign: 'center', headerfont: 2.5, headerTitleStyle: { fontWeight: 'bold' } }} /> */}
        {/* <Stack.Screen name="Cleaning_Cycle" component={CleaningMainScreen} options={{ headerTitleAlign: 'center', headerfont: 2.5, headerTitleStyle: { fontWeight: 'bold' } }} /> */}
        {/* <Stack.Screen name="Reports" component={ReportsScreen} options={{ headerTitleAlign: 'center', headerfont: 2.5, headerTitleStyle: { fontWeight: 'bold' } }} /> */}
        {/* <Stack.Screen name="EPI" component={EpiScreen} options={{ headerTitleAlign: 'center', headerfont: 2.5, headerTitleStyle: { fontWeight: 'bold' } }} /> */}
        <Stack.Screen name="PlantInformationScreen" component={PlantInformationScreen} />
        <Stack.Screen name="IrradiationScreen" component={IrradiationScreen} />
        <Stack.Screen name="Financial_Analysis" component={FinancialAnalysisScreen} options={{ headerTitleAlign: 'center', headerfont: 2.5, headerTitleStyle: { fontWeight: 'bold' } }} />
        <Stack.Screen name="Payment_Tracking_Screen" component={PaymentTrackingScreen} options={{ headerTitleAlign: 'center', headerfont: 2.5, headerTitleStyle: { fontWeight: 'bold' } }} />

        {/* technicain screnns  */}
        <Stack.Screen name="TechnicianLoginScreen" component={TechnicianLoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TechnicianDashboardScreen" component={TechnicianDashboardScreen} options={{ headerTitleAlign: 'center', headerfont: 2.5, headerTitleStyle: { fontWeight: 'bold' } }} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
