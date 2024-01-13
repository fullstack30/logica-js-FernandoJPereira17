
function soma(a,b){
    
    if(a !== typeof 'string' && b !== typeof 'string'){
        console.log(a+b);
    }else{
        document.write("Parâmetros Invalidos!");
    }
    return a+b;
}

soma(10,20);
