import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#CCCC'
    },
    containerLogo: {
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%',
        paddingBottom: 50,
    
    },
    btnSubmit: {
        backgroundColor: '#359',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        borderRadius: 15,

    },
    submitText: {
        color: '#FFF',
        fontSize: 18,
    },
    inputArea:{
        flexDirection: 'row',
        alignItems:'center',
        width:'98%',
        elevation: 2,
        paddingHorizontal: 10,
        height: 40,
        backgroundColor:'#FFF',
        
    },
    inputPass:{
        flexDirection: 'row',
        alignItems:'center',
        width:'98%',
        elevation: 2,
        paddingHorizontal: 10,
        height: 40,
        backgroundColor:'#FFF',
        marginTop:'9%',
    },
    iconPass:{
        paddingRight: 10,
        
    },
    iconLogin:{
        paddingRight: 6,
        
    }


})

export default styles;


