/*import { Animal } from "../Animal"; 
export class Tiger extends Animal {wasOutside:boolean;
    makeSound(){
      console.log( "R-r-r-r")
    }
    
    
    constructor(name:string,age:number,wasOutside:boolean){
     super(name,age);
     this.wasOutside=wasOutside}
     swim(){
        console.log("swim");

     }
     hunt(){
        console.log("hunt")
     } 
  
  }*/

  import { Animal } from "../Animal";
import { AddTiger } from "./SpecificAnimal.types";
import { AnimalSpeciesType } from "../Animal.types";
import { IPredatoryAnimal } from "../Animal.interfaces";

export class Tiger extends Animal implements IPredatoryAnimal {
    wasWalked: boolean=false;

    constructor({name, age}:AddTiger) {
        super({name, age})
    }
    makeSound(): void {
        console.log("roar")
    }
    animalSpecies():AnimalSpeciesType {
        return "Tiger"
    }
    swim() {
        console.log("i'm under de wata, br br")
    }
    hunt() {
        console.log("*Užsisako wolt'ą*")
    }
    walkTheCat() {
        if (!this.wasWalked) {
            this.wasWalked=true
            console.log("cat was successfully walked")
            return
        } else {
            console.log("cat has already been for a walk")
        }
    }
}
  
  