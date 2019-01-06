var lis=document.querySelectorAll("li");

for(var i=0;i<lis.length;i++){
lis[i].addEventListener("mouseover",function(){
//inside eventlisener refers to item or element triggers on    
this.style.color="green";    
    
    
});    
    
lis[i].addEventListener("mouseout",function(){
//inside eventlisener refers to item or element triggers on    
this.style.color="black";    
    
    
});


lis[i].addEventListener("click",function(){
this.classList.toggle("done");
    
    
});
    }