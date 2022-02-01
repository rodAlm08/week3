export interface myInterface{
    addToArray(task:string):number;
    tasks:Array<string>;
    listAllTasks():void;
    deleteTask(task:string):number;
}