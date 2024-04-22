//Definimos la clase
class person {
    constructor(name,age,country){
        this.name = name;
        this.age = age;
        this.country = country;
    }
    //Hacemos la funcion para el display de la informacion de las personas
    displayDetails() {
        return "Name: " + this.name + " Age: " + this.age + " Country: " + this.country;
    }
}

//Creamos las 2 instancias de la clase person
let person1 = new person("Santiago Leon", 18, "Colombia");
let person2 = new person("Fabio Moreno", 18, "Colombia" );

//Ejecutamos la funcion mostrando los detalles de las personas
console.log(person1.displayDetails());
console.log(person2.displayDetails());