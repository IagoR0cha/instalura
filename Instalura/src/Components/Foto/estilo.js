import { StyleSheet, Dimensions } from 'react-native';

const largura = Dimensions.get('screen').width;

const estilo = StyleSheet.create({
    imagem: {
      width: largura,
      height: largura,
    },

    like: {
      width: 40,
      height: 40,
      marginHorizontal: 10,
      marginTop: 10,
      marginBottom: 5
    },
    
    viewLike: {
      flexDirection: 'row',
      alignItems: 'center'
    },

    descricao:{
      marginStart: 12,
      marginBottom: 5
    },

  });

export default estilo;