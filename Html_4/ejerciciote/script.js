var name = prompt("Decinos tu nombre");
var genero = prompt("Pasanos tu genero");
var age = prompt("Ahora tu edad please");
var isMember = prompt("Sos miembro gilastrum?")

if(isMember == "si"){
	isMember=true;
}


if(isMember==false || age<21){
	if(genero=="mujer"){
		alert("Disculpe señorita vallase a freir esparragos")
	}
	else if(genero=="hombre"){
		alert("a paseo wacho kreta")
	}
	
else{
		var thirsty = prompt("Que va a ordenar")

		if(thirsty != "Coors Light"){
			var drinkName = thirsty;
			alert("Si "+name+" un "+drinkName+" en camino")
		}
	}
}

