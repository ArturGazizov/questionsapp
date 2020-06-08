/*document.getElementById("theform").addEventListener("submit", function(event){
  event.preventDefault()
});*/
document.getElementById("closingbutton").addEventListener("click", function(event){
  event.preventDefault()
});
document.getElementById("submittingbutton").addEventListener("click", function(event){
  event.preventDefault()
  submitForm()
});


let innerhtml=""

function show(){
  innerhtml=""

let outputhtml=document.getElementById("HTML2").checked
let outputcss=document.getElementById("CSS2").checked
let outputjs=document.getElementById("JS2").checked

let gotquestions=JSON.parse(localStorage.getItem("questions"))||[]
gotquestions.forEach(element => {
  if ((outputhtml && element[1]=="HTML")||(outputcss && element[1]=="CSS")||(outputjs && element[1]=="JS"))
  innerhtml+="<div class='module'>"+element[0]+":"+element[1]+"</div>"});
innerhtml="<div class='wrapper'>"+innerhtml+"</div>"
document.getElementById('arrayMessage').innerHTML = innerhtml;
}


function submitting(event) {
}

function submitForm(event) {
  
let question=(new FormData(document.forms.theform)).get('psw');
let category=(new FormData(document.forms.theform)).get('category');
questions=JSON.parse(localStorage.getItem("questions"))||[];
questions.push([question,category])
localStorage.setItem("questions", JSON.stringify(questions));

closeForm() 
show()
return false
  }

var formData = new FormData(document.querySelector('form'))

function openForm() {
  document.getElementById("myForm").style.display = "block";
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}