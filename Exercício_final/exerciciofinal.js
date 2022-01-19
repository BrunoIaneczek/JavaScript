let num = document.getElementById('n')
let tabela = document.getElementById('tabela')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else {
        return false
    }
}

function inLista(n,vetor){
    if(vetor.indexOf(Number(n))!=-1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option' )
        item.text = `Valor ${num.value} adicionado`
        tabela.appendChild(item)
        res.innerHTML = ''
        
        
    }else{
         alert('Valor já adicionado ou inválido')      
    }
    num.value = ''
    num.focus()


}
function finalizar(){
    if (valores.length > 0){
     res.innerHTML =''
     res.innerHTML +=`<p>Ao todo temos ${valores.length}</p>`
     res.innerHTML +=`<p>O maior valor informado é ${maiorvalor(valores)}</p>`
     res.innerHTML +=`<p>O menor valor informado foi ${menorvalor(valores)}</p>`
     res.innerHTML +=`<p>Somando todos os valores temos, ${somatotal(valores)}</p>`
     res.innerHTML +=`<p>A média dos valores é ${somatotal(valores)/valores.length} </p>`

        
    }else{
        alert(`Adicione valores`)
    }
    
    
}
function maiorvalor(vetor){
    let maior = 0
    for (let pos in vetor){
        if (vetor[pos]>maior){
            maior=vetor[pos]
            
        }
    }return maior
}
function menorvalor(vetor){
    let maior = 0
    for (let pos in vetor){
        if (vetor[pos]>maior){
            maior=vetor[pos]  
        }
    }
    let menor = maior
    for(let pos
         in vetor){
        if (vetor[pos
        ] < menor){
            menor = vetor[pos
            ]
        }
    }return menor
}
function somatotal(vetor){
    s=0
    for(let pos
         in vetor){
        s+=vetor[pos]
       
}return s   
}




