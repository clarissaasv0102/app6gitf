// JavaScript Document
$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
		$('#come').tap(function(){
			navigator.notification.vibrate(300);
		}); //tap sonar
		$('#cua').tap(function(){
			navigator.notification.vibrate(300);
		}); //tap vibrar
		$('#sui').tap(function(){
			navigator.notification.vibrate(300);
		}); //tap vibrar
		$('#hu').tap(function(){
			navigator.notification.vibrate(300);
		}); //tap vibrar
	},false); // cierre deviceready
}); //cierre del ready