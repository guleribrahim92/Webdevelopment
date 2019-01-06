//printReverse()
//1,2,3,4
//4,3,2,1

function printReverse(arr){
for(var i=arr.length-1; i>=0; i--){
console.log(arr[i]);    
}   
}

//printReverse([1,2,3,4,5,4,7,8,9,6,5]);

//-----------------------------
//isUniform
//1,1,1,1 true
//2,1,1,1 false
//use loop
//check first item then next if equal

function isUniform(arr){
var first=arr[0];
for(i=1;i<arr.length;i++){
    if(arr[i] !==first){
        return false;
}
}        
return true;    
}

//-----------------
//sumArray
//1,2,3  ->6
//add all aray
//result or sum

function sumArray(arr){
var sum=0;
arr.forEach(function(e){
   sum+=e; 
   
});
return sum;
} 

//-------------------
//max()
//1,2,3  ->3
//10,3,10,4 ->10

function max(arr){
var max=arr[0];
for(var i=1;i<arr.length;i++){
   if(arr[i]>max){
       max=arr[i];
   } 
    
}        
  return max;      
 }