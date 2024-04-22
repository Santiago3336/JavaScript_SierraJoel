//Definimos la clase
class vehicle {
    constructor(make,model,year){
    
        this.make = make;
        this.model = model;
        this.year = year;

    }
    //Funcion metodo para mostrar los details
    displayDetails(){
        return "Make: " + this.make + " Model: " + this.model + " Year: " + this.year;
    }

}

//Definimos la subclase
class car extends vehicle {
    constructor(make,model,year,doors){
        super(make,model,year);
        this.doors = doors;
    
    }
    //Funcion metodo para mostrar details con la nueva propiedad
    displayDetails(){
        return "Make: " + this.make + " Model: " + this.model + " Year: " + this.year + " Doors: " + this.doors;

    }
}

//Instancia
let Car = new car("Mazda", "3", 2021, 4)
//Mostramos los details
console.log(Car.displayDetails());