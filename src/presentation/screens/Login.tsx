
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../navigation/types";
import { TextInput, StyleSheet, Pressable, Text } from "react-native";
import { useState } from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useAuth } from "../hooks/useAuth";

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login: React.FC<Props> = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading } = useAuth(navigation);



  const handleLogin = async () => {
    const result = await login(email, password);
    if (!result.status) window.alert(result.output);
  };


  return (
    <SafeAreaView style={styles.container}>
      <TextInput value={email} onChangeText={setEmail}
        placeholder="Enter mail"
        style={styles.input}></TextInput>

      <TextInput value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        placeholder="Enter password"></TextInput>

      <Pressable onPress={handleLogin}>
        <Text>Sign In</Text>
      </Pressable>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: wp(80),
    height: hp(7),
    borderWidth: 1,
    borderRadius: wp(3),
    marginTop: wp(5),
    paddingLeft: wp(4)
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

});

export default Login;





/**
 Flow for Login
-------------------

User types email/password → screen keeps local state.
Screen calls useAuth().login(email, password).
Hook calls loginUser use-case → receives repository interface.
Repository implementation calls Firebase → returns result.
Hook updates Redux store (user info + order history).
Screen navigates to Tabs or shows error. This naviagation logic is also handled by the hook
 */

/**
 A dumb (or presentational) screen ideally does not contain business logic 
 or talk directly to external services (like Firebase). Its responsibilities are:

Render UI.
Collect user input.
Call callbacks/functions passed in as props or from hooks.
Handle navigation or display feedback.
 */
