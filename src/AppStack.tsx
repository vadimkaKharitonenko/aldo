import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamList} from './navigation/types';

import {LoginScreen} from './screens/Login';
import {CatalogScreen} from './screens/Catalog';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppStack = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Catalog" component={CatalogScreen} />
      </Stack.Navigator>
    </>
  );
};

export {AppStack};
