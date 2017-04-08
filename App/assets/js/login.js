function ValidarUsuario() {
	var usuario = document.getElementById("Usuario").value;
	var contraseña = document.getElementById("Contraseña").value;

	if ((usuario == "") || (contraseña == "")) {
		alert("No pueden existir espacios en blanco");
	} else
	if (contraseña.length < 8) {
		alert("La contraseña debe tener al menos 8 caracteres");
	} else {
		location.href = "Chat.html?User=" + usuario;
	}
}
