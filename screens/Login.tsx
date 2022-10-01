import React, {FC} from 'react';
import {ScrollView, Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../navigation/types';

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen: FC<LoginScreenProps> = ({navigation}) => {
  return (
    <ScrollView>
      <Button
        title="Go to catalog"
        onPress={() => navigation.navigate('Catalog')}
      />
    </ScrollView>
  );
};

export {LoginScreen};
