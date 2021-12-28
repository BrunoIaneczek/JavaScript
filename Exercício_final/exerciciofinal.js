let num = document.getElementById('n')
let tabela = document.getElementById('tabela')
let res = document.getElementById('res')
let valores = []

function limpar(){
    document.getElementById('n').value = ''
}
 
function analisar(){
   
    if (num.value< 1 || num.value> 100 || num.value.length == 0){
        alert('valor inválido')
    }else{
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        tabela.appendChild(item)
        valores.push(num.value)        
    }


}function finalizar(){
    let totalnumeros = valores.length
}
function maiorvalor(vetor){
    let maior = 0
    for (let item in vetor){
        if (vetor[item]>maior){
            maior=vetor[item]
            
        }
    }return maior
}
function menorvalor(vetor){
    let menor = 0
    for(let item in vetor){
        if (vetor[item]<menor){
            menor = vetor[item]
        }
    }return menor
}
