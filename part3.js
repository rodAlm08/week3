"use strict";
exports.__esModule = true;
var toDo = /** @class */ (function () {
    function toDo() {
        this.tasks = [];
    }
    toDo.prototype.addToArray = function (task) {
        this.tasks.push(task);
        console.log("The item" + task + "was included to the array");
        return this.tasks.length;
    };
    toDo.prototype.listAllTasks = function () {
        //  for(let i=0; i< this.tasks.length; i++){
        //    console.log("The array "+i+" is "+tasks);
        //}
        //or
        this.tasks.forEach(function (item) {
            console.log(item);
        });
    };
    toDo.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task);
        if (index > -1) {
            this.tasks.splice(index, 1);
            console.log("The item " + task + " was deleted from the array");
        }
        else {
            console.log("The item was not in the array");
        }
        return this.tasks.length;
    };
    return toDo;
}());
var myTasks = new toDo();
myTasks.addToArray(" Q1 ");
myTasks.addToArray(" Q2 ");
myTasks.addToArray(" Q3 ");
myTasks.listAllTasks();
myTasks.deleteTask(" Q2 ");
