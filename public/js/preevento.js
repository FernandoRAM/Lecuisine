var sendData = "";
function concepto() {
	addConcepto();
	var btnConcepto = document.getElementById('btnConcepto');
	btnConcepto.removeAttribute("onclick");
	btnConcepto.value = "Agregar otro elemento";
	btnConcepto.setAttribute("onclick", "addConcepto()");
	btnConcepto.setAttribute("id", "btnCon");

	btnCalcula();

}

function addConcepto() {


	var cantidad = document.createElement("INPUT");
	cantidad.setAttribute("name", "cantidad");
	cantidad.setAttribute("id", "cantidad");
	cantidad.setAttribute("type", "number");
	cantidad.setAttribute("placeholder", "Cantidad");
	cantidad.setAttribute("autocomplete", "No");
	cantidad.setAttribute("style", "width: 30%; margin-right: 1%; margin-left:4%");
	document.getElementById('coti').appendChild(cantidad);

	var concepto = document.createElement("INPUT");
	concepto.setAttribute("name", "concepto");
	concepto.setAttribute("id", "concepto");
	concepto.setAttribute("type", "text");
	concepto.setAttribute("placeholder", "Concepto");
	concepto.setAttribute("autocomplete", "No");
	concepto.setAttribute("style", "width: 30%; margin-right: 1%;");
	document.getElementById('coti').appendChild(concepto);

	var precioU = document.createElement("INPUT");
	precioU.setAttribute("name", "precioU");
	precioU.setAttribute("id", "precioU");
	precioU.setAttribute("type", "number");
	precioU.setAttribute("placeholder", "Precio unitario");
	precioU.setAttribute("autocomplete", "No");
	precioU.setAttribute("style", "width: 30%; margin-right: 2%; margin-bottom: .5%");
	document.getElementById('coti').appendChild(precioU);

}

function btnCalcula() {
	var btnCalcular = document.createElement("INPUT");
	btnCalcular.setAttribute("type", "button");
	btnCalcular.setAttribute("value", "Calcular total");
	btnCalcular.setAttribute("name", "btnCalcular");
	btnCalcular.setAttribute("id", "btnCalcular");
	btnCalcular.setAttribute("style", "float: left; margin-left:43%; color: #f5f1eb; background: rgba(219, 131, 2, 1)");
	btnCalcular.setAttribute("onclick", "total();");
	document.getElementById('btnCalcular').appendChild(btnCalcular);
}

function total(){
	var cantidadArray = [];
	var conceptoArray = [];
	var precioArray = [];
	var arrayFinal = [];
	var subtotal = 0;

	var cantidad = document.getElementsByName("cantidad");
	var concepto = document.getElementsByName("concepto");
	var precioU = document.getElementsByName("precioU");

	for (var a = 0; a < cantidad.length; a++) {
		if (cantidad[a].value != "" && precioU[a].value !="" &&
			cantidad[a].value > 0 && precioU[a].value > 0) {

			cantidadArray[a] = cantidad[a].value;
			conceptoArray[a] = concepto[a].value;
			precioArray[a] = precioU[a].value;

			arrayFinal.push(conceptoArray[a]+"/"+cantidadArray[a]+"/"+precioArray[a]);

			subtotal += (cantidad[a].value*precioU[a].value);




		}else{
			if (concepto[a].value !=""){
				conceptoArray[a] = concepto[a].value;
				cantidadArray[a] = 0;
				precioArray[a] = 0;
			}else{
				cantidadArray[a] = 0;
				conceptoArray[a] = 0;
				precioArray[a] = 0;

			}
		}
	}
	var sub = "Subtotal:<input type='number' id='idSub' disabled='disabled' style='width: 30%; margin-bottom: 1%;"+
				"text-align:right; margin-left:1.8%;'>";
	document.getElementById('sub').innerHTML =sub;

	var iva = "IVA ("+config['iva']+"%):<input type='number' id='idIva' disabled='disabled' style='width: 30%;"+
					" margin-bottom: 1%; text-align:right'>";
	document.getElementById('iva').innerHTML =iva;


	var total = "Total:<input type='number' id='idTo' disabled='disabled' style='width: 30%;"+
					" margin-bottom: 1%; margin-left:4.2%; text-align:right'>";
	document.getElementById('total').innerHTML =total;

	var finSub = document.getElementById("idSub").value=subtotal;
	var imp = document.getElementById("idIva").value=(subtotal*(config['iva']/100));
	var finTo = document.getElementById("idTo").value = finSub+imp;

	if(arrayFinal.toString()!=""){
		 sendData += "&cotizado="+arrayFinal.toString();
	}else{
		 sendData += "&cotizado=NO";
	}
	//console.log(sendData);

}



function insertarPreEvento() {
	var fechaEvento = document.getElementById('fechaEvento').value;
	var vendedor = document.getElementById('vendedor').value;
	var tipoCliente = document.getElementById('tipoCliente').value;
	var contacto = document.getElementById('contacto').value;
	var estadoCiudad = document.getElementById('estadoCiudad').value;
	var empresa = document.getElementById('empresa').value;
	var tipoEmpresa = document.getElementById('tipoEmpresa').value;
	var telContacto = document.getElementById('telContacto').value;
	var telContacto2 = document.getElementById('telContacto2').value;
	var email = document.getElementById('email').value;
	var email2 = document.getElementById('email2').value;
	var tipoEvento = document.getElementById('tipoEvento').value;
	var lugar = document.getElementById('lugar').value;
	var calleNumero = document.getElementById('calleNumero').value;
	var colonia = document.getElementById('colonia').value;
	var municipio = document.getElementById('municipio').value;
	var estado = document.getElementById('estado').value;
	var tel = document.getElementById('tel').value;
	var entreCalles = document.getElementById('entreCalles').value;
	var codigoPostal = document.getElementById('codigoPostal').value;
	var totalPersonas = document.getElementById('totalPersonas').value;
	var adultos = document.getElementById('adultos').value;
	var ninos = document.getElementById('ninos').value;
	var horario = document.getElementById('horario').value;
	var hrServicio = document.getElementById('hrServicio').value;
	var fechaCita = document.getElementById('fechaCita').value;
	var hrCita = document.getElementById('hrCita').value;
	var metodoCita = document.getElementById('metodoCita').value;
	var hrExtra = document.getElementById('hrExtra').value;
	var costoHr = document.getElementById('costoHr').value;
	if(document.getElementById("idSub") && document.getElementById("idIva") &&
		document.getElementById("idTo")){
		var finSub = document.getElementById("idSub").value;
		var imp = document.getElementById("idIva").value;
		var finTo = document.getElementById("idTo").value;
	}


	var link;


	if(fechaEvento == "" || vendedor == "" || tipoEvento == ""){
		alert("Agregue valor a fecha de evento, vendedor y tipo de evento para continuar");
	}else{
		if (tipoCliente == "" || contacto == "" || estadoCiudad == "" ||
			empresa == "" || tipoEmpresa == "" || telContacto == "" || telContacto2 == "" || email == "" ||
			email2 == "" || lugar == "" || calleNumero == "" || colonia == "" ||
			municipio == "" || estado == "" || tel == "" || entreCalles == "" || codigoPostal == "" ||
			totalPersonas == "" || adultos == "" || ninos == "" || horario == "" || hrServicio == "" ||
			fechaCita == "" || hrCita == "" || metodoCita == "" || hrExtra == "" || costoHr == ""){

			link = "fechaEvento="+fechaEvento+"&vendedor="+vendedor+"&tipoCliente="+tipoCliente+"&contacto="+contacto+
					"&estadoCiudad="+estadoCiudad+"&empresa="+empresa+"&tipoEmpresa="+tipoEmpresa+
					"&telContacto="+telContacto+"&telContacto2="+telContacto2+"&email="+email+
					"&email2="+email2+"&tipoEvento="+tipoEvento+"&lugar="+lugar+
					"&calleNumero="+calleNumero+"&colonia="+colonia+"&municipio="+municipio+
					"&estado="+estado+"&tel="+tel+"&entreCalles="+entreCalles+"&codigoPostal="+codigoPostal+
					"&totalPersonas="+totalPersonas+"&adultos="+adultos+"&ninos="+ninos+"&horario="+horario+
					"&hrServicio="+hrServicio+"&fechaCita="+fechaCita+"&hrCita="+hrCita+
					"&metodoCita="+metodoCita+"&hrExtra="+hrExtra+"&costoHr="+costoHr+"&finSub="+finSub+"&finTo="+finTo+
					"&cotizado="+sendData;
			if (confirm("Hay campos vacíos ¿desea continuar?")){
				enviarAjax(link, fechaEvento, vendedor, tipoEvento);
			}
		}else{
			link = "fechaEvento="+fechaEvento+"&vendedor="+vendedor+"&tipoCliente="+tipoCliente+"&contacto="+contacto+
					"&estadoCiudad="+estadoCiudad+"&empresa="+empresa+"&tipoEmpresa="+tipoEmpresa+
					"&telContacto="+telContacto+"&telContacto2="+telContacto2+"&email="+email+
					"&email2="+email2+"&tipoEvento="+tipoEvento+"&lugar="+lugar+
					"&calleNumero="+calleNumero+"&colonia="+colonia+"&municipio="+municipio+
					"&estado="+estado+"&tel="+tel+"&entreCalles="+entreCalles+"&codigoPostal="+codigoPostal+
					"&totalPersonas="+totalPersonas+"&adultos="+adultos+"&ninos="+ninos+"&horario="+horario+
					"&hrServicio="+hrServicio+"&fechaCita="+fechaCita+"&hrCita="+hrCita+
					"&metodoCita="+metodoCita+"&hrExtra="+hrExtra+"&costoHr="+costoHr+"&finSub="+finSub+"&finTo="+finTo+
					sendData;
			enviarAjax(link, fechaEvento, vendedor, tipoEvento);
		}
	}
}

function enviarAjax(link, fechaEvento, vendedor, tipoEvento) {
	var controller = sessionStorage.getItem('controller');
	preAjax = new XMLHttpRequest();
	preAjax.open('POST',config['url']+controller+"/preEvento");
	preAjax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	preAjax.send(link);
	preAjax.onreadystatechange = function(){
		if (preAjax.readyState == 4 && preAjax.status == 200){
			console.log(preAjax.responseText);
			if (preAjax.responseText == "	1") {
				alert("Información guardada con éxito");
				// id(fechaEvento, vendedor, tipoEvento);
			}else if (preAjax.responseText == "	10") {
				alert("Información guardada con éxito (se anexa cotizado)");
			}else{
				alert("Error inesperado, intente más tarde");
			}
		}
	}
}

 function id(fechaEvento, vendedor, tipoEvento) {
 	var controller = sessionStorage.getItem('controller');
 	var link = "fechaEvento="+fechaEvento+"&vendedor="+vendedor+"&tipoEvento="+tipoEvento;
	preAjax = new XMLHttpRequest();
	preAjax.open('POST',config['url']+controller+"/selectIdPreevento");
	preAjax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	preAjax.send(link);
	preAjax.onreadystatechange = function(){
		if (preAjax.readyState == 4 && preAjax.status == 200){
			var datos = JSON.parse(preAjax.responseText);
			console.log(datos);
			if (datos != "") {
				sessionStorage.setItem('idPreevento', datos.idPreevento);
				sessionStorage.setItem('eventoCreado', 1);
				pBitacora();
			}else{
				alert("Error inesperado, intente más tarde");
			}
		}
	}
 }
