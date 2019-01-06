//DOM SELECTORS

//
//document.getElementById()
//document.getElementsByClassName()
//document.getElementsByTagName()
//document.querySelector()
//document.querySelectorAll()

//getting First element

//document.getElementById("first");
//document.querySelector("#first");
//document.getElementsByClassName("special")[0];
//document.querySelector(".special");
//document.querySelectorAll(".special")[0];
//document.getElementsByTagName("p")[0];
//document.querySelector("p");


/////  s t y l e

// the style property is one way to manipulate element's style

//SELECt
//var tag = document.getElementsById("highlight");
//
////MANIPULATE
//
//tag.style.color ="blue";
//tag.style.border ="10px solid red";
//tag.style.fontSize ="70px";
//tag.style.background ="yellow";
//tag.style.marginTop ="200px";
//
//
////AN ALTERNATIVE WAY
////classList
////define a class in css
//
//.another-class {
//    color:purple;
//    fontSize: 76px;
//}
//
//var tag = document.querySelector("h1")
//
//// ADD A CLASS TO THE SELECTED ELEMENT
//tag.classList.add("another-class");
////REMOVE A CLASS
//tag.classList.remove("another-class");
////TOGGLE A CLASS
//tag.classList.toggle("another-class");


//logo.setAttribute("src","https://www.google.com/img");


//DOM EVENTS

//the Syntax
//to add a listener,we use a method called "addEventListener"

//element.addEventListener(type, functionToCall);
//
//var button = document.querySelector("button");
//button.addEventListener("click", function(){
//    console.log("SOMEONE CLICKED THE BUTTON!");
//                       
                       // });

//any click on ul
//document.querySelector("ul").addEventListener("click",function(){
//    console.log("you clicked ul");
//    
//    
//});

//attach one listener whichh specificaly

//var lsi=document.querySelectorAll("li");
//
//for(var i=0;i<lis.length;i++){
//    lis[i].addEventListener("click",function(){
//      //whatever clicked this refers it
//        
//        this.style.color="pink";
//        
//        
//    });
//}
//
//var button = document.querySelector("button");
//var paragraph=document.querySelector("p");
//
//
//button.addEventListener("click",changeText);
//
//function changeText(){
//paragraph.textContent ="Someone clicked the button";
//    
//}
//    
//    
//})


var button=document.querySelector("button");
var isYellow=false;

//button.addEventListener("click",function(){
//if(isYellow){
//        document.body.style.background ="yellow";    
//}
//    else{
//        document.body.style.background ="white";    
//    }
//    isYellow= !isYellow;
//    
//});
button.addEventListener("click",function(){
document.body.classList.toggle("yellow");
    
});





























