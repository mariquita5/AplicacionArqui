function EnviarMensajes() {
    //Variables Locales
    var url = location.search.replace("?", "");
	var x= url.split("=");
	
	var usuario = x[1];
	var mensaje = document.getElementById("TextoMensaje").value;

	InsertarDatos(usuario, mensaje);
	document.getElementById("TextoMensaje").value = "";
}

function InsertarDatos(usuario, mensaje) {
	
	document.getElementById("PanelTexto").innerHTML += "<div class=\"row message-bubble\"> " +
		"<p class=\"text-muted\"><strong>" + usuario + "</strong></p>" +
		"<p>" + mensaje + "</p>" +
		"</div>";
}

