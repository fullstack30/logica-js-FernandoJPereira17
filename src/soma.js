
function soma(a,b){
    a = parseInt(a);
    b = parseInt (b);

    if(a !== isNaN || b !== isNaN){
        return a + b;
    }else{
        return("Parâmetros Invalidos!");
    }
}
soma(a,b);