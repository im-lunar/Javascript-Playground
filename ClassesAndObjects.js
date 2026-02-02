class Animal {
    constructor(name, legCount, speaks) {
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    //Static functions are the functions that are not associated with any object, it is associated with the class itself.
    static myType() {
        return "Animal";
    }

    speak() {
        console.log("Hi there", this.speaks)
    }
}

let dog = new Animal("Dog", 4, "Bhow Bhow");
dog.speak();

console.log(Animal.myType());   // Correct way to call static method (on the class)
console.log(dog.myType());  // This will give an error because static methods cannot be called on instances(objects).

