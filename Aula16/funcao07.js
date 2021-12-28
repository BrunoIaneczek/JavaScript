function maiorvalor(vetor){
    let maior = 0
    for (let item in vetor){
        if (vetor[item]>maior){
            maior=vetor[item]
            
        }
    }return maior
}

valores = [12,34,3,55,7,88,1,99,1234]

console.log(maiorvalor(valores))




