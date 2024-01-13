
function soma(a,b){
    a = parseInt(a);
    b = parseInt (b);

    if(a == Number || b == Number){
        return a + b;
    }
    if (a != Number || b != Number){
        return("Parâmetros Invalidos!");
    }
}
soma(a,b);