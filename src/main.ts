import './style.css'
console.log('ok')
/*import { Animal } from './features/animal/Animal.ts'

import { Tiger } from './features/animal/specificAnimal/Tiger.ts'
import { Zebra } from './features/animal/specificAnimal/Zebra.ts'
import { Elephant } from './features/animal/specificAnimal/Elephant.ts'

const animal=new Animal("Monkey",5)
    
    animal.makeSound()
    console.log(animal);
const tiger=new Tiger('Kisa',8,true)
tiger.makeSound()
tiger.swim()
tiger.hunt()
console.log(tiger)

const zebra=new Zebra('Ziaba',3,'50 km/h','strips')
zebra.jump()
zebra.run()
zebra.makeSound()
console.log(zebra)

const elephant=new Elephant('Tonna',3,1000)
elephant.makeSound()
elephant.sleep()
elephant.walk()
console.log(elephant)

import { Zookeeper } from './features/emploee/Employee.ts'

const zookeeper=new Zookeeper('12/12/2023',true);
zookeeper.enterZoo() 
    //console.log("Employee is at Zoo");
  
  zookeeper.leaveZoo() 
    //console.log("Employee is out of Zoo");
    console.log(zookeeper)
   zookeeper. getEmploeeStatus() 
       {} //return zookeeper.isEmployeeAtZoo
    zookeeper.feedAnimals()*/

    import { Zebra } from "./features/animal/specificAnimal/Zebra";
import { Elephant } from "./features/animal/specificAnimal/Elephant";
import { Tiger } from "./features/animal/specificAnimal/Tiger";
import { Zookeeper } from "./features/employee/Zookeeper.ts";
import { printAnimalCards } from "./features/submit_and_display/printAnimalCards";
import { printZookeeperCards } from "./features/submit_and_display/printEmployeeCards";
import { submitFormByAnimal } from "./features/submit_and_display/submitAnimal";
import { submitFormByEmployee } from "./features/submit_and_display/submitEmployee";
import { animalFormSubmit } from "./features/submit_and_display/submitAnimal";
import { employeeFormSubmit } from "./features/submit_and_display/submitEmployee";

const zookeeperSubmitButton = document.getElementById('zookeeperSubmitButton') as HTMLButtonElement
const animalSubmitButton = document.getElementById('animalSubmitButton') as HTMLButtonElement
//const zookeeperGenderSelect = document.getElementById('zookeeperGenderSelect') as HTMLSelectElement
const animalCards = document.getElementById('animalCards') as HTMLSpanElement
const zookeeperCards = document.getElementById('zookeeperCards') as HTMLSpanElement
const animalSelect = document.getElementById('animalSelect') as HTMLSelectElement


animalSelect.addEventListener("change", submitFormByAnimal)
//zookeeperGenderSelect.addEventListener("change", submitFormByEmployee)
animalCards.addEventListener('click', printAnimalCards)
zookeeperCards.addEventListener('click', printZookeeperCards)
animalSubmitButton.addEventListener("click", animalFormSubmit)
zookeeperSubmitButton.addEventListener("click", employeeFormSubmit)

const zebra1 = new Zebra({name: "svajunas", age: 2, maxSpeed: 20, origin: "africa"})
const elephant1 = new Elephant({name: "Gytis", age: 25, weightKg: 3})
const tiger1 = new Tiger({name: "Viktoras", age: 32})
const zookeeper = new Zookeeper({name: "Gabija"})
const employee1 = new Zookeeper({name: "Džionas"})
       
    
console.log(zebra1)
console.log(elephant1)
console.log(tiger1)
console.log(zookeeper)
console.log(employee1)      




