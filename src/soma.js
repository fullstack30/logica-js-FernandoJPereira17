
function soma(a,b){
   
    if(a == Number || b == Number){
        return a + b;
    }
    if (a != Number || b != Number){
        return("Parâmetros Invalidos!");
    }
}
soma(10, 10);