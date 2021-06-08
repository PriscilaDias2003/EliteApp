import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import initialScreen from './pages/initialScreen/index';
import homePage from './pages/homePage/index';
import companyList from './pages/companyList/index';
import companyDetail from './pages/companyDetail/index';
import mapScreen from './pages/mapScreen/index';


const Stack = createStackNavigator();

export default function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator
      headerMode = "none"
      initialRouteName = "initialScreen">

        <Stack.Screen name = "initialScreen" component={initialScreen} />
        <Stack.Screen name = "homePage" component={homePage} />
        <Stack.Screen name = "companyList" component={companyList} />
        <Stack.Screen name = "companyDetail" component={companyDetail} />
        <Stack.Screen name = "mapScreen" component={mapScreen} />

      </Stack.Navigator>

    </NavigationContainer>

  )

}