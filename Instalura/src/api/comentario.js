const adicionaComentario = ( comentario, usuario, fotoId ) => {
    const novoComentario = {
        date: Date.now(),
        text: comentario,
        userName: usuario
    }

    // fetch(`/photos/${fotoId}/comments`, {
    //     method: 'post',
    //     body: novoComentario.text
    // })
    // .then(res => res.json()).then(resp => console.warn(resp))
    // .catch(err => console.warn(err))
    // return novoComentario;
}

export {adicionaComentario};