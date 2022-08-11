var ry =document.getElementById("ry");
var doller =document.getElementById("doller");
var txt =document.getElementById("txt");

doller.addEventListener('change' ,function(){
ry.value= doller.value * 600;
txt.innerHTML=doller.value * 600;
});


















































