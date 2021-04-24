import React, {Fragment, useState, useEffect} from 'react';
import { FlatList, ScrollView, StatusBar, Platform, View } from 'react-native';

import { Cabecalho } from '../../Components/Cabecalho';
import { Foto } from '../../Components/Foto';
import { Comentarios } from '../../Components/Comentarios';

import lerFotos from '../../api/feed';
import { curtirFoto, imgLike } from '../../api/curtidas';
import { adicionaComentario } from '../../api/comentario';


const Feed = () => {
  const [fotos, setFotos] = useState([]);
  
  useEffect(() => {
    lerFotos(setFotos);
  },[])

  let marginValue = 0;


  return (
    <View style={{marginTop: marginValue}}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
      />
      <FlatList
        data={fotos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <Fragment>
            <Cabecalho
                nomeUsuario={item.userName}
                urlImagem={item.userURL}
            />
            <Foto
                urlFoto={item.userURL} 
                descricao={item.description}
                qtdLikes={item.likes}
                curtirFoto={curtirFoto}
                imgLike={imgLike}
            />
            <Comentarios
                comentarios={item.comentarios}
                adicionaComentario={adicionaComentario}
                fotoId={item.id}
            />
          </Fragment>
        )}
      />
    </View>
  );
};

Feed.navigationOptions = ({ navigation }) => {
  const opcoes = {
    title: navigation.getParam('nome')
  }
}

export default Feed;
