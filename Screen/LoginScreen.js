import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (email === 'test@example.com' && password === '123456') {
      await AsyncStorage.setItem('isLoggedIn', 'true');
      navigation.replace('Home');
    } else {
      Alert.alert('Error', 'Invalid credentials');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Pressable style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: 
  {
     flex: 1, 
    justifyContent: 'center', 
    padding: 20 
},
  input: 
  { 
    borderWidth: 1, 
    marginBottom: 10, 
    padding: 10, 
    borderRadius: 5 
},
  title: 
  { 
    fontSize: 24, 
    marginBottom: 20, 
    textAlign: 'center' 
},
loginButton:{
    backgroundColor:'#025AE0',
    paddingVertical:10,
    borderRadius:10
},
loginText:{
    fontSize:16,
    color:'#fff',
    textAlign:'center',
    fontWeight:'500'
}
});
