import { Employee } from "./Employee";

export type EmployeeType = {
    id: number;
    employee: string;
    isEmployeeAtZoo: Employee["isEmployeeAtZoo"];
    safetyTrainingCompletionDate: Employee["safetyTrainingCompletionDate"];
    name: Employee["name"];
    
}

export type AddEmployeeType = {
    name:Employee["name"];

}