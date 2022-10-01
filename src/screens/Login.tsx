import React, {FC, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ToastAndroid,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../navigation/types';

import {LogoIcon, UserIcon, PasswordIcon} from '../components/Icons';
import {Field} from '../components/Field';
import {Socials} from '../components/Socials';
import {Button} from '../components/Button';

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen: FC<LoginScreenProps> = ({navigation}) => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onSubmit = () => {
    if (login === 'admin' && password === 'admin') {
      navigation.navigate('Catalog');
    } else {
      ToastAndroid.showWithGravity(
        'Wrong password. Try again.',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <LogoIcon />

        <View style={styles.form}>
          <Field
            onChange={setLogin}
            placeholder="Email or Phone Number"
            icon={<UserIcon />}
          />
          <Field
            onChange={setPassword}
            placeholder="Password"
            icon={<PasswordIcon />}
          />
        </View>
        <View style={styles.forgot}>
          <TouchableOpacity>
            <Text style={styles.forgotText}>FORGOT PASSWORD?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sign}>
          <Button width={190} height={54} onPress={onSubmit}>
            SIGN IN
          </Button>
        </View>

        <View style={styles.haveAccount}>
          <Text style={styles.haveAccountText}>
            <Text>Don’t have an account?{'\n'}</Text>
            <Text>
              <Text style={styles.bold} onPress={() => console.log('sign up')}>
                SIGN UP
              </Text>{' '}
              using your email address or social media below
            </Text>
          </Text>
        </View>

        <Socials />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyItems: 'center',
    padding: 20,
    paddingTop: 96,
    backgroundColor: '#FFFFFF',
  },
  form: {
    flex: 1,
    justifyContent: 'space-between',
    width: '100%',
    height: 116,
    marginTop: 102,
  },
  forgot: {
    flex: 1,
    alignContent: 'flex-end',
    marginLeft: 'auto',
    marginTop: 24,
  },
  forgotText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 11,
    color: '#333333',
  },
  sign: {
    marginTop: 41,
  },
  bold: {
    fontFamily: 'Montserrat-Bold',
  },
  haveAccount: {
    marginTop: 63,
  },
  haveAccountText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 11,
    textAlign: 'center',
  },
});

export {LoginScreen};
