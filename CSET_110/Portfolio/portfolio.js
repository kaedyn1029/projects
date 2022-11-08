let menus =document.querySelectorAll(".subMenus");
let screen = document.querySelectorAll("screens");
let buttons = document.querySelectorAll(".btns");
let opt1 = document.getElementById("w1")
let div1 = document.getElementById("empty1");
let opt2 = document.getElementById("w2")
let div2 = document.getElementById("empty2");
let opt3 = document.getElementById("w3")
let div3 = document.getElementById("empty3");
let opt4 = document.getElementById("w4")

function popUp(week){
	if(week.id == "w1"){
		week.parentElement.style.paddingTop = "65vh";
		week.parentElement.style.gridTemplate = "'week1 selectIcon' 'week2 empty1' 'week3 empty2' 'week4 empty3'";
		buttons.forEach(button => {button.style.color = "rgba(255,255,255,0.65)";});
		week.style.color = "white";
		
		opt1.style.fontSize = "30px";
		opt2.style.fontSize = "26px";
		opt3.style.fontSize = "22px";
		opt4.style.fontSize = "22px";
		
		menus.forEach(menu => {menu.style.display = "none";});
		document.getElementById("screen1").style.display = "none";
		document.getElementById("subMenu").style.display = "block";
		
	} else if(week.id == "w2"){
		week.parentElement.style.paddingTop = "calc(65vh - 38px)";
		week.parentElement.style.gridTemplate = "'week1 empty1' 'week2 selectIcon' 'week3 empty2' 'week4 empty3'";
		buttons.forEach(button => {button.style.color = "rgba(255,255,255,0.65)";});
		week.style.color = "white";

		opt1.style.fontSize = "26px";
		opt2.style.fontSize = "30px";
		opt3.style.fontSize = "26px";
		opt4.style.fontSize = "22px";

		menus.forEach(menu => {menu.style.display = "none";});
		document.getElementById("screen1").style.display = "none";
		document.getElementById("subMenu2").style.display = "block";
	} else if(week.id == "w3"){
		week.parentElement.style.paddingTop = "calc(65vh - 76px)";
		week.parentElement.style.gridTemplate = "'week1 empty1' 'week2 empty2' 'week3 selectIcon' 'week4 empty3'";
		buttons.forEach(button => {button.style.color = "rgba(255,255,255,0.65)";});
		week.style.color = "white";

		opt1.style.fontSize = "22px";
		opt2.style.fontSize = "26px";
		opt3.style.fontSize = "30px";
		opt4.style.fontSize = "26px";

		menus.forEach(menu => {menu.style.display = "none";});
		document.getElementById("screen1").style.display = "none";
		document.getElementById("screen1").style.display = "block";
	}else if(week.id = "w4"){
		week.parentElement.style.paddingTop = "calc(65vh - 114px)";
		week.parentElement.style.gridTemplate = "'week1 empty1' 'week2 empty2' 'week3 empty3' 'week4 selectIcon'";
		buttons.forEach(button => {button.style.color = "rgba(255,255,255,0.65)";});
		week.style.color = "white";

		opt1.style.fontSize = "22px";
		opt2.style.fontSize = "22px";
		opt3.style.fontSize = "26px";
		opt4.style.fontSize = "30px";

		menus.forEach(menu => {menu.style.display = "none";});
		document.getElementById("screen1").style.display = "none";
		document.getElementById("subMenu3").style.display = "block";
	}
}



function start(week){
	week.parentElement.style.paddingTop = "65vh";
	week.parentElement.style.gridTemplate = "'week1 selectIcon' 'week2 empty1' 'week3 empty2' 'week4 empty3'";
	buttons.forEach(button => {button.style.color = "rgba(255,255,255,0.65)";});
	week.style.color = "white";
	
	opt1.style.fontSize = "30px";
	opt2.style.fontSize = "26px";
	opt3.style.fontSize = "22px";
	opt4.style.fontSize = "22px";
	
	menus.forEach(menu => {menu.style.display = "none";});
}

start(opt1);
