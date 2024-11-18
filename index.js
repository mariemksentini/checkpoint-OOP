// L'encapsulation : The bundling of data (properties) and methods into a single unit (class), restricting direct access to some components using access modifiers (e.g., private, protected). This ensures better control and security of object states.

class Person {
    #name
    #age
    constructor(name, age) {
      this.#name = name
      this.#age = age
    }
  
    getName = () => console.log(this.#name)
    getAge=()=> console.log(this.#age)  
  
    setName=(a)=> this.#name = a 
    setAge=(a)=> this.#age = a  
  
}
  
var user = new Person("Hadir", 99)
  
// console.log(user.name)
user.getName()
user.getAge()
user.setName('Yesser')
user.getName()
user.setAge(9)
user.getAge()
  
  
function Person(name,age){
    let myName = name
    let myAge = age 
  
    this.getName=()=> console.log(myName)
    this.getAge=()=> console.log(myAge)
}
  
var user = new Person('Rania',22)

user.getName()
user.getAge()
  
//   L'héritage : A mechanism where one class (child) inherits properties and methods from another class (parent), enabling code reuse and the creation of hierarchical relationships.
  
class Animal{
    name
    age
  
    constructor(name,age){
      this.name = name
      this.age = age
    }
  
    makeSound=()=> console.log('grrrrr')
}
  
class Dog extends Animal{
    pattes
  
    constructor(name,age,pattes){
      super(name,age)
  
      this.pattes = pattes
    }
}
  
var kalb = new Dog('Hamdi',10,900)
  
  
  
kalb.makeSound()

// Polymorphisme
// The ability of different classes to be treated as instances of the same parent class. Methods with the same name can behave differently depending on the context or object.
  
class Vehicule{
    pneu
    puissance
  
    constructor(pneu,puissance){
      this.pneu = pneu
      this.puissance = puissance
    }
  
    vehiculeSound=()=> console.log("vromvrom")
}
  
class car extends Vehicule{
    toit
  
    constructor(pneu,puissance,toit){
      super(pneu,puissance)
      this.toit = toit
    }
  
    vehiculeSound=()=> console.log('vinvin')
}
  
class Lorry extends Vehicule{
  
    quantity
  
    constructor(pneu,puissance,quantity){
      super(pneu,puissance)
      this.quantity = quantity
    }
    
}
  
var karhba = new car(3,4,true)

var kamyoun = new Lorry(4,9,70)

karhba.vehiculeSound()
kamyoun.vehiculeSound()
  
  
//   Protoype 
// In JavaScript, objects inherit properties and methods from their prototype. A prototype is an object that serves as a blueprint for creating other objects. 
  
class Person{
  name
  age
  
  constructor(name,age){
    this.name = name
    this.age = age
  }
}
  
Person.prototype.Saluer = function(){
    console.log(`Hello my name is ${this.name} and i am ${this.age}`)
}
  
var user = new Person('Rahme',22)
user.Saluer()