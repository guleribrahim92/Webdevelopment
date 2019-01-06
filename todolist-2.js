var todos =["buy smt"];
window.setTimeout(function() {
var input=prompt("whatcha wanna do?");

while(input !== "quit"){

if(input==="list"){
listTodos();
    
} else if (input==="new"){
addTodo();
    
} else if (input==="delete") {
deleteTodo();

}
input=prompt("What would you like to do?");

}
console.log("ok,you quit");
},500);



function listTodos(){
    
todos.forEach(function(todo,i){
console.log("***********")
console.log(i + ": " +todo);
});
    
}

function addTodo(){
var newTodo=prompt("Enter new todo");
todos.push(newTodo);
console.log("added to do");   
    
}

function deleteTodo(){
    //ask for index of todo to be deleted
var index=prompt("enter index of todo to delete");
//    delete that todo
//splice() method
//index is for what user supply and second one how many item you want to delete(1 item in this case)    
todos.splice(index,1);    
console.log("deleted todo");    
}