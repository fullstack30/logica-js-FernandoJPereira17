
function soma(a,b){
    
    if (a !== typeof 'string' && b !== typeof 'string'){
        return soma(a,b);
    }else {
        console.log("Parâmetros Inválidos");    
    }
}

soma(10,20);
