// ** FUNCION SIN RETORNO Y SIN PARAMETROS **
function funcionNormal(){
    console.log("Mi función");
}

// ** FUNCION SIN RETORNO Y CON PARAMETROS **
function suma(a,b){
    console.log(a+b);
}
// ** FUNCION CON RETORNO Y CON PARAMETROS **
function sumaR(a,b){
    //console.log(a+b);
    return a+b;
}
// ** FUNCION CON RETORNO Y SIN PARAMETROS **
function salonFavorito(){
    //console.log(a+b);
    return "P1";
}

// ******************* BUCLE FOR ***************************
for (i=0;i<=10;i+1){
    console.log(i);
}

arreglo=[123, "pedro", true]
console.log(arreglo.length);

tamano=arreglo.length;

for (let i=0; i<tamano;i++){
    console.log(arreglo[i])
}

suma(50,7)
console.log(sumaR(5,8)+ sumaR(5,12))



function convertir(c){
    let F = 32 + (9 * c / 5)
    console.log(F)
}





