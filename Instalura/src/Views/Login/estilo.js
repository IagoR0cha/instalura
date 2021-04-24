import { StyleSheet, Dimensions } from 'react-native';

const largura = Dimensions.get('screen').width;
const altura = Dimensions.get('window').height;

const estilo = StyleSheet.create({

    container: {
        flexGrow: 2,
        alignItems: 'center',
        justifyContent: "center"
    },

    inputs: {
        width: largura*0.8,
        textAlign: 'center',
        fontSize: 25,
        marginTop: 40
    },  

    styleButton:{
        marginHorizontal: 15,
        marginBottom: 50
    },
    
    alturaTela:{
        height: '100%',
    }

});

export default estilo;