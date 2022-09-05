var parentdiv=document.createElement('div');
parentdiv.setAttribute('style','padding-top:20px');


var numgen=document.createElement('h2');
numgen.innerHTML="RANDOM NO GENERATOR"
numgen.setAttribute('style','background-color:blue');
numgen.style.color="white";
numgen.style.textAlign="center";

parentdiv.append(numgen);

var button=document.createElement('button');
button.innerText="GENERATE"
button.setAttribute('type','button')
button.setAttribute('onclick','getRandomnum()')
console.log(button)


parentdiv.appendChild(button);

var div=document.createElement('div')
div.setAttribute('id','main')
parentdiv.append(div);

function getRandomnum() {
    var number=document.getElementById('main')
    number.innerHTML=Math.floor(Math.random() * (90000000 - 10000000) + 10000000);
    console.log(number)
  }
  

document.body.append(parentdiv)