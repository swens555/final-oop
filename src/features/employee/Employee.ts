/*interface Employee{
     safetyTrainingCompletionDate:string;
     isEmployeeAtZoo:boolean;
      enterZoo(): void;
    
      leaveZoo(): void;
}

  /*  constructor(safetyTrainingCompletionDate:string,isEmployeeAtZoo:boolean) {
        this.safetyTrainingCompletionDate = safetyTrainingCompletionDate;
        this.isEmployeeAtZoo=isEmployeeAtZoo
      }
    

    
     /* loggedIN() {
        this.isEmployeeAtZoo = true;
        console.log("Employee is at Zoo");
      }
    
      loggedOff() {
        this.isEmployeeAtZoo = false;
        console.log("Employee is out of Zoo");
      }
    
      getEmploeeStatus() {
        return this.isEmployeeAtZoo;
      }
    
    export class Zookeeper implements Employee {safetyTrainingCompletionDate:string;isEmployeeAtZoo:boolean;

        constructor(safetyTrainingCompletionDate:string,isEmployeeAtZoo:boolean){
            this.safetyTrainingCompletionDate = safetyTrainingCompletionDate;
            this.isEmployeeAtZoo=isEmployeeAtZoo}
        enterZoo() {
          console.log("Employee is at Zoo");
        }
      
        leaveZoo() {
          console.log("Employee is out of Zoo");
        }
        feedAnimals(){
           
            console.log("animal fed")
        }
        getEmploeeStatus() {
            return this.isEmployeeAtZoo;
          }

      }*/

import { Employees } from "./Employees";
import { AddEmployeeType } from "./Employee.types";
import { Logger } from "../log/Logger";

export abstract class Employee {
    readonly id: number;
    name: string;
    isEmployeeAtZoo: boolean=true;
    safetyTrainingCompletionDate: string = "Not yet completed"

    constructor ({name}:AddEmployeeType) {
        this.id = Employees.employeeList.length
        this.name = name
        this.addEmployeeToList()
    }

    abstract enterZoo():void
    abstract leaveZoo():void
    takeSafetyTrainings() {
        if (this.safetyTrainingCompletionDate==="Not yet completed") {
            this.safetyTrainingCompletionDate=`${new Date().getHours()}:${new Date().getMinutes()}`
            Employees.employeeList[this.id].safetyTrainingCompletionDate=`${new Date().getHours()}:${new Date().getMinutes()}`
        } else {
           Logger.log(`safety training already completed in ${this.safetyTrainingCompletionDate}`)
        }
    }
    private addEmployeeToList() {
        Employees.employeeList.push(
            {   id: this.id,
                employee: this.whichEmployee(),
                name: this.name,
                isEmployeeAtZoo: this.isEmployeeAtZoo,
                safetyTrainingCompletionDate: this.safetyTrainingCompletionDate,
            }
        )
        console.log('zookeeper added')
    }
    abstract whichEmployee():string
    
  }
