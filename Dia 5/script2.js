//Definir la clase rectangle
class rectangle {
    constructor(widht, height){
        this.widht = widht;
        this.height = height;
            
        }


//Calcular el area
area() {
    return this.widht * this.height;
}

//Calcular el perimetro
perimeter() {
    return 2 * (this.widht + this.height);
}
}

//Creacion de la instancia para la clase rectangle
let Rectangle = new rectangle(5, 10);

//Calcular y mostrar el Area y el perimetro
console.log("Area: " + Rectangle.area());
console.log("Perimeter: " + Rectangle.perimeter());