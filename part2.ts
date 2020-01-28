//part 1 string arry
let taskArrays: Array<string> = [];


// part 2add task function 

function addTask(task: string): number {
    taskArrays.push(task);
    console.log("Item " + task + " has been added to the Array");
    return taskArrays.length;
}

addTask(" Complete lab");
let numberOfTasks: number = addTask("eat breakfeast");
console.log("The number of task to do today is " + numberOfTasks);


function listAllTasks() {
    console.log("Array contains the following items: ")
    taskArrays.forEach(function (task) {
        console.log(task);
    })
}
listAllTasks();

function deleteTask(task: string): number {
    let index: number = taskArrays.indexOf(task);
    if (index > -1) {
        taskArrays.splice(index, 1);
        console.log("item " + task + " deleted from array.");
    } else {
        console.log("item " + task+" not in array.");
    }
    return taskArrays.length;

}

deleteTask(" Complete lab");

