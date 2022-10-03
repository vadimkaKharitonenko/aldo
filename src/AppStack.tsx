import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamList} from './navigation/types';

import {LoginScreen} from './screens/Login';
import {CatalogScreen} from './screens/Catalog';
import {HomeScreen} from './screens/Home';
import {FavoritesScreen} from './screens/Favorites';
import {AccountScreen} from './screens/Account';
import {HeaderTitle} from './components/Header/HeaderTitle';
import {HeaderLeft} from './components/Header/HeaderLeft';
import {HeaderRight} from './components/Header/HeaderRight';

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
        <Stack.Screen
          name="Catalog"
          component={CatalogScreen}
          options={({navigation}) => ({
            headerBackVisible: false,
            headerTitle: props => <HeaderTitle {...props} />,
            headerLeft: props => (
              <HeaderLeft {...props} navigation={navigation} />
            ),
            headerRight: props => <HeaderRight {...props} />,
          })}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({navigation}) => ({
            headerBackVisible: false,
            headerTitle: props => <HeaderTitle {...props} />,
            headerLeft: props => (
              <HeaderLeft {...props} navigation={navigation} />
            ),
            headerRight: props => <HeaderRight {...props} />,
          })}
        />
        <Stack.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={({navigation}) => ({
            headerBackVisible: false,
            headerTitle: props => <HeaderTitle {...props} />,
            headerLeft: props => (
              <HeaderLeft {...props} navigation={navigation} />
            ),
            headerRight: props => <HeaderRight {...props} />,
          })}
        />
        <Stack.Screen
          name="Account"
          component={AccountScreen}
          options={({navigation}) => ({
            headerBackVisible: false,
            headerTitle: props => <HeaderTitle {...props} />,
            headerLeft: props => (
              <HeaderLeft {...props} navigation={navigation} />
            ),
            headerRight: props => <HeaderRight {...props} />,
          })}
        />
      </Stack.Navigator>
    </>
  );
};

export {AppStack};
