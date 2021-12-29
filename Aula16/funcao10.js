function media(vetor){
    s=0
    for(let item in vetor){
        s+=vetor[item]
        media = s/vetor.length
    }return media
}
valores = [7,6,9,1,2]
console.log(media(valores))