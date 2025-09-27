import React from 'react';
import {  View, Text, Pressable, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/StackNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = NativeStackScreenProps<RootStackParamList, 'Landing'>;

const Landing: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> ShopLab </Text>

      <Pressable onPress={() => navigation.navigate('Login')} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Register')} style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: wp(10), marginBottom: wp(8) },
  button: {
    width: wp(50),
    height: hp(7),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0164fe',
    borderRadius: wp(3),
    elevation: 2,
    marginTop: wp(5),
  },
  buttonText: { color: 'white', fontSize: wp(6) },
});

export default Landing;
