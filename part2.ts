let tasks:Array<String>= new Array;


function addToArray(task:string):number{
    tasks.push(task);
    console.log("The item" + task+ "was included to the array");
    return tasks.length;
}

function listAllTasks():void{
    for(let i=0; i< tasks.length; i++){
        console.log("The array "+i+" is "+tasks);
    }
    //or
    tasks.forEach(function(item){
        console.log(item);
    })
}

function deleteTask(task:string):number{
    
    let index:number = tasks.indexOf(task);
    
    if(index > -1){
        tasks.splice(index,1);
        console.log("The item "+ task+ " was deleted from the array");
    }else{
        console.log("The item was not in the array");
        
    }

    return tasks.length;
}

addToArray("Part a");
addToArray("Part b");
let count:number = addToArray("Part c");

console.log("The amount of elements in the array is "+count);

listAllTasks();

let count2:number= deleteTask("Part b");

console.log("The new amount of element in the array is "+count2);
