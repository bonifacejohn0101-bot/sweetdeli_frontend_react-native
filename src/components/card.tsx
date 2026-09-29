import {View,Text,Pressable,StyleSheet} from 'react-native'

export default function card(){
    return(
        <View style = {{borderWidth: 0.3,maxWidth:250, }}>
            <View style = {{display: 'flex',height: 200,width: 250, backgroundColor: 'grey',borderTopEndRadius:10, borderTopStartRadius:10}}></View>
            <View style = {{flexDirection: 'row', alignItems: 'center',gap: 40,marginTop: 10, paddingHorizontal: 10, marginBottom: 5}}>
            <Text style ={{width: 150, alignItems: 'center', }}><Text style ={{fontWeight: 'bold' }}>Neque volutpat .</Text></Text>
            <Pressable><Text style ={{borderWidth: 1, padding: 6,borderRadius:5,marginRight: 100 }}>$20</Text></Pressable>
            </View>
            <Text>Et blandit non sit ac egestas risus non.</Text>
            <Pressable style={{ backgroundColor: 'black', padding: 10, borderRadius: 29, width: '80%',justifyContent: 'center', marginLeft: 20, marginVertical: 10 }}><Text style={{ color: 'white',marginLeft: 46,fontWeight: 'bold', fontSize: 14  }}>Order Now</Text></Pressable>
        </View>
    )
}