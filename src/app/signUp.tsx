
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
  Alert,
} from 'react-native';

import Checkbox from 'expo-checkbox';
import { styles } from '@/styles/styles';
import { useState } from 'react';
import { router } from 'expo-router';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  // ==========================
  // REGISTER USER
  // ==========================

  const registerUser = async () => {
    // Check fields
    if (!name || !email || !password) {
      Alert.alert(
        'Error',
        'Please fill in all fields'
      );
      return;
    }

    // Check terms
    if (!checked) {
      Alert.alert(
        'Terms and Conditions',
        'Please agree to the terms and conditions'
      );
      return;
    }

    // Check password
    if (password.length < 6) {
      Alert.alert(
        'Password',
        'Password must be at least 6 characters'
      );
      return;
    }

    try {
      setLoading(true);

      // Send data to Express API
      const response = await fetch(
        'http://localhost:3000/api/auth/register',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
          }),
        }
      );

      const data = await response.json();

      console.log(data);

      // Registration failed
      if (!response.ok) {
        Alert.alert(
          'Registration failed',
          data.message
        );
        return;
      }

      // Registration successful
      Alert.alert(
        'Success',
        'Account created successfully'
      );

      console.log('USER:', data.user);

      // Go to login page
      router.push('/welcome');

    } catch (error) {
      console.log('Registration error:', error);

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
          Create Your Account
        </Text>

        <Text
          style={{
            fontFamily: 'Poppins_400Regular',
            paddingTop: 10,
          }}
        >
          It's Free And Easy
        </Text>


        {/* NAME */}

        <Text style={styles.formTitle}>
          Full Name
        </Text>

        <TextInput
          style={styles.textInput}
          value={name}
          onChangeText={setName}
          placeholder="Enter your Name"
        />


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
            color: '#777E90',
          }}
        >
          Must be 6 characters at least
        </Text>


        {/* TERMS */}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
          }}
        >

          <Checkbox
            value={checked}
            onValueChange={setChecked}
          />

          <Text
            style={{
              width: 330,
              marginLeft: 8,
            }}
          >
            By creating an account means you agree to our
            terms and conditions
          </Text>

        </View>


        {/* SIGN UP BUTTON */}

        <Pressable
          style={styles.signButton}
          onPress={registerUser}
          disabled={loading}
        >

          <Text style={styles.signtext}>
            {loading ? 'Creating Account...' : 'Sign Up'}
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


        {/* SOCIAL LOGIN */}

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


        {/* LOGIN */}

        <Text style={styles.label}>

          Already have an account?

          <Pressable
            onPress={() => router.push('/welcome')}
          >
            <Text> sign In</Text>
          </Pressable>

        </Text>

      </View>

    </View>
  );
}
