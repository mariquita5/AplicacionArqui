function nobackbutton() {
	window.location.hash = "no-back-button";
	window.location.hash = "Again-No-back-button" //chrome
	window.onhashchange = function () {
		window.location.hash = "no-back-button";
	}
}

function salir(link) {
    var x;
    if (confirm("¿Esta seguro(a) de salir?") == true) {
        location.href = link;
    } 
}