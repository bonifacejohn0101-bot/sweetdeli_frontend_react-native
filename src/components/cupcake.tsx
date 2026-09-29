import {View,Text,Pressable,StyleSheet,Image} from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function cupcake(){
    return(
        <View style = {{}}>
        <Pressable style={{  padding: 15, borderRadius: 100, borderWidth: 3, borderColor: 'black', width: 90, height: 90, }}><MaterialCommunityIcons name="cupcake" size={50} color="black" /></Pressable>
        <Text style={{  fontWeight: 'bold', marginLeft: 15, paddingTop: 10 }}>Cupcake</Text>
        </View>
    )
}