var tasks = new Array;
function addToArray(task) {
    tasks.push(task);
    console.log("The item" + task + "was included to the array");
    return tasks.length;
}
function listAllTasks() {
    for (var i = 0; i < tasks.length; i++) {
        console.log("The array " + i + " is " + tasks);
    }
    //or
    tasks.forEach(function (item) {
        console.log(item);
    });
}
function deleteTask(task) {
    var index = tasks.indexOf(task);
    if (index > -1) {
        tasks.splice(index, 1);
        console.log("The item " + task + " was deleted from the array");
    }
    else {
        console.log("The item was not in the array");
    }
    return tasks.length;
}
addToArray("Part a");
addToArray("Part b");
var count = addToArray("Part c");
console.log("The amount of elements in the array is " + count);
listAllTasks();
var count2 = deleteTask("Part b");
console.log("The new amount of element in the array is " + count2);
