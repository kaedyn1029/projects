let total;
let questionList = ["Which impostor is sus?" , "Which color is NOT an option for your character?", "Which amogus is the cutest?", "Have you played amogus before?", "DOWNLOAD IT NOW?"];
let answers = [
	["Red","Blue","Yellow","Green"],
	["Lime","Purple","Brown","Light Pink"],
	["Blue","White","Joe Biden","Orange"],
	["Yes","No","Why do you ask?","AMOONGISS"],
	["Okay","Maybe Later","NO!!!!","Of course ;)"],
];
let correctList = [answers[0][0], answers[1][3], answers[2][1], answers[3][3],answers[4][3]];
let submitList = [];
let qs = document.getElementsByName("group");
let quizSec = document.getElementById("QnA");
let scoreSec = document.getElementById("results");
let count = 0;
let score = 0;
function questions(){
	submitted();
	if(count >= 4){
		totalScore();
		return;
	}
	count+=1
	newQuestion();

}

function newQuestion(){
	document.getElementById("question").innerHTML = questionList[count];	
	document.getElementById("ql1").innerHTML = answers[count][0];
	document.getElementById("ql2").innerHTML = answers[count][1];
	document.getElementById("ql3").innerHTML = answers[count][2];
	document.getElementById("ql4").innerHTML = answers[count][3];
}

function submitted(){
	if(document.getElementById("q1").checked){
		submitList[count] = document.getElementById("ql1").innerHTML;
	}	
	if(document.getElementById("q2").checked){
		submitList[count] = document.getElementById("ql2").innerHTML;
	}
	if(document.getElementById("q3").checked){
		submitList[count] = document.getElementById("ql3").innerHTML;
	}	
	if(document.getElementById("q4").checked){
		submitList[count] = document.getElementById("ql4").innerHTML;
	}
}

function totalScore(){
	let egg=0;
		for(i = 0; i < correctList.length; i++){
			if(correctList[i] == submitList[i]){
				egg += 1;
		}
	}
	total = egg + '/5';
	hide();
	document.getElementById("results").innerHTML = total;
	let but=document.createElement("button");
	but.innerText="restart";
	but.setAttribute("onclick", "location.reload();");
	scoreSec.appendChild(but);
}

function hide(){
	for(x of quizSec.children)
		x.style.display = "none";
}


newQuestion();

