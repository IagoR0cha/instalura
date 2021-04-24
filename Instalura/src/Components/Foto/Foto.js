import React, {Fragment, useState} from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import estilo from './estilo';

const Foto = ({ 
    urlFoto,
    descricao,
    qtdLikes,
    curtirFoto,
    imgLike
  }) => {

  const [curtiu, setCurtiu] = useState(false);
  const [likes, setLikes] = useState(qtdLikes);

  const clicouCurtir = () => {
    const [novoEstadoCurtiu, qtd ] = curtirFoto(curtiu, likes);
    setLikes(qtd);
    setCurtiu(novoEstadoCurtiu);
  }

  return (
    <Fragment>
      <Image
          source={{uri: urlFoto}}
          style={estilo.imagem}
      />
      <View style={estilo.viewLike}>
        <TouchableOpacity onPress={clicouCurtir}>
          <Image source={imgLike(curtiu)} 
            style={estilo.like}
            />
        </TouchableOpacity>
        <Text>Curtidas: {likes}</Text>
      </View>

      <Text style={estilo.descricao} >{descricao}</Text>

    </Fragment>
    );
};

export default Foto;
