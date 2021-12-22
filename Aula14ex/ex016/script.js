function contar(){
    var inicio =  document.getElementById('numeroinicial')
    var fim = document.getElementById('numerofinal')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('FALTAM DADOS!')
    }else{
        res.innerHTML = 'Contando... <br>'//quebra de linha em inerhtml
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido, considerando o valor como 1')
            p = 1   
        }
        if (i > f) {
            //contagem regressiva
            for(let c = i; c >= f; c-=p){
                res.innerHTML += ` ${c}`
            }
        }else{
            //contagem crescente
            for(let c = i; c <= f; c+=p){
                res.innerHTML += `      ${c} \u{1F537}`
            }
        }
        
        
    }   res.innerHTML += `\u{1F3C1}`
    
}

