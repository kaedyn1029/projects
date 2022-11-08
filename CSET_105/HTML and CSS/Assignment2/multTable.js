let num = prompt("Enter a number:");


document.getElementById("output").innerHTML="";
for(let i = 1; i <= 10; i++){
	document.getElementById("output").innerHTML+=i+"*" +num+ "=" +i*num + "\n";
}
