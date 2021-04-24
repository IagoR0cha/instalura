import React, {Fragment, useState} from 'react';
import { View, Text, TextInput, Button, Platform } from 'react-native';
import AsyncStorange from '@react-native-community/async-storage';

import estilo from './estilo';
import efetuarLogin from '../../api/login';

const Login = ({ navigation }) => {

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');

    const tentarLogar = async () => {
        try{
            const token = await efetuarLogin(usuario, senha);
            await AsyncStorange.setItem('instalura_token', token);
            
            navigation.replace('Feed', { nome: usuario });
        }catch(err){
            setMensagemErro(err.message)
        }
    }

  return (
    <View style={estilo.alturaTela}>
        <View style={estilo.container}>
            <TextInput 
                placeholder="Usuario"
                style={estilo.inputs}
                underlineColorAndroid='#1e90ff'
                onChangeText={usuarioText => setUsuario(usuarioText)}
            />
            <TextInput 
                placeholder="Senha"
                style={estilo.inputs}
                secureTextEntry={true}
                underlineColorAndroid='#1e90ff'
                onChangeText={senhaText => setSenha(senhaText)}
            />
            <Text >{mensagemErro}</Text>
        </View>
        <View style={estilo.styleButton}>
        <Button 
            title="Entrar"
            onPress={tentarLogar}
        />
        </View>
    </View>
  );
};

Login.navigationOptions = () => {
    const opcoes = {
        title: 'Login'
    }

    return opcoes;
}


export default Login;
