//jshint esversion:6


function getnum(){
num = String(Math.round(Math.random()*1000));

set = new Set(num);

if (set.size !==3){
    getnum();
}

return num;

}

num=getnum();





document.addEventListener('keypress', (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    
 if(name==="Enter"){       
element=document.getElementById("inputnum").value

if(Number(element)){
  console.log("yea")
}else{
    document.getElementById("run").value="Error Enter a Number Three digit number"
}

 
match=0
close1=0
 for(i=0;i<3;i++){
    if(num[i]===element[i]){
        match++
    }
    if(element.includes(num[i])){
        close1++

    }
 }
if(match===3){
    const parent=document.createElement("p")
    textout= element+" You Guessed IT"
    const node= document.createTextNode(textout)
    parent.appendChild(node)

    const newElement=document.getElementById("output");
    newElement.appendChild(parent)
} 
else if(match){
    const parent=document.createElement("p")
    textout= element+" Match"
    const node= document.createTextNode(textout)
    parent.appendChild(node)

    const newElement=document.getElementById("output");
    newElement.appendChild(parent)
}else if(close1){
    const parent=document.createElement("p")
    textout= element+" Close"
    const node= document.createTextNode(textout)
    parent.appendChild(node)

    const newElement=document.getElementById("output");
    newElement.appendChild(parent)

}else{
    const parent=document.createElement("p")
    textout= element+": Nope"
    const node= document.createTextNode(textout)
    parent.appendChild(node)

    const newElement=document.getElementById("output");
    newElement.appendChild(parent)

}
}

  }, false);

