var Ano = new Date()
var AnoAtual = Ano.getUTCFullYear()
/*console.log(AnoAtual)*/
var AnodeNascimentodoAtleta = 1994
var IdadedoAtleta = AnoAtual - AnodeNascimentodoAtleta

if (IdadedoAtleta < 9){
    console.log(`A idade do atleta é de ${IdadedoAtleta}, sua categoria
    é  Mirim`)
}else if(IdadedoAtleta <= 14){
    console.log(`A idade do atleta é de ${IdadedoAtleta}, sua categoria
    é Infatil`)
}else if(IdadedoAtleta <= 19){
    console.log(`A idade do atleta é de ${IdadedoAtleta}, sua categoria
    é Junior`)
}else if(IdadedoAtleta <= 25){
    console.log(`A idade do atleta é de ${IdadedoAtleta}, sua categoria
    é Sênior`)
}else{
    console.log(`A idade do atleta é de ${IdadedoAtleta}, sua categoria
    é Master`)
}