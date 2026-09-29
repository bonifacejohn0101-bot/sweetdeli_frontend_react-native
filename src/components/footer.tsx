import { styles } from '@/styles/styles';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { StyleSheet, Text, View } from 'react-native';

const footerText = StyleSheet.create({
    text: {
        marginBottom: 5,
    },
});

export default function footer() {
    return(
        <View>
            <Text style= {[footerText.text, {marginLeft:58}]}>Sweetdeli</Text>
        <View  style= {styles.footer}>
            <View style= {styles.beta}>
                <View>
                <Text style={footerText.text}>contact</Text>
                <Text style={footerText.text}>sweetdeli@gmail.com</Text>
                <Text style={footerText.text}>+1-2345-6789</Text>
                <Text style={footerText.text}>123 Ava New-York USA</Text>
                <View style = {styles.frame}>
                <Entypo name="facebook" size={24} color="black" />
                <FontAwesome name="linkedin-square" size={24} color="black" />
                <FontAwesome name="twitter-square" size={24} color="black" />
                <FontAwesome5 name="instagram-square" size={24} color="black" />
                </View>
                <View>
                <Text style={footerText.text}>About</Text>
                <Text style={footerText.text}>Egestas vitae.</Text>
                <Text style={footerText.text}>Viverra lorem ac.</Text>
                <Text style={footerText.text}>Eget ac tellus.</Text>
                <Text style={footerText.text}>Vulputate proin.</Text>
                </View>
                </View>
                <View>
                <Text style={footerText.text}>
                    product
                </Text>
                <Text style={footerText.text}>Auctor volutpat.</Text>
                <Text style={footerText.text}>Fermentum turpis. </Text>
                <Text style={footerText.text}>Mi consequat.</Text>
                <Text style={footerText.text}>Amet venenatis.</Text>
                <Text style={footerText.text}>Convallis porttitor.</Text>
                </View>
            </View>

        </View>
        </View>
    )
}

