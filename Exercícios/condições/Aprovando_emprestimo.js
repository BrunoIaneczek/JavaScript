var valorCasa = 300000
var salario = 3000
var anosparaPagamento = 30

var meses = anosparaPagamento * 12
var valorParcela = valorCasa/meses


if (valorParcela > (salario*30)/100){
    console.log('Emprestimo negado')

}else{
    console.log(`Seu empréstimo foi aprovado! sendo o valor da casa
    de ${valorCasa} para pagamento em ${anosparaPagamento} anos e o valor da pardela de ${valorParcela}R$`)
}
