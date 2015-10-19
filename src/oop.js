class Animal{
    constructor(speed){
        this.speed = speed;
    }
    run(){
        console.log('run: ' + this.speed);
    }
    static say(){
        console.log('Uuuuuuu');
    }
}

class Cat extends Animal{
    constructor(may,speed){
        super(speed);
        this.may = may;
    }
    sayMay(){
        console.log(`MAY: ${this.may}`);   
    }
    run(){
        console.log('i don`t want it!');
        super.run();
    }
    
}

let cat = new Cat('may may may', 5);
cat.run();
cat.sayMay();
Cat.say();