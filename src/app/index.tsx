import { ScrollView, View, Text, Pressable, Image, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Redirect } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Octicons from '@expo/vector-icons/Octicons';

import { styles } from '@/styles/styles';
import NavBar from '@/components/navBar';
import Footer from '@/components/footer';
import Card from '@/components/card';
import Cupcake from '@/components/cupcake';
import Features from '@/components/features';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const checkLogin = async () => {
      const token = await AsyncStorage.getItem('token');

      if (token) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };

    checkLogin();
  }, []);

  // Still checking
  if (isLoggedIn === null) {
    return null;
  }

  // User is NOT logged in
  if (!isLoggedIn) {
    return <Redirect href="/welcome" />;
  }



  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <View style={{ paddingBottom: 0 }}>
          <NavBar />
        </View>

        <View style={{ paddingHorizontal: 30, }}>
          <Text style={{ fontWeight: 'bold', fontSize: 50, paddingBottom: 20, paddingTop: 0 }}>Bibendum et sit aliquam!</Text>
          <Text style={{ paddingBottom: 40, fontSize: 16 }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viver nulla mattis scelerisque. Eget cras integer.</Text>
          <Pressable style={{ backgroundColor: 'black', padding: 15, borderRadius: 29, width: '60%', justifyContent: 'center', marginLeft: 70, }}><Text style={{ color: 'white', marginLeft: 32, fontWeight: 'bold', fontSize: 16 }}>Discover Menu</Text></Pressable>
          <Text style={{ padding: 50 }}></Text>
          <Image source={require('../../assets/images/Vector.png')} style={{ width: 100, height: 140, marginLeft: 125, paddingTop: 30, paddingBottom: 30, alignContent: 'center' }} />
          <Text style={{ padding: 50 }}></Text>
          <Text style={{ fontWeight: 'bold', fontSize: 50, paddingBottom: 25 }}>Nibh in dolor bibendum.</Text>
          <Text style={{ paddingBottom: 40, fontSize: 18 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.</Text>
          <Text style={{ padding: 50 }}></Text>
          <Image source={require('../../assets/images/Vector.png')} style={{ width: 100, height: 140, marginLeft: 125, paddingTop: 30, paddingBottom: 30, alignContent: 'center' }} />
          <Text style={{ padding: 50 }}></Text>
          <View style={{}}>
            <Text style={{ fontSize: 20, textAlign: 'center', paddingBottom: 20 }}>Most Popular</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 25, textAlign: 'center', paddingBottom: 40 }}>Our Exclusive Cakes</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={true}
              contentContainerStyle={{ gap: 20, paddingBottom: 10 }}
            >

              <Card />
              <Card />
              <Card />
            </ScrollView>
            <Text style={{ alignSelf: 'center', paddingTop: 20 }}> Main Service</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 25, alignSelf: 'center', paddingBottom: 40 }}>Choose Your Favorite Flavor</Text>
            <View style={{ columnGap: 10, justifyContent: 'space-between', gap: 20, paddingBottom: 40, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', alignContent: 'center', paddingHorizontal: 20 }}>
              <Cupcake />
              <Cupcake />
              <Cupcake />
              <Cupcake />
              <Cupcake />
              <Cupcake />
            </View>
            <Text style={{ alignSelf: 'center', paddingTop: 20 }}> Our Features</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 25, alignSelf: 'center', paddingBottom: 40 }}>Quality is Our First Priority</Text>
            <View style={{ columnGap: 10, justifyContent: 'space-between', gap: 20, paddingBottom: 40, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', alignContent: 'center', paddingHorizontal: 20 }}>

              <Features />
              <Features />
              <Features />
              <Features />
            </View>

          <Text style={{ alignSelf: 'center', paddingTop: 20 }}> The Reasons</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 25, alignSelf: 'center', paddingBottom: 40 }}>Why Choose Us</Text>

            <MaterialCommunityIcons name="play-circle" size={100} color="grey" style={{ alignSelf: 'center', padding: 100 }} />

            <Text style={{ alignSelf: 'center', paddingTop: 20 }}> Testimonials</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 25, alignSelf: 'center', paddingBottom: 40 }}>What Our Customers Say</Text>
            <Text style={{ textAlign: 'center', width: 200, justifyContent: 'center', marginLeft: 70 }}> Lorem ipsum dolor sit amet, consectetur adipiscing. Aliquam scelerisque posuere vivamus egestas porttitor. Hendrerit vitae at nulla varius proin ipsum. Purus augue in morbi. </Text>
            <View style={{ flexDirection: 'row', gap: 0, paddingTop: 40, paddingBottom: 0, justifyContent: 'center', alignItems: 'center' }}>
            <Octicons name="person" size={24} color="black" style={{ alignSelf: 'center', backgroundColor: 'lightblue', padding: 10, borderRadius: 50 }} />
            <Text style={{ textAlign: 'center', width: 200, justifyContent: 'center', paddingTop: 10 , fontWeight: 'bold'}}>Alex Anderson</Text>
            </View>
            <Text style={{ textAlign: 'center', width: 200, justifyContent: 'center', marginLeft: 125,  }}>Amet phasellus interdum.</Text>
            <Text style={{ alignSelf: 'center', paddingTop: 20 }}> Get in Touch</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 25, alignSelf: 'center', paddingBottom: 10 }}>Join Our Newsletter</Text>
            <Text style={{ textAlign: 'center', width: 360, justifyContent: 'center', marginLeft: 0, paddingBottom: 20 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, est felis, sagittis viverra nulla mattis scelerisque. Eget cras integer.</Text>
            <TextInput
                      style={{borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginBottom: 20, width: '90%', marginLeft: 20,}}
                      value={email}
                      onChangeText={setEmail}
                      placeholder="Enter your email"
                      autoCapitalize="none"
                      keyboardType="email-address"
                    />
            <Pressable style={{ backgroundColor: 'black', padding: 15, borderRadius: 29, width: '95%', justifyContent: 'center', marginLeft: 17, }}><Text style={{ color: 'white', marginLeft: 99, fontWeight: 'bold', fontSize: 16 }}>Subscribe</Text></Pressable>
          </View>

        </View>
        <View style={{ paddingTop: 50, backgroundColor: '#F5F5F5', paddingBottom: 0 , gap: 20, paddingHorizontal: 20, justifyContent: 'space-between', alignItems: 'center',}}>
          <Footer />
        </View>
      </View>
    </ScrollView>
  );
}