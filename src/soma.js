
function soma(a,b){
    
    if(a !== typeof 'string' && b !== typeof 'string'){
        console.log(a+b);
    }else{
        document.write("Parâmetros Invalidos!");
    }
}

soma(10,20);
