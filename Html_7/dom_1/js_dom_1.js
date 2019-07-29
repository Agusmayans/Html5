var pure = "Con papas peladas"
var beepeadora = function (){
	document.querySelector("body").insertAdjacentHTML("beforeend", "<p>BEEP</p>")
	document.querySelector("body").classList.toggle("background")
	}


setInterval(function (){
	document.querySelector("h1").classList.toggle("header")
},1000)

setInterval(function (){
	document.querySelectorAll(".swap")[0].classList.toggle("wamu")
	document.querySelectorAll(".swap")[1].classList.toggle("wamu")
},500)

setInterval(function swapiti(){

	var aux1 = document.querySelector(".swap1");
	var aux2 = document.querySelector(".swap2");
	
	var div1 = aux1.textContent; 
	var div2 = aux2.textContent;

	aux1.textContent = div2;
	aux2.textContent = div1;

	
	},1000)

// for (var i = 0; i < 3; i++) {   //esto es una bestialidad, sos un aminal jajajaja
// document.querySelectorAll(".pesado")[i].addEventListener("click",beepeadora);
// }
// document.querySelector(".joke").addEventListener("mouseover",function(){
// 	alert("NANIIIIIIIIIIIIIIIIIII");
// });

// document.querySelector(".cheste").addEventListener("mouseleave",function(){
// 	alert("UDYR ..... UTHERE");
// });


var botones = [...document.querySelectorAll(".pesado")]; //convierte ese node list en un array TENER EN CUENTA

botones.forEach(function(button){
	button.addEventListener("click",beepeadora)
});