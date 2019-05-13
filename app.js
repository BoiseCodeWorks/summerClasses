//class keyword indicates the creation of a new object type
//Class names will always be capitalized
class Car {
    constructor(make, model, trim, carSound) {
        //any properties that you wan on all instances of the class 
        // must be defined in the constructor

        // 'this' is a reference to whatever is left of the '.' at call time
        this.wheels = 4
        this.make = make
        this.model = model + '-' + trim
        this.carSound = carSound
    }
    // Any 'methods' created on a class outside of the constructor, 
    //  can be called as a prototype of the class
    start() {
        //when refrencing members of the class
        // you must always use the 'this' keyword
        console.log(this.carSound)
    }

    fireGuns() {
        console.log("pew pew")
    }
}



//instation of the class (creates a new instance of an object of type 'Car')
//must use the 'new' keyword when creating an instance of an object
let batmobile = new Car('Wayne Enterprises', 'BM347', 'e2', 'BRROOOOOOOOOOOOOOOMMMMMMM')
let jokermobile = new Car('Acme Inc', 'Questionable', 'jkr', 'PUTTER PUTTER PUTTTTTT')

batmobile.wheels = 6;
console.log("Joker:", jokermobile.model)
jokermobile.start()
console.log("Batman:", batmobile.model)
batmobile.start()

//extending a class is ok, and done so using the 'prototype' keyword
// Car.prototype.fireGuns = function () {
//     console.log("pew pew")
// }
batmobile.fireGuns();


class Target {
    constructor(name, health, slapDamage, punchDamage, kickDamage) {
        this.name = name;
        this.health = health;
        this.attacks = {
            slap: slapDamage,
            punch: punchDamage,
            kick: kickDamage
        };
        //alert("CREATING Target")
    }


    attack(type) {
        this.health -= this.attacks[type]
    }
}

let targets = [
    new Target('Joker', 100, 1, 5, 10),
    new Target('Scarecrow', 110, 2, 6, 11)
]


console.log(targets)
targets[0].attack('kick')
targets[1].attack('punch')




// when I add a item to my target, it should take more or less damage for each attack

// kick = 10 damage
// punch = 5 damage
// slap = 1 damage

//shield = reduces damage by 2
//crows = increases damage by 3

//on an attack if the punch option is chosen, and the target has a shield 
//  total damage should be 3

//on an attack if the punch option is chosen, and the target has crows
//  total damage should be 8

//on an attack if the punch option is chosen, and the target has crows and shield
//  total damage should be 6




// reset all buttons on the page to disabled = false
// let buttons = document.getElementsByTagName('button')
// for (let i = 0; i < buttons.length; i++) {
//     const button = buttons[i];
//     button.setAttribute('disabled', false)
// }