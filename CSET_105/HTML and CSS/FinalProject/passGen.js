function getRand(l){
	return Math.floor(Math.random() * l);
}

let pass;
let length;
let upper, lower, nums, syms;
function checks(){
pass = "";
length = document.getElementById("passLength").value;
upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
lower = "abcdefghijklmnopqrstuvwxyz";
nums = "0123456789";
syms = "~!@#$%^&*_(){[}]|;+=-'<,>.?/";
	if(document.getElementById("upperCase").checked){
		pass += upper;
	}
	if(document.getElementById("lowerCase").checked){
		pass += lower;
	}
	if(document.getElementById("numbers").checked){
		pass += nums;
	}
	if(document.getElementById("symbols").checked){
		pass += syms;
	}
	let passArr = pass.split('');
	let arrLength = passArr.length;
	for(let i = 0; i < arrLength - 1; i++){
		let j = getRand(arrLength);

		let old = passArr[i];
		passArr[i] = passArr[j];
		passArr[j] = old;
	}
	passArr.length = length;
	pass = passArr.join('');
	password.innerHTML = pass;
}

