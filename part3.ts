
import {myInterface} from './ToDoInterface';


class toDo implements myInterface{
   
    tasks:Array<string>=[];

    addToArray(task:string):number{
        this.tasks.push(task);
        console.log("The item" + task+ "was included to the array");
        return this.tasks.length;
    }

    listAllTasks():void{
      //  for(let i=0; i< this.tasks.length; i++){
        //    console.log("The array "+i+" is "+tasks);
        //}
        //or
        this.tasks.forEach(function(item){
            console.log(item);
        })
    }

    deleteTask(task:string):number{
    
        let index:number = this.tasks.indexOf(task);
        
        if(index > -1){
            this.tasks.splice(index,1);
            console.log("The item "+ task+ " was deleted from the array");
        }else{
            console.log("The item was not in the array");
            
        }
    
        return this.tasks.length;
    }

}

let myTasks = new toDo();
myTasks.addToArray(" Q1 ");
myTasks.addToArray(" Q2 ");
myTasks.addToArray(" Q3 ");
myTasks.listAllTasks();
myTasks.deleteTask(" Q2 ");