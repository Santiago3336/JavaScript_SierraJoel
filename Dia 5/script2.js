class rectangle {
    constructor(widht, height){
        this.widht = widht;
        this.height = height;
            
        }



area() {
    return this.widht * this.height;
}

perimeter() {
    return 2 * (this.widht + this.height);
}
}

let Rectangle = new rectangle(5, 10);

console.log("Area: " + Rectangle.area());
console.log("Perimeter: " + Rectangle.perimeter());