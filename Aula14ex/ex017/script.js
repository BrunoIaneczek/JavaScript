function gerador(){
    var numero = document.getElementById('numero')
    var tab = document.getElementById('seltab')
    
    
    if(numero.value.length == 0){
        window.alert('erro! Digite o numero')
    }else{
        let n = Number(numero.value)
        tab.innerHTML =''
        for(let c = 1; c <= 10;c++){
            resultado = n*c
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${resultado}`
            tab.appendChild(item)
        }
    }
}