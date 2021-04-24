const imgLike = temCurtida => {
    if(!temCurtida){
      return require("../../res/img/s2.png");
    }else{
      return require("../../res/img/s2-checked.png");
    }
  }

const curtirFoto = (curtiu, likes) => {
    let qtd = likes;
    if(curtiu){
        qtd--;
    }else{
        qtd++;
    }

    return [!curtiu, qtd];
}

export { imgLike, curtirFoto };