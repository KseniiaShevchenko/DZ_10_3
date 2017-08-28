
document.getElementById("btn1").onclick=MM;


function MM () {
	var a=document.getElementById('num1').value;

	if (a>=1 && a<=20) {
		alert("Квартира находится в первом подъезде");
	}
	else if (a>20 && a<=48) {
		alert("Квартира находится во втором подъезде");
	}
	else if (a>=49 && a<=90) {
		alert("Квартира находится в третьем подъезде");
	}
	else {
		alert("Вы ввели неправильный номер квартиры");
	}
}

