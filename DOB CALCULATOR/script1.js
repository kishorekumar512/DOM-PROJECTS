var parentdiv=document.createElement('div');
parentdiv.setAttribute('style','padding-top:20px');


var datem=document.createElement('h1');
datem.innerHTML="DATE MANIPULATION"
datem.setAttribute('style','background-color:blue');
datem.style.color="white";
datem.style.textAlign="center";

parentdiv.append(datem);

var dateele=document.createElement('input');
dateele.setAttribute('type','date');
dateele.setAttribute('id','dob');
// dateele.setAttribute('style','padding-right:20px');


parentdiv.append(dateele);

var button=document.createElement('button');
button.innerText="Display data"
button.setAttribute('type','button')
button.setAttribute('onclick','datecal()')
dateele.setAttribute('style','padding-right=20px');


parentdiv.appendChild(button);

var displaydiv=document.createElement('div');



function datecal() {
  var input=document.getElementById('dob').value
  console.log(input);

if(Date.parse(input)){
  var inputdate=new Date(input);
  var currentdate=new Date();

  var millisecdiff=parseInt((currentdate).getTime())-parseInt((inputdate).getTime());
  console.log(millisecdiff);

var secdiff=Math.floor(millisecdiff/1000)
console.log(secdiff);

var mindiff=Math.floor(secdiff/60)
console.log(mindiff);

var hourdiff=Math.floor(mindiff/60)
console.log(hourdiff);

var daydiff=Math.floor(hourdiff/24)
console.log(daydiff);
var monthdiff=getmonthdiff(inputdate,currentdate)
console.log(monthdiff);

  function getmonthdiff(value1,value2) {
    var year=currentdate.getFullYear()-inputdate.getFullYear()
    var month=year*12+(currentdate.getMonth()-inputdate.getMonth())
    return month;
    
  }

var yeardiff=(currentdate.getFullYear()-inputdate.getFullYear())
console.log(yeardiff)

// function getyeardiff(value1,value2) {
//   var date1=(value1);
//   var date2=(value2);
//   return date2.getFullYear()-date1.getFullYear();
// }

displaydiv.innerHTML=`The date is ${inputdate} <br>
millisecond is ${millisecdiff} <br>
second is ${secdiff} <br>
minute is ${mindiff} <br>
hour is ${hourdiff} <br>
day is ${daydiff} <br>
month is  ${monthdiff} <br>
year is  ${yeardiff} <br>
`
}
else{
  displaydiv.innerHTML="input date is not valid"
}
document.body.appendChild(displaydiv)
}


document.body.append(parentdiv);