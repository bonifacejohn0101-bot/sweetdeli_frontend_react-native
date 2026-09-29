import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    welcome: {
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '100',
        backgroundColor: '#fff',
        height: '100%',
     
       

    },

    container: {
        backgroundColor: '#353945',
        padding: 15,

    
    },
    logo: {
        width: 80,
        height: 40,
        resizeMode: 'contain',
        marginTop: 15,
        marginLeft: 10,
        borderRadius: 300,
    },
    LogoText: {
        color: '#fff',
        fontSize: 28,
        fontFamily: 'Poppins_600SemiBold',
        marginTop: 10,
        marginLeft: 10,
        paddingBottom: 10,
    },
    description: {
        color: '#fff',
        fontSize: 16,
        marginTop: 10,
        marginLeft: 10,
        fontFamily: 'Poppins_400Regular',
    },

    body: {

       
        color: '#fff',
        marginTop: 10,
        
    },

    textInput: {
        backgroundColor: '#EDF2F7',
        padding: 20,
        width: 340,
        borderRadius: 5
    },

    formTitle: {
        fontFamily: 'Poppins_600Regular', 
        paddingTop: 25, 
        paddingBottom: 10
        
    },

    title: {
        fontSize: 35, fontFamily: 'Poppins_1000SemiBold', paddingTop: 15,
    },

    signButton: {
        alignItems: 'center',
        borderWidth: 2,
        padding: 10,
        marginEnd:2,
        borderRadius: 20,
        height: 45,
        backgroundColor: '#141416',
        
    },

    signtext: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },

    logoSocial: {
        flexDirection: 'row',
        gap: 20,
        justifyContent: 'center',
        paddingTop: 20
    },

    label: {
        alignSelf: 'center',
        
        
    },
     footer: {
        justifyContent: 'center',
        alignContent: 'space-between',
        letterSpacing: 1,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#F5F5F5',
        gap: 20,
       columnGap: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        
        
        
        
    },

    beta: {
        flexDirection: 'row',
        gap: 30,
        alignItems:'center',
        justifyContent: 'center',
        marginRight: 6,
         
       
        
        
       
       
    },

    frame: {
        flexDirection: 'row',
        columnGap: 10,
    }


});