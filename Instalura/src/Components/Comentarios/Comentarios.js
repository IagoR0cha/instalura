import React, { useState } from 'react';
import { Text, FlatList, View, TextInput, Image, TouchableOpacity } from 'react-native';

import estilo from '../Comentarios/estilo';


const Comentarios = ({ comentarios, adicionaComentario, fotoId }) => {

    const [estComentario, setComentario] = useState(comentarios);

    const comentar = () => {
        const novoComentario = adicionaComentario(conteudoCampoInput, 'iagor0cha', fotoId);
        setComentario([ ...estComentario, novoComentario ]);
        campoInput.clear();
    }

    let conteudoCampoInput = '';
    let campoInput;

    return (
        <View style={estilo.comentarios} >
            <FlatList
                data={estComentario}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Text>{item.userName}: {item.text}</Text>
                )}
            >
            </FlatList>
            <View style={estilo.mesmaLinha}>
                <TextInput 
                    ref={TextInput => campoInput = TextInput}
                    onChangeText={texto => conteudoCampoInput = texto}
                    placeholder={'Deixa seu comentário...'}
                    style={{flex:1}}
                />
                <TouchableOpacity onPress={comentar} >
                    <Image style={estilo.imgSend} source={require('../../../res/img/send.png')} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Comentarios;