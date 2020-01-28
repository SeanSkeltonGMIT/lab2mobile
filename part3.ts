import { tasksInterface } from './Interface';

class Todos implements tasksInterface {

    myTasksArray: string[];
    listAllTasks(): void {
            console.log("Array contains the following items: ")
            taskArrays.forEach(function (task) {
                console.log(task);
            })
        }
    
    deleteTask(task: string): number {
            let index: number = taskArrays.indexOf(task);
            if (index > -1) {
                taskArrays.splice(index, 1);
                console.log("item " + task + " deleted from array.");
            } else {
                console.log("item " + task+" not in array.");
            }
            return this.myTasksArray.length;
        
        }
    

addTask(task: string): number {
    taskArrays.push(task);
    console.log("Item " + task + " has been added to the Array");
    return taskArrays.length;
}

}