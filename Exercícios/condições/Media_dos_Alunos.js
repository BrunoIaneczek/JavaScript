var Nota1 = 7
var Nota2 = 5
var Media = (Nota1+Nota2)/2

if (Media < 5){
    console.log(`Sua média foi de ${Media}, você esta reprovado!`)
}else if ( Media < 6.9){
    console.log(`Sua média foi de ${Media}, você está em recuperação!`)
}else{
    console.log(`A sua média foi de ${Media}, você está aprovado!`)
}
