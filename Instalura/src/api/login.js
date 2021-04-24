import { Platform } from "react-native";

const efetuarLogin = async (usuario, senha) => {
    let url = '10.0.2.2';
    if(Platform === 'ios') url = 'localhost';
    
    const resp = await fetch(`http://${url}:3030/users/login`,{
        method: 'post',
        body: JSON.stringify({
            userName: usuario,
            password: senha
        }),
        headers:{
            'Content-type': 'application/json'
        }
    });

    if(resp.ok){
        return resp.headers.get('x-access-token')
    }else{
        throw new Error('Não foi possível logar')
    }
}

export default efetuarLogin;