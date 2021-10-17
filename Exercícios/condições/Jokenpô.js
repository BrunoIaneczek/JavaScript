(function(){
    const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
    const num = random(0,3)
    
    /* 0 - Papel
       1 - Pedra
       2 - Tesoura */

    var EscolhaJogador = 2
   
    console.log(num)
    
    if (num == jogadauser){
        console.log('Empate')
    }else if(num == 0 && jogadauser == 1)
        console.log('Jogador ganhou!')
        console.log()
})()

