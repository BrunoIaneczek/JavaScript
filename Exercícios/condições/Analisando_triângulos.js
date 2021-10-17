var Lado1 = 6
var Lado2 = 6
var Lado3 = 6

if ( Lado1 != Lado2 && Lado1 != Lado3){
    console.log('Triângulo escaleno')
}else if (Lado1 == Lado2 && Lado1 == Lado3){
    console.log('Triângulo equilátero ')
}else{
    console.log('Triângulo isósceles')
}