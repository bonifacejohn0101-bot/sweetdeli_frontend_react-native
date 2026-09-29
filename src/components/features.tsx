import {View,Text,Pressable,StyleSheet,Image} from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function features(){
    return(
        <View style = {{gap: 20, paddingHorizontal: 20,justifyContent: 'center', alignItems: 'center', paddingBottom: 30,width: 100, }}>
            <FontAwesome name="cutlery" size={50} color="black" />
            <Text style={{ fontSize: 17,}}>Donec vitae.</Text>
            <Text style={{width: 180, textAlign: 'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc vestibulum ect</Text>
        </View>
    )
}