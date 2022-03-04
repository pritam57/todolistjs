const input = document.querySelector("#add");
const inputt = document.querySelector("#remove");
const  btn = document.querySelector("#btn");
const  btnn = document.querySelector("#btnn");
const list = document.querySelector("#list");

// populate tab with li data    

// this function will allow us to add elements when we click the button
btn.onclick = function(){
    
    var txt = input.value;
    if(txt ==''){
        alert('you must write something');
    }else{
        li = document.createElement('li');
        li.setAttribute("id", input.value)
    li.innerHTML = txt;
    list.insertBefore(li,list.childNodes[0]);
    input.value = '';
  
    }
    
};
/*
//this function will allow us to check the clicked elements
list.onclick = function(ev){
    if(ev.target.tagName == 'LI'){
         ev.target.classList.toggle('checked');

    }
};
*/
list.addEventListener("click", dada)
function dada(e){
if(e.target.tagName == "LI"){
    e.target.classList.toggle("checked");
}
}

btnn.onclick = function(){
    var txtt = inputt.value;
const ul = document.querySelectorAll("#list li");

    if(txtt ==''){
        alert('you must write something');
    } else{
for(var i=0; i<ul.length; i++){
    if(ul[i].textContent==txtt){
        var pritam=(ul[i].id)
       // console.log(pritam)
       // console.log(ul);
        var element = document.getElementById(pritam);
        element.parentNode.removeChild(element);
    }
   
}
    }
   
    inputt.value = '';
 
    }

    ////var ul =document.getElementById("list");
  //  var candiadte =document.getElementById("candidate");
    