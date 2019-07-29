var pure = "de papas"

var parrafos = [...document.querySelectorAll("p")];

parrafos.forEach(function(parrafo){

	parrafo.addEventListener("click",function(){

		this.classList.toggle("highlight")
	
	})

})


