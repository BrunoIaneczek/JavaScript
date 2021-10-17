var PrecoOriginal = 100

/* 0 - A vista dinheiro/cheque: 10% desconto*/
var DescontoAvistaDinheiroCheque = (PrecoOriginal*10)/100

/* 1 - A vista cartão: 5% desconto*/
var DescontoAvistaCartao = (PrecoOriginal*5)/100

/*2 - Até 2 vezes no cartão: Preço original*/

/*3 - 3 x ou mais no cartão: 20% juros */
var Acrescimo3xouMaisnoCArtao = (PrecoOriginal*20)/100 

var CondicaodePagamento = 3

if (CondicaodePagamento == 0){
    console.log(`Para está condição você teve o desconto de R$${DescontoAvistaDinheiroCheque}, você irá pagar o valor de R$${PrecoOriginal-DescontoAvistaDinheiroCheque}`)
}else if( CondicaodePagamento == 1){
    console.log(`Para está condição você teve o desconto de R$${DescontoAvistaCartao}, você irá pagar R$${PrecoOriginal-DescontoAvistaCartao}.`)
}else if(CondicaodePagamento == 2){
    console.log(`Para está condição você não tem desconto.`)
}else{
    console.log(`Para está condição você terá o acréscimo de R$${Acrescimo3xouMaisnoCArtao}, você irá pagar o total de R$${PrecoOriginal+Acrescimo3xouMaisnoCArtao}.`)
}
