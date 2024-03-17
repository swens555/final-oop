
/*import { Animal } from "../Animal"; 

export class Zebra extends Animal {maxSpeed:string;origin:string;
    makeSound(): void {
      console.log("Iho-ho!");
    }
    constructor(name:string,age:number,maxSpeed:string,origin:string){
      super(name,age);
      this.maxSpeed=maxSpeed;
      this.origin=origin

    }
    jump(){
        console.log("jump")
    }
    run(){
        console.log("run")

    }
  }*/

  import { Animal } from "../Animal";
import { AddZebra } from "./SpecificAnimal.types";
import { AnimalSpeciesType } from "../Animal.types";
import { IActiveAnimal } from "../Animal.interfaces";

export class Zebra extends Animal implements IActiveAnimal {
    maxSpeed: number;
    origin: string;

    constructor({name, age, maxSpeed, origin}:AddZebra) {
        super({name, age})
        this.maxSpeed = maxSpeed
        this.origin = origin
    }
    makeSound(): void {
        console.log("bark")
    }
    animalSpecies():AnimalSpeciesType {
        return "Zebra"
    }
    jump() {
        console.log("hop musorok")
    }
    run() {
        console.log("skrrt")
    }
}