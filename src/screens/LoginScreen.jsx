import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

// For Image
import LoginCover from '../assets/common/LoginIcon.png';
import IndiaFlag from "../assets/common/India.png"
import {Colors} from '../theme/colors';
import {Fonts} from '../theme/fonts';
import {style} from '../theme/style';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const LoginScreen = () => {
  return (
    <View>
      <Image
        source={require('../assets/common/LoginIcon.png')}
        style={styles.loginCover}
      />

      <View style={styles.innerContainer}>
        <Text style={styles.title}>
          India's #1 Food Delivery and Dining App
        </Text>

        <View style={style.alignCenter}>
          <View style={styles.line}></View>
          <Text style={styles.login}>Log in or Sign up</Text>
          <View style={styles.line}></View>
        </View>
         
        <TouchableOpacity>
        <Image source={IndiaFlag} style={styles.indiaFlag} />
        <Icon name="rocket" size={50} color="#900" />


        </TouchableOpacity>
        
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  loginCover: {
    height: 410,
    width: '100%',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    color: Colors.black,
    fontFamily: Fonts.fontABold,
    paddingHorizontal: 60,
    textAlign: 'center',
    marginBottom: 20,
  },
  login: {
    fontSize: 15,
    fontFamily: Fonts.fontASemiBold,
    color: Colors.grey,
    textAlign: 'center',
    fontFamily: Fonts.fontBSemiBold,
    marginHorizontal: 10,
  },
  line: {
    flex: 1,
    height: 0.5,
    backgroundColor: Colors.borderColor,
  },
  innerContainer: {
    padding: 16,
  },
  indiaFlag:{
    height:15,
    width:20
  }
});
