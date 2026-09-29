import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  Alert,
} from 'react-native';

import { useState } from 'react';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../styles/styles';

export default function Welcome() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const loginUser = async () => {
    // Check fields
    if (!email || !password) {
      Alert.alert('Error', 'Please enter your email and password');
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        'http://localhost:3000/api/auth/login',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );

      const data = await response.json();

      console.log(data);

      // Login failed
      if (!response.ok) {
        Alert.alert('Login failed', data.message);
        return;
      }

      // Login successful
      Alert.alert('Success', 'Login successful');

      console.log('TOKEN:', data.token);
      console.log('USER:', data.user);

      await AsyncStorage.setItem('token', data.token);

      // Go to home screen
      router.replace('/');
      
    } catch (error) {
      console.log('Login error:', error);

      Alert.alert(
        'Connection Error',
        'Could not connect to the server'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.welcome}>

      <View style={styles.container}>

        <Text style={styles.LogoText}>
          Welcome to Sweetdeli!
        </Text>

        <Text style={styles.description}>
          lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>

      </View>

      <View style={styles.body}>

        <Text style={styles.title}>
          Welcome Back!
        </Text>

        <Text
          style={{
            fontFamily: 'Poppins_400Regular',
            paddingTop: 10,
          }}
        >
          Meet the good taste today
        </Text>


        {/* EMAIL */}

        <Text style={styles.formTitle}>
          Email or Phone number
        </Text>

        <TextInput
          style={styles.textInput}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          autoCapitalize="none"
          keyboardType="email-address"
        />


        {/* PASSWORD */}

        <Text style={styles.formTitle}>
          Password
        </Text>

        <TextInput
          style={styles.textInput}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry
        />


        <Text
          style={{
            fontFamily: 'Poppins_600Bold',
            paddingTop: 25,
            paddingBottom: 10,
            paddingLeft: 250,
            color: '#777E90',
          }}
        >
          Forgot Password?
        </Text>


        {/* LOGIN BUTTON */}

        <Pressable
          onPress={loginUser}
          style={styles.signButton}
          disabled={loading}
        >
          <Text style={styles.signtext}>
            {loading ? 'Signing in...' : 'Sign In'}
          </Text>
        </Pressable>


        <Text
          style={{
            paddingLeft: 90,
            paddingTop: 15,
          }}
        >
          Or do it via other accounts
        </Text>


        <View style={styles.logoSocial}>

          <Image
            source={require('../../assets/images/Frame 12.png')}
          />

          <Image
            source={require('../../assets/images/Frame 13.png')}
          />

          <Image
            source={require('../../assets/images/Frame 14.png')}
          />

        </View>


        <Text style={styles.label}>
          Don't have an account?

          <Pressable
            onPress={() => router.push('/signUp')}
          >
            <Text> sign Up</Text>
          </Pressable>

        </Text>

      </View>

    </View>
  );
}

