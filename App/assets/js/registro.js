function EnviarInformacion() {
	
	var config = {
    apiKey: "AIzaSyDqemAG3f2hoGjWW9R7Ztn-AIBQ_Y0vqjs",
    authDomain: "chat-68c9c.firebaseapp.com",
    databaseURL: "https://chat-68c9c.firebaseio.com",
    projectId: "chat-68c9c",
    storageBucket: "chat-68c9c.appspot.com",
    messagingSenderId: "1083526514232"
    };
	
	firebase.initializeApp(config);

	var nombre = document.getElementById("nombre").value;
	var apellido1 = document.getElementById("apellido1").value;
	var apellido2 = document.getElementById("apellido2").value;
	var correo = document.getElementById("correo").value;
	var usuario = document.getElementById("usuario").value;
	var fecha = document.getElementById("fecha").value;
	var contraseña1 = document.getElementById("contraseña1").value;
	var contraseña2 = document.getElementById("contraseña2").value;
	var imagen = document.getElementById("results");

	if ((nombre == "") || (apellido1 == "") || (apellido2 == "") || (correo == "") || (usuario == "") || (fecha == "") || (contraseña1 == "") || (contraseña2 == "")) {
		alert("No pueden existir espacios en blanco");
	} else
	if (contraseña1.length < 8) {
		alert("La contraseña debe tener al menos 8 caracteres");
	} else if (contraseña1 != contraseña2) {
		alert("Las contraseñas deben ser iguales");
	} else {
		location.href = "Login.html";
	}
	
	firebase.database().ref('usuarios').push({
          name: nombre,
          lastname1: apellido1,
	      lastname2: apellido2,
	      email:correo,
	      date:fecha,
	      user: usuario,
	      contraseña1: contraseña1,
	      contraseña2: contraseña2
	
});
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
