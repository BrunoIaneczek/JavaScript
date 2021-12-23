let num = document.getElementById('n')
let tabela = document.getElementById('tabela')
let res = document.getElementById('res')
let valores = [2,3,4]

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
    }


}res.innerHTML = `${valores.length}`
