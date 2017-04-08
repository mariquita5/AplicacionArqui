
function EnviarInformacion() {
	var nombre = document.getElementById("nombre").value;
	var apellido1 = document.getElementById("apellido1").value;
	var apellido2 = document.getElementById("apellido2").value;
	var correo = document.getElementById("correo").value;
	var usuario = document.getElementById("usuario").value;
	var fecha = document.getElementById("fecha").value;
	var contraseña1 = document.getElementById("contraseña1").value;
	var contraseña2 = document.getElementById("contraseña2").value;
	var imagen = document.getElementById("results");
	
    //Condicion que valida si es nuevo usuario o no
    if (nombre == "") {
		alert("No pueden existir espacion en blanco");	
	} else{
		alert("no");	
	}
}

function HandleBrowseClick() {
	var fileinput = document.getElementById("browse");
	fileinput.click();
}

function Handlechange() {
	var fileinput = document.getElementById("browse");
	var textinput = document.getElementById("filename");
	textinput.value = fileinput.value;
}

window.ajaxSuccess = function () {
	response = JSON.parse(this.responseText);
	console.log("ajaxSuccess", typeof this.responseText);
	console.log(response)
	console.log('URL', response["secure_url"])
	document.getElementById('uploaded').setAttribute("src", response["secure_url"]);
	document.getElementById('results').innerText = response["secure_url"];
}

window.AJAXSubmit = function (formElement) {
	console.log("starting AJAXSubmit");
	if (!formElement.action) {
		return;
	}
	var xhr = new XMLHttpRequest();
	xhr.onload = ajaxSuccess;
	xhr.open("post", "https://api.cloudinary.com/v1_1/do6pbylj8/image/upload");
	xhr.send(new FormData(formElement));
}
