var names=["ADITYA SINGH","SNEHA SINGH","AARINI SINGH"];
var images=["Dad.jpg","mom.png","me.png",];
var i=0;

function next(){
    document.getElementById("family_name").innerHTML=names[i];
    document.getElementById("photo").src=images[i];
    i++;
    if(i==3){
        i=0;
    }
}