function agregarElemento(id){

	var elemento = document.createElement("INPUT");
	elemento.setAttribute("name", "n"+id);
	elemento.setAttribute("id", "n"+id);
	elemento.setAttribute("type", "text");
	elemento.setAttribute("placeholder", "Agrega elemento");
	elemento.setAttribute("style", "margin-bottom: 2%;");
	document.getElementById('txtBebida'+id).appendChild(elemento);
}

function disableBtn1(){
	var btn = document.getElementById('btnBebida1');
	var bebida1;
	if(bebida1 = document.getElementById('bebida1').value != "x"){
		btn.style.display = "block";
		btn.removeAttribute("disabled");
	}
}

function disableBtn2(){
	var btn = document.getElementById('btnBebida2');
	var bebida2;
	if(bebida2 = document.getElementById('bebida2').value != "x"){
		btn.style.display = "block";
		btn.removeAttribute("disabled");
	}
}

function disableBtn3(){
	var btn = document.getElementById('btnBebida3');
	var bebida3;
	if(bebida3 = document.getElementById('bebida3').value != "x"){
		btn.style.display = "block";
		btn.removeAttribute("disabled");
	}
}

function disableBtn4(){
	var btn = document.getElementById('btnBebida4');
	var bebida4;
	if(bebida4 = document.getElementById('bebida4').value != "x"){
		btn.style.display = "block";
		btn.removeAttribute("disabled");
	}
}

function disableBtn5(){
	var btn = document.getElementById('btnBebida5');
	var bebida5;
	if(bebida5 = document.getElementById('bebida5').value != "x"){
		btn.style.display = "block";
		btn.removeAttribute("disabled");
	}
}

function addMenu() {

	var a, b, c, d, e;

	/*TABLA menu*/
	var bocadillos = document.getElementById('bocadillos').value;
	var entremes = document.getElementById('entremes').value;
	var sopaCrema = document.getElementById('sopaCrema').value;
	var platoFuerte = document.getElementById('platoFuerte').value;
	var menuInfantil = document.getElementById('menuInfantil').value;
	var tornaFiestaTipo = document.getElementById('tornaFiestaTipo').value;
	var numTorna = document.getElementById('numTorna').value;
	var descTorna = document.getElementById('descTorna').value;
	var postres = document.getElementById('postres').value;
	var resMenu = "bocadillos="+bocadillos+"&entremes="+entremes+"&sopaCrema="+sopaCrema+"&platoFuerte="+platoFuerte+
				  "&menuInfantil="+menuInfantil+"&tornaFiestaTipo="+tornaFiestaTipo+"&numTorna="+numTorna+
				  "&descTorna="+descTorna+"&postres="+postres;
	/*TABLA pan*/
	var pan = document.getElementById('pan').value;
	var resPan = "&pan="+pan;


	/*TABLA bebida*/
	var resBebidas ="";
	var arrayBebida1 = [];
	var arrayBebida2 = [];
	var arrayBebida3 = [];
	var arrayBebida4 = [];
	var arrayBebida5 = [];
	var bebida1 = document.getElementById('bebida1').value;
	if (bebida1 == "x") {
		bebida1 = "";
	}else{
		var x = document.getElementsByName("n1");
		
		for (a = 0; a < x.length; a++) {
		    if(x[a].value != ""){
		    	console.log(x[a].value);
		      	arrayBebida1.push(x[a].value);

		    }
		}
	
		if(arrayBebida1.length != 0){
			sessionStorage.setItem('arrayBebida1', arrayBebida1);
			resBebidas += "&bebidas1="+bebida1.toUpperCase()+"/"+sessionStorage.getItem('arrayBebida1');
		}else{
			arrayBebida1.push("");
			resBebidas += "&bebidas1="+bebida1.toUpperCase()+"/NO";
		}
		
		//console.clear();
	}


	var bebida2 = document.getElementById('bebida2').value;
	if (bebida2 == "x") {
		bebida2 = "";	
	}else{
		var y = document.getElementsByName("n2");
		
		for (b = 0; b < y.length; b++) {
		    if(y[b].value != ""){
		    	console.log(y[b].value);
	        	arrayBebida2.push(y[b].value);

	        }
	    }
	    if(arrayBebida2.length != 0){
	    	sessionStorage.setItem('arrayBebida2', arrayBebida2);
			resBebidas += "&bebidas2="+bebida2.toUpperCase()+"/"+sessionStorage.getItem('arrayBebida2');
		}else{
			arrayBebida2.push("");
			resBebidas += "&bebidas2="+bebida2.toUpperCase()+"/NO";
		}
		
		//console.clear();
	}


	var bebida3 = document.getElementById('bebida3').value;
	if (bebida3 == "x") {
		bebida3 = "";
	}else{
		var z = document.getElementsByName("n3");
			
		for (c = 0; c < z.length; c++) {
		    if(z[c].value != ""){
		    	console.log(z[c].value);
		      	arrayBebida3.push(z[c].value);

		    }
		}
		
		if(arrayBebida3.length != 0){
			sessionStorage.setItem('arrayBebida3', arrayBebida3);
			resBebidas += "&bebidas3="+bebida3.toUpperCase()+"/"+sessionStorage.getItem('arrayBebida3');
		}else{
			arrayBebida3.push("");
			resBebidas += "&bebidas3="+bebida3.toUpperCase()+"/NO";
		}
			
		//console.clear();
	}

	var bebida4 = document.getElementById('bebida4').value;
	if (bebida4 == "x") {
		bebida4 = "";
	}else{
		var o = document.getElementsByName("n4");
			
		for (d = 0; d < o.length; d++) {
	        if(o[d].value != ""){
	        	console.log(o[d].value);
	        	arrayBebida4.push(o[d].value);

	        }
	    }
    
	    if(arrayBebida4.length != 0){
	    	sessionStorage.setItem('arrayBebida4', arrayBebida4);
			resBebidas += "&bebidas4="+bebida4.toUpperCase()+"/"+sessionStorage.getItem('arrayBebida4');
		}else{
			arrayBebida4.push("");
			resBebidas += "&bebidas4="+bebida4.toUpperCase()+"/NO";
		}
			
		//console.clear();
	}


	var bebida5 = document.getElementById('bebida5').value;
	if (bebida5 == "x") {
		bebida5 = "";
	}else{
		var p = document.getElementsByName("n5");
			
		for (e= 0; e< p.length; e++) {
	        if(p[e].value != ""){
	        	console.log(p[e].value);
	        	arrayBebida5.push(p[e].value);

	        }
	    }
	    
	    if(arrayBebida5.length != 0){
	    	sessionStorage.setItem('arrayBebida5', arrayBebida5);
			resBebidas += "&bebidas5="+bebida5.toUpperCase()+"/"+sessionStorage.getItem('arrayBebida5');
		}else{
			arrayBebida5.push("");
			resBebidas += "&bebidas5="+bebida5.toUpperCase()+"/NO";
		}
			
		//console.clear();

	}


	

	/*TABLA vajilla*/
	var vajilla = document.getElementById('vajilla').value;
	var resVajilla = "&vajilla="+vajilla;


	/*TABLA equipo_cocina*/
	var estufones = document.getElementById('estufones').value;
	var numEstufones = document.getElementById('numEstufones').value;
	var estufa3Quemadores = document.getElementById('estufa3Quemadores').value;
	var numEstufa3Q = document.getElementById('numEstufa3Q').value;
	var pulpo = document.getElementById('pulpo').value;
	var numPulpo = document.getElementById('numPulpo').value;
	var horno = document.getElementById('horno').value;
	var numHorno = document.getElementById('numHorno').value;
	var tanqueGas = document.getElementById('tanqueGas').value;
	var numTanquesGas = document.getElementById('numTanquesGas').value;
	var tablones = document.getElementById('tablones').value;
	var numTablones = document.getElementById('numTablones').value;
	var garrafones = document.getElementById('garrafones').value;
	var numGarrafones = document.getElementById('numGarrafones').value;
	var otros = document.getElementById('otros').value;
	var descOtros = document.getElementById('descOtros').value;
	var otrosFinal = otros+","+descOtros;

	var resEquipo = "&estufones="+estufones+"&numEstufones="+numEstufones+"&estufa3Quemadores="+estufa3Quemadores+
					"&numEstufa3Q="+numEstufa3Q+"&pulpo="+pulpo+"&numPulpo="+numPulpo+"&horno="+horno+"&numHorno="+numHorno+
					"&tanqueGas="+tanqueGas+"&numTanquesGas="+numTanquesGas+"&tablones="+tablones+
					"&numTablones="+numTablones+"&garrafones="+garrafones+"&numGarrafones="+numGarrafones+
					"&otrosFinal="+otrosFinal;

	var idEvento = sessionStorage.getItem('idEventoCreado');
	var controller = sessionStorage.getItem('controller');

	var envio = resMenu+resPan+resVajilla+resEquipo+resBebidas+"&idEvento="+idEvento;
	console.log(envio);

	coinaAjax = new XMLHttpRequest();
	coinaAjax.open('POST',config['url']+controller+"/cocinaInsert");
	coinaAjax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	coinaAjax.send(envio);
	coinaAjax.onreadystatechange = function(){
		if (coinaAjax.readyState == 4 && coinaAjax.status == 200){
			if (coinaAjax.responseText == "	YES"){
				alert('Menú guardado con éxito');
				sessionStorage.setItem('eventoCreado', 0);
				sessionStorage.removeItem('arrayBebida1');
				sessionStorage.removeItem('arrayBebida2');
				sessionStorage.removeItem('arrayBebida3');
				sessionStorage.removeItem('arrayBebida4');
				sessionStorage.removeItem('arrayBebida5');
				console.clear();
				//eventos();
			}else{
				alert('Error inesperado, intente más tarde');
				console.log(coinaAjax.responseText);
			}
		}
	}


	


	

}


// function eventos(){


// 	cal = new XMLHttpRequest();
// 	cal.open('GET',config['url']+"Index/eventos");
// 	cal.send();


// 	cal.onreadystatechange = function(){

		
// 		if (cal.readyState == 4 && cal.status == 200) {

			

// 			document.querySelector('article').innerHTML = cal.responseText;

// 			cargarEventos();
// 		}


// 	}
// }

// function cargarEventos(){

// 	eventosAjax = new XMLHttpRequest();
// 	eventosAjax.open('GET',config['url']+"Index/prueba");
// 	eventosAjax.send();

// 	eventosAjax.onreadystatechange = function(){

// 		if (eventosAjax.readyState == 4 && eventosAjax.status == 200) {

// 			document.getElementById('eventos').innerHTML = eventosAjax.responseText;
// 		}

// 	}
// }
