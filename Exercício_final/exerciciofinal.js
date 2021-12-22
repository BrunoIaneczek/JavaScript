function limpar(){
    document.getElementById('n').value = ''
}
function analisar(){
    let num = document.getElementById('n').value
    let tabela = document.getElementById('tabela')
    let resumo = document.getElementById('res')
    let numeros = []
    
    if (num < 1 || num > 100 || num.length == 0){
        alert('valor inválido')
    }else{
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado`
        tabela.appendChild(item)
        resumo.innerHTML=(num)

    }

} 
