function mobiliario() {
	addMobiliario();
	var btnMobiliario = document.getElementById('btnMobiliario');
	btnMobiliario.removeAttribute("onclick");
	btnMobiliario.value = "Agregar elemento";
	btnMobiliario.setAttribute("onclick", "addMobiliario()");
}

function addMobiliario() {
	
	var tipoMobiliario = document.createElement("INPUT");
	tipoMobiliario.setAttribute("name", "tipoMobiliario");
	tipoMobiliario.setAttribute("type", "text");
	tipoMobiliario.setAttribute("placeholder", "Tipo mobiliario");
	document.getElementById('datosMobiliario').appendChild(tipoMobiliario);

	var cantidadMobiliario = document.createElement("INPUT");
	cantidadMobiliario.setAttribute("name", "cantidadMobiliario");
	cantidadMobiliario.setAttribute("type", "number");
	cantidadMobiliario.setAttribute("style", "margin-bottom: 2%;");
	cantidadMobiliario.setAttribute("placeholder", "Cantidad mobiliario");
	document.getElementById('datosMobiliario').appendChild(cantidadMobiliario);



}

function mobiliarioAdicional() {
	addMA();
	var btnMA = document.getElementById('btnMA');
	btnMA.removeAttribute("onclick");
	btnMA.value = "Agregar elemento";
	btnMA.setAttribute("onclick", "addMA()");
}

function addMA() {

	var mobiAd = document.createElement("INPUT");
	mobiAd.setAttribute("name", "mobiAd");
	mobiAd.setAttribute("type", "text");
	mobiAd.setAttribute("placeholder", "Mobiliario adicional");
	document.getElementById('datosMobiliarioAdicional').appendChild(mobiAd);

	var tipoAd = document.createElement("INPUT");
	tipoAd.setAttribute("name", "tipoAd");
	tipoAd.setAttribute("type", "text");
	tipoAd.setAttribute("placeholder", "Tipo del mobiliario");
	document.getElementById('datosMobiliarioAdicional').appendChild(tipoAd);

	var cantAd = document.createElement("INPUT");
	cantAd.setAttribute("name", "cantAd");
	cantAd.setAttribute("type", "number");
	cantAd.setAttribute("placeholder", "Cantidad");
	document.getElementById('datosMobiliarioAdicional').appendChild(cantAd);

	var numPerAd = document.createElement("INPUT");
	numPerAd.setAttribute("name", "numPerAd");
	numPerAd.setAttribute("type", "number");
	numPerAd.setAttribute("placeholder", "Número de personas");
	numPerAd.setAttribute("style", "margin-bottom: 2%;");
	document.getElementById('datosMobiliarioAdicional').appendChild(numPerAd);

}

function cristaleria() {
	addCris();
	var btnCris = document.getElementById('btnCris');
	btnCris.removeAttribute("onclick");
	btnCris.value = "Agregar elemento";
	btnCris.setAttribute("onclick", "addCris()");
}

function addCris() {
	var tipoCris = document.createElement("INPUT");
	tipoCris.setAttribute("name", "tipoCris");
	tipoCris.setAttribute("type", "text");
	tipoCris.setAttribute("placeholder", "Tipo de cristalería");
	document.getElementById('datosCris').appendChild(tipoCris);

	var cantidadCris = document.createElement("INPUT");
	cantidadCris.setAttribute("name", "cantidadCris");
	cantidadCris.setAttribute("type", "number");
	cantidadCris.setAttribute("style", "margin-bottom: 2%;");
	cantidadCris.setAttribute("placeholder", "Cantidad");
	document.getElementById('datosCris').appendChild(cantidadCris);
}

function sillas() {
	addSillas();
	var btnSillas = document.getElementById('btnSillas');
	btnSillas.removeAttribute("onclick");
	btnSillas.value = "Agregar elemento";
	btnSillas.setAttribute("onclick", "addSillas()");
}

function addSillas() {
	var tipoSilla = document.createElement("INPUT");
	tipoSilla.setAttribute("name", "tipoSilla");
	tipoSilla.setAttribute("type", "text");
	tipoSilla.setAttribute("placeholder", "Tipo de silla");
	document.getElementById('datosSillas').appendChild(tipoSilla);

	var colorSilla = document.createElement("INPUT");
	colorSilla.setAttribute("name", "colorSilla");
	colorSilla.setAttribute("type", "text");
	colorSilla.setAttribute("placeholder", "Color de silla");
	document.getElementById('datosSillas').appendChild(colorSilla);

	var cantidadSilla = document.createElement("INPUT");
	cantidadSilla.setAttribute("name", "cantidadSilla");
	cantidadSilla.setAttribute("type", "number");
	cantidadSilla.setAttribute("placeholder", "Cantidad");
	document.getElementById('datosSillas').appendChild(cantidadSilla);

	var provSilla = document.createElement("INPUT");
	provSilla.setAttribute("name", "provSilla");
	provSilla.setAttribute("type", "text");
	provSilla.setAttribute("style", "margin-bottom: 2%;");
	provSilla.setAttribute("placeholder", "Proveedor");
	document.getElementById('datosSillas').appendChild(provSilla);
}

function manteleria() {
	addManteleria();
	var btnMant = document.getElementById('btnMant');
	btnMant.removeAttribute("onclick");
	btnMant.value = "Agregar elemento";
	btnMant.setAttribute("onclick", "addManteleria()");
}

function addManteleria() {
	var tipoMant = document.createElement("INPUT");
	tipoMant.setAttribute("name", "tipoMant");
	tipoMant.setAttribute("type", "text");
	tipoMant.setAttribute("placeholder", "Tipo de mantel");
	document.getElementById('datosMant').appendChild(tipoMant);

	var colorMant = document.createElement("INPUT");
	colorMant.setAttribute("name", "colorMant");
	colorMant.setAttribute("type", "text");
	colorMant.setAttribute("placeholder", "Color de mantel");
	document.getElementById('datosMant').appendChild(colorMant);

	var cantidadMant = document.createElement("INPUT");
	cantidadMant.setAttribute("name", "cantidadMant");
	cantidadMant.setAttribute("type", "number");
	cantidadMant.setAttribute("placeholder", "Cantidad");
	document.getElementById('datosMant').appendChild(cantidadMant);

	var provMant = document.createElement("INPUT");
	provMant.setAttribute("name", "provMant");
	provMant.setAttribute("type", "text");
	provMant.setAttribute("style", "margin-bottom: 2%;");
	provMant.setAttribute("placeholder", "Proveedor");
	document.getElementById('datosMant').appendChild(provMant);
}

function servilleta() {
	addServilleta();
	var btnSer = document.getElementById('btnSer');
	btnSer.removeAttribute("onclick");
	btnSer.value = "Agregar elemento";
	btnSer.setAttribute("onclick", "addServilleta()");
}

function addServilleta() {

	var tipoServillerta = document.createElement("INPUT");
	tipoServillerta.setAttribute("name", "tipoServillerta");
	tipoServillerta.setAttribute("type", "text");
	tipoServillerta.setAttribute("placeholder", "Tipo de servilleta");
	document.getElementById('datosSer').appendChild(tipoServillerta);

	var colorServillerta = document.createElement("INPUT");
	colorServillerta.setAttribute("name", "colorServillerta");
	colorServillerta.setAttribute("type", "text");
	colorServillerta.setAttribute("placeholder", "Color de servilleta");
	document.getElementById('datosSer').appendChild(colorServillerta);

	var cantidadServillerta = document.createElement("INPUT");
	cantidadServillerta.setAttribute("name", "cantidadServillerta");
	cantidadServillerta.setAttribute("type", "number");
	cantidadServillerta.setAttribute("placeholder", "Cantidad");
	document.getElementById('datosSer').appendChild(cantidadServillerta);

	var provServillerta = document.createElement("INPUT");
	provServillerta.setAttribute("name", "provServillerta");
	provServillerta.setAttribute("type", "text");
	provServillerta.setAttribute("style", "margin-bottom: 2%;");
	provServillerta.setAttribute("placeholder", "Proveedor");
	document.getElementById('datosSer').appendChild(provServillerta);
}

function banda() {
	addBanda();
	var btnBanda = document.getElementById('btnBanda');
	btnBanda.removeAttribute("onclick");
	btnBanda.value = "Agregar elemento";
	btnBanda.setAttribute("onclick", "addBanda()");
}

function addBanda() {
	var tipoBanda = document.createElement("INPUT");
	tipoBanda.setAttribute("name", "tipoBanda");
	tipoBanda.setAttribute("type", "text");
	tipoBanda.setAttribute("placeholder", "Tipo de Banda");
	document.getElementById('datosBanda').appendChild(tipoBanda);

	var colorBanda = document.createElement("INPUT");
	colorBanda.setAttribute("name", "colorBanda");
	colorBanda.setAttribute("type", "text");
	colorBanda.setAttribute("placeholder", "Color de Banda");
	document.getElementById('datosBanda').appendChild(colorBanda);

	var cantidadBanda = document.createElement("INPUT");
	cantidadBanda.setAttribute("name", "cantidadBanda");
	cantidadBanda.setAttribute("type", "number");
	cantidadBanda.setAttribute("placeholder", "Cantidad");
	document.getElementById('datosBanda').appendChild(cantidadBanda);

	var provBanda = document.createElement("INPUT");
	provBanda.setAttribute("name", "provBanda");
	provBanda.setAttribute("type", "text");
	provBanda.setAttribute("style", "margin-bottom: 2%;");
	provBanda.setAttribute("placeholder", "Proveedor");
	document.getElementById('datosBanda').appendChild(provBanda);
}

function cerveza() {
	var id = sessionStorage.getItem('evento');
	var controller = sessionStorage.getItem('controller');
	chelas = new XMLHttpRequest();
	chelas.open('GET',config['url']+controller+"/getBebida?id="+id+"&cate=CERVEZA");
	chelas.send();
	chelas.onreadystatechange = function(){

		if (chelas.readyState == 4 && chelas.status == 200) {
			var datos = JSON.parse(chelas.responseText);
			var contador = 1;
			document.getElementById('divChela').innerHTML = "";
			if(datos != "no"){
				for (var i = 0; i < datos.length; i++) {
					contador++;
					var input = "<br><br><input type='text' readonly value='"+datos[i].NombreBebida+"'"+
								"name='nombreChela' style='border: none;'>"+
								"<input type='number' placeholder='Cantidad' name='cantidadChela'"+
								"min='1'><br><br><br>";
					document.getElementById('divChela').innerHTML += input;
					
				}

			}else{
				document.getElementById('divChela').innerHTML = "No se encontró ningún registro";
			}			
		}

	}

}

function refresco() {
	var id = sessionStorage.getItem('evento');
	var controller = sessionStorage.getItem('controller');
	chesco = new XMLHttpRequest();
	chesco.open('GET',config['url']+controller+"/getBebida?id="+id+"&cate=REFRESCO");
	chesco.send();

	chesco.onreadystatechange = function(){

		if (chesco.readyState == 4 && chesco.status == 200) {

			var datos = JSON.parse(chesco.responseText);
			var contador = 1;
			document.getElementById('divChesco').innerHTML ="";
			if(datos != "no"){
				for (var i = 0; i < datos.length; i++) {
					contador++;
					var input = "<br><br><input type='text' readonly value='"+datos[i].NombreBebida+"'"+
								"name='nombreChesco' style='border: none;'>"+
								"<select name='cantidadRefresco'>"+
									"<option value='600ml'>600 ml</option>"+
									"<option value='Lata (350ml)'>Lata (350ml)</option>"+
									"<option value='2L'>2 litos</option>"+
								"</select>";
					document.getElementById('divChesco').innerHTML += input;

				}
			}else{
				document.getElementById('divChesco').innerHTML = "No se encontró ningún registro";
			}
		}

	}
}

function btnVerificarDatos(){
	console.clear();
	var datosOperativo = "";
	var datosBebidas = "";
	var tipoMobiliarioArray = [];
	var cantidadMobiliarioArray = [];

	var tipoMobiliario = document.getElementsByName("tipoMobiliario");
	var cantidadMobiliario = document.getElementsByName("cantidadMobiliario");

	var mobiliario = [];

	for (var a = 0; a < tipoMobiliario.length; a++) {
		if (tipoMobiliario[a].value != "" && cantidadMobiliario[a].value != "") {
			tipoMobiliarioArray[a]= tipoMobiliario[a].value;
			cantidadMobiliarioArray[a] = cantidadMobiliario[a].value;
			mobiliario.push(tipoMobiliarioArray[a]+"/"+cantidadMobiliarioArray[a]);
		}else{
			tipoMobiliario[a].value = "NO"
			cantidadMobiliario[a].value = "0";
			mobiliario.push(tipoMobiliario[a].value+"/"+cantidadMobiliario[a].value);			
		}
	}
	
	if (mobiliario.toString() != ""){
		datosOperativo += "&mobiliario="+mobiliario.toString();
	}else{
		datosOperativo += "&mobiliario=JA";
	}

	var mobiAdArray = [];
	var tipoAdArray = [];
	var cantAdArray = [];
	var numPerAdArray = [];

	var mobiAd = document.getElementsByName("mobiAd");
	var tipoAd = document.getElementsByName("tipoAd");
	var cantAd = document.getElementsByName("cantAd");
	var numPerAd = document.getElementsByName("numPerAd");

	var MA = [];

	for (var b = 0; b < mobiAd.length; b++) {
		if (mobiAd[b].value != "" && tipoAd[b].value != "" && cantAd[b].value != "" && numPerAd[b].value != ""){
			mobiAdArray[b]= mobiAd[b].value;
			tipoAdArray[b] = tipoAd[b].value;
			cantAdArray[b] = cantAd[b].value;
			numPerAdArray[b] = numPerAd[b].value;
			MA.push(mobiAdArray[b]+"/"+tipoAdArray[b]+"/"+cantAdArray[b]+"/"+numPerAdArray[b]);
		}else{
			if (mobiAd[b].value != "" && tipoAd[b].value == "" && cantAd[b].value != "" && numPerAd[b].value == ""){
				mobiAdArray[b]= mobiAd[b].value;
				tipoAd[b].value = "NO";
				cantAdArray[b] = cantAd[b].value;
				numPerAd[b].value = "0";
				MA.push(mobiAdArray[b]+"/"+tipoAd[b].value+"/"+cantAdArray[b]+"/"+numPerAd[b].value);
			}else{
				mobiAd[b].value = "NO";
				tipoAd[b].value = "NO";
				cantAd[b].value = "0";
				numPerAd[b].value = "0";
				MA.push(mobiAd[b].value+"/"+tipoAd[b].value+"/"+cantAd[b].value+"/"+numPerAd[b].value);
			}
		}
	}

	if (MA.toString() != ""){
		datosOperativo += "&MA="+MA.toString();
	}else{
		datosOperativo += "&MA=JA";
	}


	var tipoCrisArray = [];
	var cantidadCrisArray = [];

	var tipoCris = document.getElementsByName("tipoCris");
	var cantidadCris = document.getElementsByName("cantidadCris");

	var cris = [];

	for (var c = 0; c < tipoCris.length; c++) {
		if (tipoCris[c].value != "" && cantidadCris[c].value != ""){
			tipoCrisArray[c]= tipoCris[c].value;
			cantidadCrisArray[c] = cantidadCris[c].value;
			cris.push(tipoCrisArray[c]+"/"+cantidadCrisArray[c]);
		}else{
			tipoCris[c].value = "NO";
			cantidadCris[c].value = "0";
			cris.push(tipoCris[c].value+"/"+cantidadCris[c].value);
		}
	}

	if (cris.toString() != ""){
		datosOperativo += "&cris="+cris.toString();
	}else{
		datosOperativo += "&cris=JA";
	}



	var tipoSillaArray = [];
	var colorSillaArray = [];
	var cantidadSillaArray = [];
	var provSillaArray = [];

	var tipoSilla = document.getElementsByName("tipoSilla");
	var colorSilla = document.getElementsByName("colorSilla");
	var cantidadSilla = document.getElementsByName("cantidadSilla");
	var provSilla = document.getElementsByName("provSilla");

	var silla = [];

	for (var d = 0; d < tipoSilla.length; d++) {
		if (tipoSilla[d].value!="" && colorSilla[d].value!="" && cantidadSilla[d].value!="" && provSilla[d].value!=""){
			tipoSillaArray[d]= tipoSilla[d].value;
			colorSillaArray[d] = colorSilla[d].value;
			cantidadSillaArray[d] = cantidadSilla[d].value;
			provSillaArray[d] = provSilla[d].value;
			silla.push(tipoSillaArray[d]+"/"+colorSillaArray[d]+"/"+cantidadSillaArray[d]+"/"+provSillaArray[d]);
		}else{
			if (tipoSilla[d].value!="" && colorSilla[d].value=="" && cantidadSilla[d].value!="" && provSilla[d].value==""){
				tipoSillaArray[d]= tipoSilla[d].value;
				colorSilla[d].value = "Sin descripción";
				cantidadSillaArray[d] = cantidadSilla[d].value;
				provSilla[d].value = "Sin descripción";
				silla.push(tipoSillaArray[d]+"/"+colorSilla[d].value+"/"+cantidadSillaArray[d]+"/"+provSilla[d].value);
			}else{
				tipoSilla[d].value = "NO";
				colorSilla[d].value = "NO";
				cantidadSilla[d].value = "0";
				provSilla[d].value = "NO";
				silla.push(tipoSilla[d].value+"/"+colorSilla[d].value+"/"+cantidadSilla[d].value+"/"+provSilla[d].value);
			}
		}
	}

	if (silla.toString() != ""){
		datosOperativo += "&silla="+silla.toString();
	}else{
		datosOperativo += "&silla=JA";
	}



	var tipoMantArray = [];
	var colorMantArray = [];
	var cantidadMantArray = [];
	var provMantArray = [];

	var tipoMant = document.getElementsByName("tipoMant");
	var colorMant = document.getElementsByName("colorMant");
	var cantidadMant = document.getElementsByName("cantidadMant");
	var provMant = document.getElementsByName("provMant");

	var mantel = [];

	for (var e = 0; e < tipoMant.length; e++) {
		if (tipoMant[e].value!="" && colorMant[e].value!="" && cantidadMant[e].value!="" && provMant[e].value!=""){
			tipoMantArray[e]= tipoMant[e].value;
			colorMantArray[e] = colorMant[e].value;
			cantidadMantArray[e] = cantidadMant[e].value;
			provMantArray[e] = provMant[e].value;
			mantel.push(tipoMantArray[e]+"/"+colorMantArray[e]+"/"+cantidadMantArray[e]+"/"+provMantArray[e]);
		}else{
			if (tipoMant[e].value!="" && colorMant[e].value=="" && cantidadMant[e].value!="" && provMant[e].value=="") {
				tipoMantArray[e]= tipoMant[e].value;
				colorMant[e].value = "Sin descripción";
				cantidadMantArray[e] = cantidadMant[e].value;
				provMant[e].value = "Sin descripción";
				mantel.push(tipoMantArray[e]+"/"+colorMant.value+"/"+cantidadMantArray[e]+"/"+provMant[e].value);
			}else{
				tipoMant[e].value ="NO";
				colorMant[e].value = "NO";
				cantidadMant[e].value="0";
				provMant[e].value = "NO";
				mantel.push(tipoMant[e].value+"/"+colorMant.value+"/"+cantidadMant[e].value+"/"+provMant[e].value);
			}
		}
	}

	if (mantel.toString() != ""){
		datosOperativo += "&mantel="+mantel.toString();
	}else{
		datosOperativo += "&mantel=JA";
	}



	var tipoServilletaArray = [];
	var colorServilletaArray = [];
	var cantidadServilletaArray = [];
	var provServilletaArray = [];

	var tipoServilleta = document.getElementsByName("tipoServilleta");
	var colorServilleta = document.getElementsByName("colorServilleta");
	var cantidadServilleta = document.getElementsByName("cantidadServilleta");
	var provServilleta = document.getElementsByName("provServilleta");

	var ser = [];

	for (var f = 0; f < tipoServilleta.length; f++) {
		if (tipoServilleta[f].value!=""&&colorServilleta[f].value!=""&&
			cantidadServilleta[f].value!=""&&provServilleta[f].value!=""){

			tipoServilletaArray[f]= tipoServilleta[f].value;
			colorServilletaArray[f] = colorServilleta[f].value;
			cantidadServilletaArray[f] = cantidadServilleta[f].value;
			provServilletaArray[f] = provServilleta[f].value;
			ser.push(tipoServilletaArray[f]+"/"+colorServilletaArray[f]+"/"+cantidadServilletaArray[f]+"/"+
						provServilletaArray[f]);
		}else{
			if (tipoServilleta[f].value!=""&&colorServilleta[f].value==""&&
				cantidadServilleta[f].value!=""&&provServilleta[f].value==""){

				tipoServilletaArray[f]= tipoServilleta[f].value;
				colorServilleta[f].value = "Sin descripción";
				cantidadServilletaArray[f] = cantidadServilleta[f].value;
				provServilleta[f].value = "Sin descripción";
				ser.push(tipoServilletaArray[f]+"/"+colorServilleta[f].value+"/"+cantidadServilletaArray[f]+"/"+
							provServilleta[f].value);
			}else{

				tipoServilleta[f].value = "NO";
				colorServilleta[f].value = "NO";
				cantidadServilleta[f].value = "0";
				provServilleta[f].value = "NO";
				ser.push(tipoServilleta[f].value+"/"+colorServilleta[f].value+"/"+cantidadServilleta[f].value+"/"+
							provServilleta[f].value);
			}
		}
	}

	if (ser.toString() != ""){
		datosOperativo += "&ser="+ser.toString();
	}else{
		datosOperativo += "&ser=JA";
	}



	var tipoBandaArray = [];
	var colorBandaArray = [];
	var cantidadBandaArray = [];
	var provBandaArray = [];

	var tipoBanda = document.getElementsByName("tipoBanda");
	var colorBanda = document.getElementsByName("colorBanda");
	var cantidadBanda = document.getElementsByName("cantidadBanda");
	var provBanda = document.getElementsByName("provBanda");

	var banda = [];

	for (var g = 0; g < tipoBanda.length; g++) {
		if (tipoBanda[g].value!="" && colorBanda[g].value!="" && cantidadBanda[g].value!="" && provBanda[g].value!=""){
			tipoBandaArray[g]= tipoBanda[g].value;
			colorBandaArray[g] = colorBanda[g].value;
			cantidadBandaArray[g] = cantidadBanda[g].value;
			provBandaArray[g] = provBanda[g].value;
			banda.push(tipoBandaArray[g]+"/"+colorBandaArray[g]+"/"+cantidadBandaArray[g]+"/"+provBandaArray[g]);
		}else{
			if (tipoBanda[g].value!=""&&colorBanda[g].value==""&&cantidadBanda[g].value!=""&&provBanda[g].value==""){
				tipoBandaArray[g]= tipoBanda[g].value;
				colorBanda[g].value = "Sin descripción";
				cantidadBandaArray[g] = cantidadBanda[g].value;
				provBanda[g].value = "Sin descripción";
				banda.push(tipoBandaArray[g]+"/"+colorBanda[g].value+"/"+cantidadBandaArray[g]+"/"+provBanda[g].value);
			}else{
				tipoBanda[g].value = "NO";
				colorBanda[g].value = "NO";
				cantidadBanda[g].value = "0";
				provBanda[g].value = "NO";
				banda.push(tipoBanda[g].value+"/"+colorBanda[g].value+"/"+cantidadBanda[g].value+"/"+provBanda[g].value);
			}
		}
	}


	if (banda.toString() != ""){
		datosOperativo += "&banda="+banda.toString();
	}else{
		datosOperativo += "&banda=JA";
	}

	if (datosOperativo == "") {
		datosOperativo += "JA"; 
	}



	/*-----------------------------------*/



	var chelaArray = [];
	var cantidadChelaArray = [];

	var chescoArray = [];
	var cantidadChescoArray = [];

	var nombreChela = document.getElementsByName('nombreChela');
	var cantidadChela = document.getElementsByName('cantidadChela');

	var nombreChesco = document.getElementsByName('nombreChesco');
	var cantidadRefresco = document.getElementsByName('cantidadRefresco');

	var cheve = [];
	var chesco = [];
	
	for (var iteChela = 0; iteChela < nombreChela.length; iteChela++) {
		if (cantidadChela[iteChela].value !=""){
			chelaArray[iteChela] = nombreChela[iteChela].value;
			cantidadChelaArray[iteChela] = cantidadChela[iteChela].value;
			cheve.push(chelaArray[iteChela]+"/"+cantidadChelaArray[iteChela]);
		}else{
			chelaArray[iteChela] = nombreChela[iteChela].value;
			cantidadChela[iteChela].value = 1;
			cheve.push(chelaArray[iteChela]+"/"+cantidadChela[iteChela].value);
		}
	}

	for (var iteChesco = 0; iteChesco < nombreChesco.length; iteChesco++) {
		chescoArray[iteChesco] = nombreChesco[iteChesco].value;
		cantidadChescoArray[iteChesco] = cantidadRefresco[iteChesco].value;
		chesco.push(chescoArray[iteChesco]+"/"+cantidadChescoArray[iteChesco]);
	}

	if(cheve.toString() != ""){
		datosBebidas += "&cheve="+cheve.toString();
	}else{
		datosBebidas += "&cheve=JA";
	}

	if(chesco.toString() != ""){
		datosBebidas += "&chesco="+chesco.toString();
	}else{
		datosBebidas += "&chesco=JA";
	}

	if(datosBebidas == ""){
		datosBebidas += "JA";
	}

	
	var sillaFunda = document.getElementById('sillaFunda').value;
	var sillaFundaBanda = document.getElementById('sillaFundaBanda').value;
	var datosDecoracionSillas = "&sillaFunda="+sillaFunda+"&sillaFundaBanda="+sillaFundaBanda;


	var datosChofOpeJO = "";
	var numChofer = document.getElementById('numChofer').value;
	var numOpe = document.getElementById('numOpe').value;
	var numJO = document.getElementById('numJO').value;
	if(numChofer !=""){
		datosChofOpeJO += "numChofer="+numChofer;
	}else{
		numChofer = 0;
		datosChofOpeJO += "numChofer="+numChofer;
	}

	if (numOpe != ""){
		datosChofOpeJO +="&numOpe="+numOpe;
	}else{
		numOpe = 0;
		datosChofOpeJO +="&numOpe="+numOpe;
	}

	if (numJO != ""){
		datosChofOpeJO +="&numJO="+numJO;
	}else{
		numJO = 0;
		datosChofOpeJO +="&numJO="+numJO;
	}
	
	var final = datosChofOpeJO+datosDecoracionSillas+datosOperativo+datosBebidas;
	var id = sessionStorage.getItem('evento');

	var controller = sessionStorage.getItem('controller');
	if (confirm('¿Realmente quieres registrar la información ingresada?')){
		operativoAjax = new XMLHttpRequest();
		operativoAjax.open('POST',config['url']+controller+"/operativoDatos");
		operativoAjax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		operativoAjax.send(final+"&id="+id);
		operativoAjax.onreadystatechange = function(){
			if (operativoAjax.readyState == 4 && operativoAjax.status == 200){
				console.log(operativoAjax.responseText);		
				if(operativoAjax.responseText == "	1"){
					alert("Información registrada con éxito");
					window.location=config['url']+controller;
				}else{
					alert("Ocurrió un error inesperado, intenta más tarde");
				}
			}
				
		}
	}else{
		alert("Verifica la información y luego guarda los datos");
	}
	


}
