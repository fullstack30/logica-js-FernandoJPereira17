
function soma(a,b){

    var a=10;
    var b=10;

    if(a !== isNaN || b !== isNaN){
        console.log(a+b);
    }else{
        console.log("Parâmetros Invalidos!");
    }

    return a+b;
}

soma(10,10);

