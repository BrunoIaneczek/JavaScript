function menorvalor(vetor){
    let maior = 0
    for (let item in vetor){
        if (vetor[item]>maior){
            maior=vetor[item]  
        }
    }
    let menor = maior
    for(let item in vetor){
        if (vetor[item] < menor){
            menor = vetor[item]
        }
    }return menor
}

valores = [12,34,2,55,7,88,7,99,1234]
console.log(menorvalor(valores))