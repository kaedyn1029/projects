function RPS(call){
	let comp = Math.floor(Math.random()*3);
	let choice = ["Rock","Paper","Scissors"];
	let compScore = 0;
	let youScore = 0;
	let scoreComp = document.getElementByID("scoreComp");
	let scoreYou = document.getElementByID("scoreYou");
	let scoreTrack = document.getElementByID("scoreTrack");
	if(call == comp){
		scoreTrack.innerHTML = "It's a Tie!";
		newEl(comp,choice,call);
	}else if(call == 0){
		if(comp == 1){
			scoreTrack.innerHTML = "Computer wins!";
			newEl(comp,choice,call);
			compScore++;

		}else if(comp == 2){
			scoreTrack.innerHTML = "You win!";
			newEl(comp,choice,call);
			youScore++;
		}
	}else if(call == 1){
		if(comp == 2){
			scoreTrack.innerHTML = "Computer wins!";
			newEl(comp,choice,call);
			compScore++;

		}else if(comp == 0){
			scoreTrack.innerHTML = "You win!";
			newEl(comp,choice,call);
			youScore++;
		}
	}else if(call == 2){
		if(comp == 0){
			scoreTrack.innerHTML = "Computer wins!";
			newEl(comp,choice,call);
			compScore++;

		}else if(comp == 1){
			scoreTrack.innerHTML = "You win!";
			newEl(comp,choice,call);
			youScore++;
		}
	}
	
}
function newEl(call,choice,comp){
	let choices = document.createElement();
	choices.innerHTML = ("Computer: " + choice[comp] + ", You: " + choice[call]);
}
