window.onload=function() {
  var un = document.getElementById("userName");
	var pwd = document.getElementById("userPwd");
	un.value= "Username";
	pwd.value= "Password";
	un.onfocus = function() {
	  un.value = '';
	};
	un.onblur = function() {
	  un.value = 'Username';
	};
	pwd.onfocus = function() {
	  pwd.value = '';
	};
	pwd.onblur = function() {
	  pwd.value = 'Password';
	};
};