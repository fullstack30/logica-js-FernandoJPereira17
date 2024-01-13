
function soma(a,b){
    let a = parseInt(a);
    let b = parseInt (b);

    if(a !== isNaN || b !== isNaN){
        return a + b;
    }else{
        return("Parâmetros Invalidos!");
    }
}
soma(a,b);