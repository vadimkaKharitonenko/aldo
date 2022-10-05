import React, {FC} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

type SectionCardProps = {
  backgroundImage: any;
  title: string;
  size: 'small' | 'big';
  onPress?: () => void;
};

const SectionCard: FC<SectionCardProps> = ({
  backgroundImage,
  title = '',
  size = 'big',
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground style={styles.background} source={backgroundImage}>
        <View style={styles.container}>
          <View style={size === 'small' ? styles.btn : null}>
            <Text style={size === 'small' ? styles.btnText : styles.title}>
              {title}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 208,
    padding: 20,
  },
  background: {
    width: '100%',
  },
  btn: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.53)',
  },
  btnText: {
    width: '100%',
    padding: 9,
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#333333',
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 36,
    color: '#333333',
  },
});

export {SectionCard};
