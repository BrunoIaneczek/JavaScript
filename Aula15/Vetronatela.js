/* METODO PADRÃO (PERCURSOR) */
let valores = [13,14,17,2,34,199,445]
for (pos = 0; pos < valores.length; pos++){
    console.log(valores[pos])
}

/*MODO SIMPLIFICADO */
for (let pos in valores){
    console.log(valores[pos])
}

/* BUSCANDO VALORES */
let position =  valores.indexOf(17)
if (position == -1){
    console.log(`Valor não encontrado!`)
}else{
    console.log(`O valor 199 se encontra na posição ${position}`)
}

