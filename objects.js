//intro to objects

//var dog ={
//
//name:"Rsty";
//breed:"Mutt";
//age:3;
//
//}
//
//dog.name;
//dog.age;
//dog.breed;
//
////update data
//
//person["age"]+=1;
////now age is 22
//
//dog.age= += 1;
//
////square bracket notation
//
//dog["name"] = "Tater";
////now dog's name is set to "tater"
//
////objects can hold all sorts of data
//
//
//var junkObject ={
//    
//    age: 57,
//    color:"purple",
//    isHungry:true,
//    friends:["Horatio","Hamlet"],
//    pet: {
//        name:"Rusty",
//        species:"Dog",
//        age:2
//    }
//};
//    }
//}


//nested

//var post = [
//{
//title:"cats are mediocre",
//author:"Colt",    
//comments: ["coold","hideous"]
//},
//{
//title:"cats are acually awesome",
//author:"Cat Luvr" ,
//comments: ["love","Go to hell"]
//}
//    
//]



//var someObject = {
//    friends: [
//        {name: "Malfoy"},
//        {name: "Crabbe"},
//        {name: "Goyle"}
//        ],
//    color:"baby blue",
//    isEvil:true
//};
//    
    
var movies = [
    {
    title:"Closer",
    rating:5 ,
    hasWatched:true       
    },
    {
    title:"Payback",
    rating:4,
    hasWatched:false    
    },
    {
    title:"Grease",
    rating:3.5,
    hasWatched:true
    },
    {
    title:"Pulp Fiction",
    rating:5.5,
    hasWatched:true    
        
    }
]

movies.forEach(function(movie){
  console.log(buildString(movie));
});


function buildString(movie){
    var result = "You have ";
    if(movie.hasWatched){
        result += "seen ";
    }
    else {
    result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    return result;
}



// how do we use the keyword -this-

//var comments = {};
//comments.data = ["Good Job","bye","lame"];
//
//
//function print(arr){
//    arr.forEach(function(el){
//    console.log(el);           
//               
//            });   
//}
//
//


var myCar2 = {
    maxSpeed:70,
    driver:"Ibrahim",
    drive: function(speed,time){
        console.log(speed + time);
    },
    logDriver:function(){
        console.log("driver name is " + this.driver);
    }
    
};

var myCar3 = {
    maxSpeed:10,
    driver:"seyla",
    drive: function(speed,time){
        console.log(speed + time);
    },
    test:function(){
        console.log(this);
    }
};

myCar2.logDriver();
//myCar3.test();



















