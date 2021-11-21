function contar(){
    var inicio =  document.getElementById('numeroinicial').value
    var fim = document.getElementById('numerofinal').value
    var passo = document.getElementById('passo').value
    var res = document.getElementById('res')
    var i = parseInt(inicio)
    var f = parseInt(fim)
    var p = parseInt(passo)
    
    
    for(i; i <= f; i+=p){
        res.innerHTML = `calhorada`
        
    }
    
}

