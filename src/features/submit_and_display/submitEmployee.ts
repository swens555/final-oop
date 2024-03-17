//const zookeeperGenderSelect = document.getElementById('zookeeperGenderSelect') as HTMLSelectElement
const zookeeperInput1 = document.getElementById('zookeeperInput1') as HTMLInputElement
const zookeeperSubmitButton = document.getElementById('zookeeperSubmitButton') as HTMLButtonElement

//import { GenderType } from "../employee/Employee.types"
import { Zookeeper } from "../employee/Zookeeper.ts"
import { Logger } from "../log/Logger"
import { printZookeeperCards } from "./printEmployeeCards"

export function employeeFormSubmit() {
    const newZookeeper = new Zookeeper({
        name: zookeeperInput1.value,

    })
    printZookeeperCards()
    Logger.log('employee added')
    return newZookeeper
}

export function submitFormByEmployee():void{
    /*if //(zookeeperGenderSelect.value==="Male") 
       { zookeeperInput1.disabled = false
        zookeeperSubmitButton.disabled = false
    }
    else{
        zookeeperInput1.disabled = true
        zookeeperSubmitButton.disabled = true
    }*/if (zookeeperInput1.value="")   {    zookeeperInput1.disabled = false
        zookeeperSubmitButton.disabled = false
    } else{
        zookeeperInput1.disabled = true
        zookeeperSubmitButton.disabled = true
    }
}