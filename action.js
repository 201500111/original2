Document.addEventListener("deviceready", onDeviceReady, false);
funcion onDeviceReady(){
	$('#sig1').click(function(){
		navigator.notification.beep(1);
		var nombre_usuario = document.getElementsByName('nombre')[0].value;
		localStorage.setItem("nombre", nombre_usuario);
		navigator.notification.alert("Hola" + nombre_usuario,null,"Bienvenido","ok");
	});
