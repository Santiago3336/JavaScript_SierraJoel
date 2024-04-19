//Definimos la clase A
class A {
    //Constructor de la clase A que acepta un parametro 'value'
    constructor(value){
        //Asignamos el valor del parametro 'value' a la propiedad 'value' de la insancia
        this.value = value;
    }
} 

//Definimos la clase B que hereda de la clase A
class B extends A{
    //Constructor de la clase B, esta acepta losparametros 'value' y 'value2'
    constructor (value,value2){
        super(value);
        this.value2 = value2;
    }
}

//Definimos la clase C que hereda a la clase B
class C extends B {
    //Constructor que acepta los 3 parametros 'value', 'value2', 'value3'
    constructor(value, value2, value3){
        //llamar al constructor de la clase padre (B) con la propiedad 'super' y pasamos 'value' y 'value2'
        super(value, value2)
        this.value3 = value3;
    }
}

//Creamos una instancia de la clase C con los valores 'value1, 'value2', y 'value3'
let instance = new C('value1', 'value2', 'value3');

//Imprimimos por consola
console.log(instance.value);
console.log(instance.value2);
console.log(instance.value3);
