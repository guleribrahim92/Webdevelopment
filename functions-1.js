//function sing(){
//console.log("Ne soylesen bos beni goremezsin");
//console.log("Icinde bir ses ama secemezsin");
//console.log("Hani ozlersin geri donemezsin");
//console.log("Offf Off ki ne off");    
//}
//sing();
//sing();



//-----arguments------------
//function sayHello(name){
//    console.log("hello there " + name + "!");
//}
//sayHello("ibo");
//sayHello("baby");

//-------------func declaration vs.func expression-----

//function declaration

//function capitalize(str){
//    return str.charAt(0).toUpperCase() + str.slice(1);
//}
//
////function expression
//
//var capitalize = function(str) {
//    return str.charAt(0).toUpperCase() + str.slice(1);
//    
//}

//function test(x,y) {
//    return y-x;
//}
//test(10,40);
//
//
//
//

//isEven function returns true or false


//function isEven(num){
//if(num %2===0){
//return true;
//}
//else {
//return false;
//}
//}
//
//isEven(34);
//
////or ve can do this way
//function isEven(num){
//return num %2===0;
//}
//
//
////factorial function
//
//function factorial(num){
////define a result variable
//    var result=1;
////calculate factorial and store value in result
//    for(var i=2;i<=num; i++){
//        result=result * i ;
//    }
//    return result;
////return the result variable    
//    
//
//}   
//
////replace - with _ characters in string
//
//function kebabToSnake(str){
////replace all "-" with "_"
//var newStr= str.replace(/-/g, "_");    
////return str    
//   return newStr; 
//    
//}
//
//
//

//var num=8;
//function doMath(){
//    num +=1;
//    if(num % 5 == 0) {
//        return true;
//    }
//    else{
//        return false;
//    }
//    }
//
//// they - in the same scope 
////becomes 9 then function starts
//
//num +=1;
//doMath()
//    
//
//function hi(){
//    var name="rusty";
//    console.log(name);
//}
//function bye(){
//    console.log(name);
//}    
//    
//hi()
//bye()
//    
//    -----HIGHER ORDER FUNCTIONS-----------
// We can pass functions to other functions and shit

function sing(){
    console.log("somebody"); 
    console.log("I used to know");
    
}
sing()

//setInterval(anotherFunc,interval)

setInterval(sing,10000);

setInterval(function(){
console.log("I am cool");
    console.log("this is great");
},20000);
    
    
