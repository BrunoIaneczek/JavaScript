var Peso = 70
var AlturadaPessoa = 1.70
var IMC = Peso/(AlturadaPessoa*AlturadaPessoa)

/*console.log(IMC)*/

if (IMC < 18.5){
    console.log(`Seu IMC é de ${IMC},abaixo do peso.`)
}else if (IMC <= 25){
    console.log(`Seu IMC é de ${IMC}, peso ideal.`)
}else if (IMC <= 30){
    console.log(`Seu IMC é de ${IMC}, sobrepeso.`)
}else if (IMC <= 40){
    console.log(`Seu IMC é de ${IMC}, obesidade.`)
}else{
    console.log(`Seu IMC é de ${IMC}, obesidade mórbida.`)
}