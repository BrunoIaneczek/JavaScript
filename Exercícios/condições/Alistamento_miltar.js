var DataAtual = new Date()
var AnodeNascimentodoJovem = 2004
var AnoAtual = DataAtual.getFullYear()
var IdadedoJovem = AnoAtual - AnodeNascimentodoJovem

if (IdadedoJovem < 18){
    var TempoqueFaltaparaAlistamento = 18 - IdadedoJovem
    console.log(`Ainda não é hora de se alistar, você tem ${IdadedoJovem}
    e falta ${TempoqueFaltaparaAlistamento} anos para se alistar.`)
}else if(IdadedoJovem == 18){
    console.log(`Você tem ${IdadedoJovem} está na hora de se alistar!`)
}else{
    var TempoquePassouparaAlistamento = IdadedoJovem - 18
    console.log(`Você tem ${IdadedoJovem} e já deveria ter se alistado
    há ${TempoquePassouparaAlistamento} anos.`)
}


