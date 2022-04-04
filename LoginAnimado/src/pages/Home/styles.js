import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    input: {
        fontFamily:'RussoOne_400Regular',
        paddingHorizontal: 10,
        fontSize: 13,
        width:'90%',
    },
    inputArea: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems:'center',
        width:'98%',
        backgroundColor: '#FFF',
        elevation: 2,
        paddingHorizontal: 10,
        height: 37,
        borderRadius:10, 
    },
    header: {
        paddingHorizontal: 15,
        
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        marginVertical:20,
    },
    btnSubmit:{
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#359',
        width: '90%',
        height: 40,
    },
    submitText:{
        color:'#FFF'
    }

});
export default styles;