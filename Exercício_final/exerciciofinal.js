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


}
function finalizar(){
    res.innerHTML = `Ao todo foram cadastrados ${valores.length} números <br>
    O maior valor informado foi ${maiorvalor(valores)} <br>
    O menor valor informado foi ${menorvalor(valores)}<br>
    A soma de todos valores informados é ${somatotal(valores)}<br>
    A média dos valores é ${media(valores)}<br>
    ${valores}`
    
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

function media(vetor){
    s=0
    for(let pos
         in vetor){
        s+=vetor[pos
        ]
        media = s/vetor.length
    }return media
}

