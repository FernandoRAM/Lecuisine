function showNav() {
	navAjax = new XMLHttpRequest();
	navAjax.open('GET',config['url']+"Index/tabs");
	navAjax.send();
	navAjax.onreadystatechange = function(){
		if (navAjax.readyState == 4 && navAjax.status == 200){
			document.querySelector('section').innerHTML= navAjax.responseText;
		}
	}
}
function tabsEventos() {
	navAjax = new XMLHttpRequest();
	navAjax.open('GET',config['url']+"Index/tabsEventos");
	navAjax.send();
	navAjax.onreadystatechange = function(){
		if (navAjax.readyState == 4 && navAjax.status == 200){
			document.querySelector('section').innerHTML= navAjax.responseText;
		}
	}
}
function tabsCalendario() {
	navAjax = new XMLHttpRequest();
	navAjax.open('GET',config['url']+"Index/tabsCalendario");
	navAjax.send();
	navAjax.onreadystatechange = function(){
		if (navAjax.readyState == 4 && navAjax.status == 200){
			document.querySelector('section').innerHTML= navAjax.responseText;
		}
	}
}

function crearEvento() {
	CE = new XMLHttpRequest();
	CE.open('GET',config['url']+"Index/CE");
	CE.send();
	CE.onreadystatechange = function(){
		if (CE.readyState == 4 && CE.status == 200){
			document.querySelector('article').innerHTML= CE.responseText;
		}
	}
}

function calendario(){


	cal = new XMLHttpRequest();
	cal.open('GET',config['url']+"Index/calendario");
	cal.send();


	cal.onreadystatechange = function(){

		
		if (cal.readyState == 4 && cal.status == 200) {

		


			document.querySelector('article').innerHTML = cal.responseText;
		}


	}
}
function eventos(){


	cal = new XMLHttpRequest();
	cal.open('GET',config['url']+"Index/eventos");
	cal.send();


	cal.onreadystatechange = function(){

		
		if (cal.readyState == 4 && cal.status == 200) {


			document.querySelector('article').innerHTML = cal.responseText;

			cargarPreeventos();
		}
	}
}function eventos2(){


	cal = new XMLHttpRequest();
	cal.open('GET',config['url']+"Index/eventos");
	cal.send();


	cal.onreadystatechange = function(){

		
		if (cal.readyState == 4 && cal.status == 200) {


			document.querySelector('article').innerHTML = cal.responseText;

			cargarEventos();
		}
	}
}

function pPruebaMenu(){

	pruebaMenuAjax = new XMLHttpRequest();
	pruebaMenuAjax.open('GET',config['url']+"Index/pPruebaMenu");
	pruebaMenuAjax.send();

	pruebaMenuAjax.onreadystatechange = function(){

			if (pruebaMenuAjax.readyState == 4 && pruebaMenuAjax.status == 200) {
				var pruebaMenu = document.getElementById("pruebaMenu");
				var info = document.getElementById("info");
				var bitacora = document.getElementById("bitacora");

				if (info.className = "active") {
					info.className = "no"
				}
				if (bitacora.className = "active") {
					bitacora.className = "no"
				}
    			

    			if (pruebaMenu.className = "no") {

    				pruebaMenu.className ="";
    				pruebaMenu.className+="active";
    			}
    			document.querySelector('article').innerHTML = pruebaMenuAjax.responseText;

		}

	}

}
function verEv() {
	EV = new XMLHttpRequest();
	EV.open('GET',config['url']+"Index/EV");
	EV.send();
	EV.onreadystatechange = function(){
		if (EV.readyState == 4 && EV.status == 200){
			document.querySelector('article').innerHTML = EV.responseText;
		}
	}
}

function verPreev() {
	EV = new XMLHttpRequest();
	EV.open('GET',config['url']+"Index/PreE");
	EV.send();
	EV.onreadystatechange = function(){
		if (EV.readyState == 4 && EV.status == 200){
			document.querySelector('article').innerHTML = EV.responseText;
			
		}
	}
}


function pInfo(){
	var id = sessionStorage.getItem('Preevento');
	cocina = new XMLHttpRequest();
	cocina.open('GET',config['url']+"Index/pInfo");
	cocina.send();

	cocina.onreadystatechange = function(){

			if (cocina.readyState == 4 && cocina.status == 200) {
				var menu = document.getElementById("pruebaMenu");
				var info = document.getElementById("info");
				var bitacora = document.getElementById("bitacora");

				if (menu.className == "active") {
					menu.className  = "no";
				}
    			if (bitacora.className == "active") {
					bitacora.className  = "no";
				}

    			if (info.className == "no") {
    				info.className ="";

    				info.className+="active";
    			}

    			verPreevento(id);
    			

			

			document.querySelector('article').innerHTML = cocina.responseText;
		}

	}

}
function pEventoOp(){

	var id = sessionStorage.getItem('evento');
	verEvento(id);


}

function pEventoOp2(){

	cocina = new XMLHttpRequest();
	cocina.open('GET',config['url']+"Operativo/servicio");
	cocina.send();

	cocina.onreadystatechange = function(){

			if (cocina.readyState == 4 && cocina.status == 200) {
				var evento = document.getElementById("evento");
				var evento2 = document.getElementById("evento2");

				if (evento.className == "active") {
					evento.className  = "no";
				}
    			

    			if (evento2.className = "no") {
    				evento2.className ="";

    				evento2.className+="active";
    			}
    			

			

			document.querySelector('article').innerHTML = cocina.responseText;
		}

	}

}

function pEventoNo(){
	var preEvento = document.getElementById("preEv");
	var eventosConfirmados = document.getElementById("EventosC");

	if (eventosConfirmados.className == "active") {
					eventosConfirmados.className  = "no";
				}
    			

    			if (preEvento.className == "no") {
    				preEvento.className ="";

    				preEvento.className+="active";
    			}
}

function pEventoSi(){
	var preEvento = document.getElementById("preEv");
	var eventosConfirmados = document.getElementById("EventosC");

	if (preEvento.className == "active") {
					preEvento.className  = "no";
				}
    			

    			if (eventosConfirmados.className == "no") {
    				eventosConfirmados.className ="";

    				eventosConfirmados.className += "active";
    			}
}
	
function cargarPreeventos(){


	eventosAjax = new XMLHttpRequest();
	eventosAjax.open('GET',config['url']+"Index/prueba");
	eventosAjax.send();

	eventosAjax.onreadystatechange = function(){

		if (eventosAjax.readyState == 4 && eventosAjax.status == 200) {

			document.getElementById('eventos').innerHTML = eventosAjax.responseText;
			console.log(eventosAjax.responseText);
		}

	}
}
function cargarEventos(){

	eventosAjax = new XMLHttpRequest();
	eventosAjax.open('GET',config['url']+"Index/prueba2");
	eventosAjax.send();

	eventosAjax.onreadystatechange = function(){

		if (eventosAjax.readyState == 4 && eventosAjax.status == 200) {

			document.getElementById('eventos').innerHTML = eventosAjax.responseText;
			console.log(eventosAjax.responseText);
		}

	}
}

function verPreevento(id){
	console.clear();
	verPreev();
	navPreevento();
	var controller = sessionStorage.getItem('controller');

	switch(controller){

		case "Ventas":
			sessionStorage.setItem('Preevento', id);
			eventoAjax = new XMLHttpRequest();
			eventoAjax.open('GET',config['url']+"Ventas/verPreevento?id="+id);
			eventoAjax.send();
			eventoAjax.onreadystatechange = setTimeout(function(){
					
				if (eventoAjax.readyState == 4 && eventoAjax.status == 200) {
					//console.log(eventoAjax.responseText);
					info = JSON.parse(eventoAjax.responseText);
					console.log(info);
					
					infoPre(info);

					//document.getElementById('fechaEvento').value = info[0].fechaEvento;
					
				}
			},500);

			break;
	}


}

function infoPre(info){

	if(info['cotizacion']){
		
		for(var i = 0 ; i < info['cotizacion'].length ; i++){

			var cantidad = document.createElement("INPUT");
			cantidad.setAttribute("name", "cantidad");
			cantidad.setAttribute("id", "cantidad"+i);
			cantidad.setAttribute("type", "number");
			cantidad.setAttribute("placeholder", "Cantidad");
			cantidad.setAttribute("autocomplete", "No");
			cantidad.setAttribute("style", "width: 30%; margin-right: 1%; margin-left:4%"); 
			
			document.getElementById('coti').appendChild(cantidad);

			var concepto = document.createElement("INPUT");
			concepto.setAttribute("name", "concepto");
			concepto.setAttribute("id", "concepto"+i);
			concepto.setAttribute("type", "text");
			concepto.setAttribute("placeholder", "Concepto");
			concepto.setAttribute("autocomplete", "No");
			concepto.setAttribute("style", "width: 30%; margin-right: 1%;");
			document.getElementById('coti').appendChild(concepto);

			var precioU = document.createElement("INPUT");
			precioU.setAttribute("name", "precioU");
			precioU.setAttribute("id", "precioU"+i);
			precioU.setAttribute("type", "number");
			precioU.setAttribute("placeholder", "Precio unitario");
			precioU.setAttribute("autocomplete", "No");
			precioU.setAttribute("style", "width: 30%; margin-right: 2%; margin-bottom: .5%");
			document.getElementById('coti').appendChild(precioU);
		}

		

	document.getElementById('adultos').value = info['info'][0].adultos;
	document.getElementById('calleNumero').value = info['info'][0].calleNumero;
	document.getElementById('codigoPostal').value = info['info'][0].codigoPostal;
	document.getElementById('colonia').value = info['info'][0].colonia;
	document.getElementById('contacto').value = info['info'][0].contacto;
	document.getElementById('costoHr').value = info['info'][0].costoHr;
	document.getElementById('email').value = info['info'][0].email;
	document.getElementById('email2').value = info['info'][0].email2;
	document.getElementById('empresa').value = info['info'][0].empresa;
	document.getElementById('entreCalles').value = info['info'][0].entreCalles;
	document.getElementById('estado').value = info['info'][0].estado;
	document.getElementById('estadoCiudad').value = info['info'][0].estadoCiudad;
	document.getElementById('fechaCita').value = info['info'][0].fechaCita;
	document.getElementById('fechaEvento').value = info['info'][0].fechaEvento;
	document.getElementById('horario').value = info['info'][0].horario;
	document.getElementById('hrCita').value = info['info'][0].hrCita;
	document.getElementById('hrExtra').value = info['info'][0].hrExtra;
	document.getElementById('hrServicio').value = info['info'][0].hrServicio;
	document.getElementById('lugar').value = info['info'][0].lugar;
	document.getElementById('metodoCita').value = info['info'][0].metodoCita;
	document.getElementById('municipio').value = info['info'][0].municipio;
	document.getElementById('ninos').value = info['info'][0].ninos;
	document.getElementById('tel').value = info['info'][0].tel;
	document.getElementById('telContacto').value = info['info'][0].telContacto;
	document.getElementById('telContacto2').value = info['info'][0].telContacto2;
	document.getElementById('tipoCliente').value = info['info'][0].tipoCliente;
	document.getElementById('tipoEmpresa').value = info['info'][0].tipoEmpresa;
	document.getElementById('tipoEvento').value = info['info'][0].tipoEvento;
	document.getElementById('totalPersonas').value = info['info'][0].totalPersonas;
	document.getElementById('vendedor').value = info['info'][0].vendedor;

	for (var j=0; j < info['cotizacion'].length; j++) {
			
			document.getElementById('cantidad'+j).value += info['cotizacion'][j].Cantidad;
			document.getElementById('concepto'+j).value += info['cotizacion'][j].Descripcion;
			document.getElementById('precioU'+j).value += info['cotizacion'][j].PrecioUnitario;
		}


	//console.log(info['cotizacion'].length);



	}else{

		document.getElementById('adultos').value = info[0].adultos;
		document.getElementById('calleNumero').value = info[0].calleNumero;
		document.getElementById('codigoPostal').value = info[0].codigoPostal;
		document.getElementById('colonia').value = info[0].colonia;
		document.getElementById('contacto').value = info[0].contacto;
		document.getElementById('costoHr').value = info[0].costoHr;
		document.getElementById('email').value = info[0].email;
		document.getElementById('email2').value = info[0].email2;
		document.getElementById('empresa').value = info[0].empresa;
		document.getElementById('entreCalles').value = info[0].entreCalles;
		document.getElementById('estado').value = info[0].estado;
		document.getElementById('estadoCiudad').value = info[0].estadoCiudad;
		document.getElementById('fechaCita').value = info[0].fechaCita;
		document.getElementById('fechaEvento').value = info[0].fechaEvento;
		document.getElementById('horario').value = info[0].horario;
		document.getElementById('hrCita').value = info[0].hrCita;
		document.getElementById('hrExtra').value = info[0].hrExtra;
		document.getElementById('hrServicio').value = info[0].hrServicio;
		document.getElementById('lugar').value = info[0].lugar;
		document.getElementById('metodoCita').value = info[0].metodoCita;
		document.getElementById('municipio').value = info[0].municipio;
		document.getElementById('ninos').value = info[0].ninos;
		document.getElementById('tel').value = info[0].tel;
		document.getElementById('telContacto').value = info[0].telContacto;
		document.getElementById('telContacto2').value = info[0].telContacto2;
		document.getElementById('tipoCliente').value = info[0].tipoCliente;
		document.getElementById('tipoEmpresa').value = info[0].tipoEmpresa;
		document.getElementById('tipoEvento').value = info[0].tipoEvento;
		document.getElementById('totalPersonas').value = info[0].totalPersonas;
		document.getElementById('vendedor').value = info[0].vendedor;
	}

}


function verEvento(id){

	console.clear();
	verEv();
	navEvento();
	var controller = sessionStorage.getItem('controller');



	switch(controller){

		case "operativo":

			sessionStorage.setItem('evento', id);

			eventoAjax = new XMLHttpRequest();
			eventoAjax.open('GET',config['url']+"Operativo/verEvento?id="+id);
			eventoAjax.send();


			eventoAjax.onreadystatechange = setTimeout(function(){
					
				if (eventoAjax.readyState == 4 && eventoAjax.status == 200) {
					info = JSON.parse(eventoAjax.responseText);
					console.log(info);

					document.getElementById('fechaEvento').value = info[0].fechaEvento;
					document.getElementById('vendedor').value = info[0].nombreVendedor;
					document.getElementById('comensales').value = info[0].numAdultos;
					document.getElementById('margen').value = info[0].margen;
					document.getElementById('ninios').value = info[0].numNi_os;
					document.getElementById('supervisor').value = info[0].Supervisor;
					document.getElementById('capitan').value = info[0].CapitanEnJefe;
					document.getElementById('meseros').value = info[0].NumMeseros;

					//horas
					document.getElementById('horaInicioHorario').value = info[0].hrInicioEvento;
					document.getElementById('horaFinHorario').value = info[0].hrFinEvento;
					document.getElementById('horaInicioRecepcion').value = info[0].hrInicioRecepcionEvento;
					document.getElementById('horaFinRecepcion').value = info[0].hrFinRecepcionEvento;
					document.getElementById('horaInicioCoctel').value = info[0].hrInicioCoctelEvento;
					document.getElementById('horaFinCoctel').value = info[0].hrFinCoctelEvento;
					document.getElementById('horaInicioBanquetes').value = info[0].hrInicioBanqueteEvento;
					document.getElementById('horaFinBanquetes').value = info[0].hrFinalBanqueteEvento;
					document.getElementById('horaInicioTF').value = info[0].tornaInicio;
					document.getElementById('horaFinTF').value = info[0].tornaFin;
					document.getElementById('horaInicioOtros').value = info[0].hrInicioOtroEvento;
					document.getElementById('horaFinOtros').value = info[0].hrFinalOtroEvento;

					//Lugar Evento
					document.getElementById('lugarEvento').value = info[0].lugarEvento;
					document.getElementById('calleConNum').value = info[0].direccionEvento;
					document.getElementById('colonia').value = info[0].colonia;
					document.getElementById('municipio').value = info[0].municipio;
					document.getElementById('estado').value = info[0].estado;
					document.getElementById('telLugarEvento').value = info[0].telLugarEvento;
					document.getElementById('tipoEvento').value = info[0].tipoEvento;
					document.getElementById('tipoServicio').value = info[0].tipoServicio;

					//Equipo y premontaje (horas)
					document.getElementById('hrServicio').value = info[0].horasServicio;
					document.getElementById('fechaEntregaEquipo').value = info[0].FechaEntregaEquipo;
					document.getElementById('horarioEntregaEquipo').value = info[0].HorarioEntregaEquipo;
					document.getElementById('fechaPreMontaje').value = info[0].FechaPreMontaje;
					document.getElementById('horarioPreMontaje').value = info[0].HorarioPreMontaje;
					document.getElementById('numPer').value = info[0].NumPersonasPreMontaje;
					document.getElementById('fechaMontaje').value = info[0].FechaMontaje;
					document.getElementById('horarioMontaje').value = info[0].HoraMontaje;

					//vajilla
					document.getElementById('tipoVajilla').value = info[0].NombreTipoVajilla;

					//equipo (cantidad)
					document.getElementById('numEstufones').value = info[0].Cantidad;
					document.getElementById('numPulpo').value = info[2].Cantidad;
					document.getElementById('numTanquesGas').value = info[4].Cantidad;
					document.getElementById('numGarrafones').value = info[6].Cantidad;
					document.getElementById('numEstufa3Q').value = info[1].Cantidad;
					document.getElementById('numHorno').value = info[3].Cantidad;
					document.getElementById('numTablones').value = info[5].Cantidad;
					document.getElementById('descOtros').value = info[7].Cantidad;

					//menú
					document.getElementById('bocadillos').value = info[0].bocadillos;
					document.getElementById('sopaCrema').value = info[0].SopaOCrema;
					document.getElementById('platoFuerte').value = info[0].platoFuerte;
					document.getElementById('entremes').value = info[0].entremes;
					document.getElementById('menuInfantil').value = info[0].MenuInfantil;
					document.getElementById('postres').value = info[0].postre;
					document.getElementById('tornaFiestaTipo').value = info[0].TipoTornaFiesta;
					document.getElementById('numTorna').value = info[0].NumPersonasTF;
					document.getElementById('descTorna').value = info[0].DescripcionTF;
					document.getElementById('pan').value = info[0].NombrePan;

					sessionStorage.setItem("idMenu", info[0].idMenu);
									
					//bebidas
					
					var idM = sessionStorage.getItem('idMenu');
					bebAjax = new XMLHttpRequest();
					bebAjax.open('GET',config['url']+"Operativo/getBeb?id="+idM);
					bebAjax.send();
					bebAjax.onreadystatechange = function(){
						if (bebAjax.readyState == 4 && bebAjax.status == 200){

							bebidas = JSON.parse(bebAjax.responseText);
							console.log(bebidas);

							for (var i = 0; i < bebidas.length; i++) {
								if (bebidas[i].CategoriaBebida == "AGUA DE SABOR") {

									document.getElementById('aguas').value = bebidas[i].NombreBebida;
								}
								if (bebidas[i].CategoriaBebida == "REFRESCO") {

									document.getElementById('refresc').value = bebidas[i].NombreBebida;
								}
								if (bebidas[i].CategoriaBebida == "DESTILADOS") {

									document.getElementById('destil').value = bebidas[i].NombreBebida;
								}
								if (bebidas[i].CategoriaBebida == "JUGOS") {

									document.getElementById('jugo').value = bebidas[i].NombreBebida;
								}
								if (bebidas[i].CategoriaBebida == "COCTEL") {

									document.getElementById('coct').value = bebidas[i].NombreBebida;
								}
								if (bebidas[i].CategoriaBebida == "CERVEZA") {

									document.getElementById('cervez').value = bebidas[i].NombreBebida;
								}
							}
							
						}
					}

				}
			},100);

			break;

		case "ventas":

			sessionStorage.setItem('evento', id);

			eventoAjax = new XMLHttpRequest();
			eventoAjax.open('GET',config['url']+"Ventas/verEvento?id="+id);
			eventoAjax.send();
			eventoAjax.onreadystatechange = setTimeout(function(){
					
				if (eventoAjax.readyState == 4 && eventoAjax.status == 200) {
					info = JSON.parse(eventoAjax.responseText);
					console.log(info);

					document.getElementById('fechaEvento').value = info[0].fechaEvento;
					document.getElementById('vendedor').value = info[0].nombreVendedor;
					document.getElementById('contratante').value = info[0].nombreContratante;
					document.getElementById('contactoInvolucrado').value = info[0].ContactoInvolucrado;
					document.getElementById('empresa').value = info[0].Empresa;
					document.getElementById('telContacto').value = info[0].telContacto;
					document.getElementById('telContacto').value = info[0].telContacto;
					document.getElementById('telContacto2').value = info[0].telContactoSecundario;
					document.getElementById('mail').value = info[0].correo;
					document.getElementById('mail2').value = info[0].correoSecundario;

					document.getElementById('lugarEvento').value = info[0].lugarEvento;
					document.getElementById('calleConNum').value = info[0].direccionEvento;
					document.getElementById('colonia').value = info[0].colonia;
					document.getElementById('municipio').value = info[0].municipio;
					document.getElementById('estado').value = info[0].estado;
					document.getElementById('telLugarEvento').value = info[0].telLugarEvento;
					document.getElementById('entreCalles').value = info[0].EntreCalles;

					document.getElementById('tipoEvento').value = info[0].tipoEvento;
					document.getElementById('numTiempos').value = info[0].numTiempos;
					document.getElementById('tornaFiesta').value = info[0].tornaFiesta;
					document.getElementById('tipoServicio').value = info[0].tipoServicio;

					document.getElementById('totalPersonas').value = info[0].totalPersonas;
					document.getElementById('totalAdultos').value = info[0].numAdultos;
					document.getElementById('margen').value = info[0].margen;
					document.getElementById('kids').value = info[0].numNi_os;

					document.getElementById('horaInicioHorario').value = info[0].hrInicioEvento;
					document.getElementById('horaFinHorario').value = info[0].hrFinEvento;
					document.getElementById('horaInicioRecepcion').value = info[0].hrInicioRecepcionEvento;
					document.getElementById('horaFinRecepcion').value = info[0].hrFinRecepcionEvento;
					document.getElementById('horaInicioCoctel').value = info[0].hrInicioCoctelEvento;
					document.getElementById('horaFinCoctel').value = info[0].hrFinCoctelEvento;
					document.getElementById('horaInicioBanquetes').value = info[0].hrInicioBanqueteEvento;
					document.getElementById('horaFinBanquetes').value = info[0].hrFinalBanqueteEvento;
					document.getElementById('horaInicioTF').value = info[0].tornaInicio;
					document.getElementById('horaFinTF').value = info[0].tornaFin;
					document.getElementById('horaInicioOtros').value = info[0].hrInicioOtroEvento;
					document.getElementById('horaFinOtros').value = info[0].hrFinalOtroEvento;

					document.getElementById('HorasServicio').value = info[0].hrServicio;

					document.getElementById('fechaEntregaEquipo').value = info[0].FechaEntregaEquipo;
					document.getElementById('horarioEntregaEquipo').value = info[0].HorarioEntregaEquipo;
					document.getElementById('fechaPreMontaje').value = info[0].FechaPreMontaje;
					document.getElementById('horarioPreMontaje').value = info[0].HorarioPreMontaje;
					document.getElementById('numPer').value = info[0].NumPersonasPreMontaje;
					document.getElementById('fechaMontaje').value = info[0].FechaMontaje;
					document.getElementById('horarioMontaje').value = info[0].HoraMontaje;

					document.getElementById('supervisor').value = info[0].Supervisor;
					document.getElementById('capitan').value = info[0].CapitanEnJefe;
					document.getElementById('NumMeserosBar').value = info[0].NumMeseros;
					document.getElementById('infoProv').value = info[0].Informacion;

					if (info[0].menuImpreso == 'si') {

						document.getElementById("menuImpreso").options[0].selected=true;
						document.getElementById('cantidadMenuImpreso').value = info[0].cantidadMenuImpreso;
					}
					if (info[0].menuImpreso == 'no') {

						document.getElementById("menuImpreso").options[1].selected=true;
						document.getElementById('cantidadMenuImpreso').value = '0';

					}
					if (info[0].numImpresosSN == 'si') {

						document.getElementById("numerosImpresos").options[0].selected=true;
						document.getElementById('cantidadNumerosImpreso').value = info[0].cantidadMenuImpreso;

					}
					if (info[0].numImpresosSN == 'no') {

						document.getElementById("numerosImpresos").options[1].selected=true;
						document.getElementById('cantidadNumerosImpreso').value = '0';

					}
					
					if (info[0].Hostess == 'no,' || info[0].Hostess == 'no, ') {

						document.getElementById("hostess").options[1].selected=true;
						document.getElementById('cantidadHostess').value = '0';
					}else{

						document.getElementById("hostess").options[0].selected=true;

						var str = info[0].Hostess;
						var strS = str.split(',');
						//console.log(strS);

						document.getElementById('cantidadHostess').value = strS[1];
					}
					

					if (info[0].PersonalSeguridad == 'no, ' || info[0].PersonalSeguridad == 'no,') {

						document.getElementById("perSeguridad").options[1].selected=true;
						document.getElementById('cantidadPerSeg').value = '0';

					}else{

						document.getElementById("perSeguridad").options[0].selected=true;

						var strPS = info[0].PersonalSeguridad;
						var splitPS = strPS.split(',');
						//console.log(splitPS);
						
						document.getElementById('cantidadPerSeg').value = splitPS[1];
					}

					if (info[0].PersonalBanos == 'no, ' || info[0].PersonalBanos == 'no,') {

						document.getElementById("perWC").options[1].selected=true;
						document.getElementById('cantidadPerWC').value = '0';

					}else{

						document.getElementById("perWC").options[0].selected=true;

						var strPB = info[0].PersonalBanos;
						var splitPB = strPB.split(',');
						//console.log(splitPS);
						
						document.getElementById('cantidadPerWC').value = splitPS[1];
					}
					

				}
			},100);

			break;

			case "admin":

			sessionStorage.setItem('evento', id);

			eventoAjax = new XMLHttpRequest();
			eventoAjax.open('GET',config['url']+"Admin/verEvento?id="+id);
			eventoAjax.send();
			eventoAjax.onreadystatechange = setTimeout(function(){
					
				if (eventoAjax.readyState == 4 && eventoAjax.status == 200) {
					info = JSON.parse(eventoAjax.responseText);
					console.log(info);

					document.getElementById('fechaEvento').value = info[0].fechaEvento;
					document.getElementById('vendedor').value = info[0].nombreVendedor;
					document.getElementById('contratante').value = info[0].nombreContratante;
					document.getElementById('contactoInvolucrado').value = info[0].ContactoInvolucrado;
					document.getElementById('empresa').value = info[0].Empresa;
					document.getElementById('telContacto').value = info[0].telContacto;
					document.getElementById('telContacto').value = info[0].telContacto;
					document.getElementById('telContacto2').value = info[0].telContactoSecundario;
					document.getElementById('mail').value = info[0].correo;
					document.getElementById('mail2').value = info[0].correoSecundario;

					document.getElementById('lugarEvento').value = info[0].lugarEvento;
					document.getElementById('calleConNum').value = info[0].direccionEvento;
					document.getElementById('colonia').value = info[0].colonia;
					document.getElementById('municipio').value = info[0].municipio;
					document.getElementById('estado').value = info[0].estado;
					document.getElementById('telLugarEvento').value = info[0].telLugarEvento;
					document.getElementById('entreCalles').value = info[0].EntreCalles;

					document.getElementById('tipoEvento').value = info[0].tipoEvento;
					document.getElementById('numTiempos').value = info[0].numTiempos;
					document.getElementById('tornaFiesta').value = info[0].tornaFiesta;
					document.getElementById('tipoServicio').value = info[0].tipoServicio;

					document.getElementById('totalPersonas').value = info[0].totalPersonas;
					document.getElementById('totalAdultos').value = info[0].numAdultos;
					document.getElementById('margen').value = info[0].margen;
					document.getElementById('kids').value = info[0].numNi_os;

					document.getElementById('horaInicioHorario').value = info[0].hrInicioEvento;
					document.getElementById('horaFinHorario').value = info[0].hrFinEvento;
					document.getElementById('horaInicioRecepcion').value = info[0].hrInicioRecepcionEvento;
					document.getElementById('horaFinRecepcion').value = info[0].hrFinRecepcionEvento;
					document.getElementById('horaInicioCoctel').value = info[0].hrInicioCoctelEvento;
					document.getElementById('horaFinCoctel').value = info[0].hrFinCoctelEvento;
					document.getElementById('horaInicioBanquetes').value = info[0].hrInicioBanqueteEvento;
					document.getElementById('horaFinBanquetes').value = info[0].hrFinalBanqueteEvento;
					document.getElementById('horaInicioTF').value = info[0].tornaInicio;
					document.getElementById('horaFinTF').value = info[0].tornaFin;
					document.getElementById('horaInicioOtros').value = info[0].hrInicioOtroEvento;
					document.getElementById('horaFinOtros').value = info[0].hrFinalOtroEvento;

					document.getElementById('HorasServicio').value = info[0].hrServicio;

					document.getElementById('fechaEntregaEquipo').value = info[0].FechaEntregaEquipo;
					document.getElementById('horarioEntregaEquipo').value = info[0].HorarioEntregaEquipo;
					document.getElementById('fechaPreMontaje').value = info[0].FechaPreMontaje;
					document.getElementById('horarioPreMontaje').value = info[0].HorarioPreMontaje;
					document.getElementById('numPer').value = info[0].NumPersonasPreMontaje;
					document.getElementById('fechaMontaje').value = info[0].FechaMontaje;
					document.getElementById('horarioMontaje').value = info[0].HoraMontaje;

					document.getElementById('supervisor').value = info[0].Supervisor;
					document.getElementById('capitan').value = info[0].CapitanEnJefe;
					document.getElementById('NumMeserosBar').value = info[0].NumMeseros;
					document.getElementById('infoProv').value = info[0].Informacion;

					if (info[0].menuImpreso == 'si') {

						document.getElementById("menuImpreso").options[0].selected=true;
						document.getElementById('cantidadMenuImpreso').value = info[0].cantidadMenuImpreso;
					}
					if (info[0].menuImpreso == 'no') {

						document.getElementById("menuImpreso").options[1].selected=true;
						document.getElementById('cantidadMenuImpreso').value = '0';

					}
					if (info[0].numImpresosSN == 'si') {

						document.getElementById("numerosImpresos").options[0].selected=true;
						document.getElementById('cantidadNumerosImpreso').value = info[0].cantidadMenuImpreso;

					}
					if (info[0].numImpresosSN == 'no') {

						document.getElementById("numerosImpresos").options[1].selected=true;
						document.getElementById('cantidadNumerosImpreso').value = '0';

					}
					
					if (info[0].Hostess == 'no,' || info[0].Hostess == 'no, ') {

						document.getElementById("hostess").options[1].selected=true;
						document.getElementById('cantidadHostess').value = '0';
					}else{

						document.getElementById("hostess").options[0].selected=true;

						var str = info[0].Hostess;
						var strS = str.split(',');
						//console.log(strS);

						document.getElementById('cantidadHostess').value = strS[1];
					}
					

					if (info[0].PersonalSeguridad == 'no, ' || info[0].PersonalSeguridad == 'no,') {

						document.getElementById("perSeguridad").options[1].selected=true;
						document.getElementById('cantidadPerSeg').value = '0';

					}else{

						document.getElementById("perSeguridad").options[0].selected=true;

						var strPS = info[0].PersonalSeguridad;
						var splitPS = strPS.split(',');
						//console.log(splitPS);
						
						document.getElementById('cantidadPerSeg').value = splitPS[1];
					}

					if (info[0].PersonalBanos == 'no, ' || info[0].PersonalBanos == 'no,') {

						document.getElementById("perWC").options[1].selected=true;
						document.getElementById('cantidadPerWC').value = '0';

					}else{

						document.getElementById("perWC").options[0].selected=true;

						var strPB = info[0].PersonalBanos;
						var splitPB = strPB.split(',');
						//console.log(splitPS);
						
						document.getElementById('cantidadPerWC').value = splitPS[1];
					}
					

				}
			},100);

			break;

			case "director":

			sessionStorage.setItem('evento', id);

			eventoAjax = new XMLHttpRequest();
			eventoAjax.open('GET',config['url']+"Admin/verEvento?id="+id);
			eventoAjax.send();
			eventoAjax.onreadystatechange = setTimeout(function(){
					
				if (eventoAjax.readyState == 4 && eventoAjax.status == 200) {
					info = JSON.parse(eventoAjax.responseText);
					console.log(info);

					document.getElementById('fechaEvento').value = info[0].fechaEvento;
					document.getElementById('vendedor').value = info[0].nombreVendedor;
					document.getElementById('contratante').value = info[0].nombreContratante;
					document.getElementById('contactoInvolucrado').value = info[0].ContactoInvolucrado;
					document.getElementById('empresa').value = info[0].Empresa;
					document.getElementById('telContacto').value = info[0].telContacto;
					document.getElementById('telContacto').value = info[0].telContacto;
					document.getElementById('telContacto2').value = info[0].telContactoSecundario;
					document.getElementById('mail').value = info[0].correo;
					document.getElementById('mail2').value = info[0].correoSecundario;

					document.getElementById('lugarEvento').value = info[0].lugarEvento;
					document.getElementById('calleConNum').value = info[0].direccionEvento;
					document.getElementById('colonia').value = info[0].colonia;
					document.getElementById('municipio').value = info[0].municipio;
					document.getElementById('estado').value = info[0].estado;
					document.getElementById('telLugarEvento').value = info[0].telLugarEvento;
					document.getElementById('entreCalles').value = info[0].EntreCalles;

					document.getElementById('tipoEvento').value = info[0].tipoEvento;
					document.getElementById('numTiempos').value = info[0].numTiempos;
					document.getElementById('tornaFiesta').value = info[0].tornaFiesta;
					document.getElementById('tipoServicio').value = info[0].tipoServicio;

					document.getElementById('totalPersonas').value = info[0].totalPersonas;
					document.getElementById('totalAdultos').value = info[0].numAdultos;
					document.getElementById('margen').value = info[0].margen;
					document.getElementById('kids').value = info[0].numNi_os;

					document.getElementById('horaInicioHorario').value = info[0].hrInicioEvento;
					document.getElementById('horaFinHorario').value = info[0].hrFinEvento;
					document.getElementById('horaInicioRecepcion').value = info[0].hrInicioRecepcionEvento;
					document.getElementById('horaFinRecepcion').value = info[0].hrFinRecepcionEvento;
					document.getElementById('horaInicioCoctel').value = info[0].hrInicioCoctelEvento;
					document.getElementById('horaFinCoctel').value = info[0].hrFinCoctelEvento;
					document.getElementById('horaInicioBanquetes').value = info[0].hrInicioBanqueteEvento;
					document.getElementById('horaFinBanquetes').value = info[0].hrFinalBanqueteEvento;
					document.getElementById('horaInicioTF').value = info[0].tornaInicio;
					document.getElementById('horaFinTF').value = info[0].tornaFin;
					document.getElementById('horaInicioOtros').value = info[0].hrInicioOtroEvento;
					document.getElementById('horaFinOtros').value = info[0].hrFinalOtroEvento;

					document.getElementById('HorasServicio').value = info[0].hrServicio;

					document.getElementById('fechaEntregaEquipo').value = info[0].FechaEntregaEquipo;
					document.getElementById('horarioEntregaEquipo').value = info[0].HorarioEntregaEquipo;
					document.getElementById('fechaPreMontaje').value = info[0].FechaPreMontaje;
					document.getElementById('horarioPreMontaje').value = info[0].HorarioPreMontaje;
					document.getElementById('numPer').value = info[0].NumPersonasPreMontaje;
					document.getElementById('fechaMontaje').value = info[0].FechaMontaje;
					document.getElementById('horarioMontaje').value = info[0].HoraMontaje;

					document.getElementById('supervisor').value = info[0].Supervisor;
					document.getElementById('capitan').value = info[0].CapitanEnJefe;
					document.getElementById('NumMeserosBar').value = info[0].NumMeseros;
					document.getElementById('infoProv').value = info[0].Informacion;

					if (info[0].menuImpreso == 'si') {

						document.getElementById("menuImpreso").options[0].selected=true;
						document.getElementById('cantidadMenuImpreso').value = info[0].cantidadMenuImpreso;
					}
					if (info[0].menuImpreso == 'no') {

						document.getElementById("menuImpreso").options[1].selected=true;
						document.getElementById('cantidadMenuImpreso').value = '0';

					}
					if (info[0].numImpresosSN == 'si') {

						document.getElementById("numerosImpresos").options[0].selected=true;
						document.getElementById('cantidadNumerosImpreso').value = info[0].cantidadMenuImpreso;

					}
					if (info[0].numImpresosSN == 'no') {

						document.getElementById("numerosImpresos").options[1].selected=true;
						document.getElementById('cantidadNumerosImpreso').value = '0';

					}
					
					if (info[0].Hostess == 'no,' || info[0].Hostess == 'no, ') {

						document.getElementById("hostess").options[1].selected=true;
						document.getElementById('cantidadHostess').value = '0';
					}else{

						document.getElementById("hostess").options[0].selected=true;

						var str = info[0].Hostess;
						var strS = str.split(',');
						//console.log(strS);

						document.getElementById('cantidadHostess').value = strS[1];
					}
					

					if (info[0].PersonalSeguridad == 'no, ' || info[0].PersonalSeguridad == 'no,') {

						document.getElementById("perSeguridad").options[1].selected=true;
						document.getElementById('cantidadPerSeg').value = '0';

					}else{

						document.getElementById("perSeguridad").options[0].selected=true;

						var strPS = info[0].PersonalSeguridad;
						var splitPS = strPS.split(',');
						//console.log(splitPS);
						
						document.getElementById('cantidadPerSeg').value = splitPS[1];
					}

					if (info[0].PersonalBanos == 'no, ' || info[0].PersonalBanos == 'no,') {

						document.getElementById("perWC").options[1].selected=true;
						document.getElementById('cantidadPerWC').value = '0';

					}else{

						document.getElementById("perWC").options[0].selected=true;

						var strPB = info[0].PersonalBanos;
						var splitPB = strPB.split(',');
						//console.log(splitPS);
						
						document.getElementById('cantidadPerWC').value = splitPS[1];
					}
					

				}
			},100);

			break;
	}

	
}

function navEvento() {
	navAjax = new XMLHttpRequest();
	navAjax.open('GET',config['url']+"Index/navEvento");
	navAjax.send();
	navAjax.onreadystatechange = function(){
		if (navAjax.readyState == 4 && navAjax.status == 200){
			document.querySelector('section').innerHTML= navAjax.responseText;
		}
	}
}

function navPreevento() {
	navAjax = new XMLHttpRequest();
	navAjax.open('GET',config['url']+"Index/navPreevento");
	navAjax.send();
	navAjax.onreadystatechange = function(){
		if (navAjax.readyState == 4 && navAjax.status == 200){
			document.querySelector('section').innerHTML= navAjax.responseText;
		}
	}
}

