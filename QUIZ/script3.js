const quizdata=[
    {
        question:"Which language runs in a web browsers",
        a:"Java",
        b:"Python",
        c:"C",
        d:"Javascript",
        Correct:"d",
        
    },{
        question:"what does css stand for",
        a:"Central Style Sheet",
        b:"Cascading Style Sheet",
        c:"Cascading Simple Sheets",
        d:"Cars Suvs Sailboats",
        Correct:"b",
    },{
        question:"what does HTML stand for",
        a:"HyperText Machine Launguage ",
        b:"HyperTime Makeup Language ",
        c:"HyperText Markup Language",
        d:"HigherText Markup Language",
        Correct:"c", 
    },{
        question:"what does MERN stand for",
        a:"MongoDB Express React Node ",
        b:"MongoDB Easy React Node ",
        c:"MongoDB Express React Angular",
        d:"MongoDB Express Angular Node",
        Correct:"a",  
    }
]

const quiz=document.getElementById('quiz');
const answerls=document.querySelectorAll('.answer');
// console.log(answerls);
const questionls=document.getElementById('question');
const  a_text=document.getElementById('a_text')
const  b_text=document.getElementById('b_text')
const  c_text=document.getElementById('c_text')
const  d_text=document.getElementById('d_text')
const  btn=document.getElementById('submit')

let currentquiz=0;
let score=0;

loaddata();

function loaddata(){

    deselect();

const currentquizdata=quizdata[currentquiz];
// console.log(currentquizdata);
questionls.innerText=currentquizdata.question;
a_text.innerText=currentquizdata.a;
b_text.innerText=currentquizdata.b;
c_text.innerText=currentquizdata.c;
d_text.innerText=currentquizdata.d;
}

function deselect() {
    answerls.forEach(ansls=>ansls.checked=false)
}

function getselect(){
    let answer;
    answerls.forEach(item=>{
        if(item.checked){
            answer=item.id;
            // console.log(answer);
        }
    })
 return answer;
}
  btn.addEventListener('click',()=>{
    const answer=getselect();
    if(answer){
        if(answer===quizdata[currentquiz].Correct){
            score++;
        }
        currentquiz++;

        if(currentquiz<quizdata.length){
             loaddata();
        }

        else{
              quiz.innerHTML=`<h2> you have got ${score}/${quizdata.length} questions correctly </h2>
              <button onclick="location.reload()">Reload</button> `
        }
    }
})