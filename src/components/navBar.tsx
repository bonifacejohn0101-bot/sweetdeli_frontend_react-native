import Feather from '@expo/vector-icons/Feather';
import Octicons from '@expo/vector-icons/Octicons';
import Ionicons from '@expo/vector-icons/Ionicons';
import {View,Image,StyleSheet,SafeAreaView,Text, LogBox} from 'react-native';



export default function navBar() {
    return (
        <SafeAreaView style= {styles.nav}>
         <Image
  source={require("../../assets/images/image_edfa7c53.png")}
  style={{width: 80, height: 40, resizeMode: 'contain', marginTop: 15, marginLeft: 10, borderRadius: 300}}
/>
            <View style= {styles.icons}>
                
        <Feather name="shopping-cart" size={24} color="black" />
        <Octicons name="person" size={24} color="black" />
        <Ionicons name="reorder-two-outline" size={24} color="black" />
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    nav: {
        justifyContent:'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
        height:150
       
    },

    img: {
    
        width: 80,
        height: 40,
        resizeMode: 'contain',
        marginTop: 15,
        marginLeft: 10,
        borderRadius: 300,
        
    },

    icons: {
        flexDirection: 'row',

        gap: 40,
        marginRight: 9
    }
})