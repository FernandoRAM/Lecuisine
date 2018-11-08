function insertarEvento() {
	//TABLA evento_
	var fecha = document.getElementById('fechaEvento').value;
	var vendedor = document.getElementById('vendedor').value;
	var lugarEvento = document.getElementById('lugarEvento').value;
	var telLugarEvento = document.getElementById('telLugarEvento').value;
	var calle = document.getElementById('calleConNum').value;
	var colonia = document.getElementById('colonia').value;
	var municipio = document.getElementById('municipio').value;
	var estado = document.getElementById('estado').value;
	var EntreCalles = document.getElementById('entreCalles').value;
	var hreventoIn = document.getElementById('horaInicioHorario').value;
	var hreventoFi = document.getElementById('horaFinHorario').value;
	var hrecepIn = document.getElementById('horaInicioRecepcion').value;
	var hrecepFi = document.getElementById('horaFinRecepcion').value;
	var hrcoctelIn = document.getElementById('horaInicioCoctel').value;
	var hrcoctelFi = document.getElementById('horaFinCoctel').value;
	var hrbanqueteIn = document.getElementById('horaInicioBanquetes').value;
	var hrbanqueteFi = document.getElementById('horaFinBanquetes').value;
	var hrtornaIn = document.getElementById('horaInicioTF').value;
	var hrtornaFi = document.getElementById('horaFinTF').value;
	var hrotroIn = document.getElementById('horaInicioOtros').value;
	var hrotroFi = document.getElementById('horaFinOtros').value;
	

	//TABLA contratante
	var nombre = document.getElementById('contratante').value;
	var empresa = document.getElementById('empresa').value;
	var tel = document.getElementById('telContacto').value;
	var telSecu = document.getElementById('telContacto2').value;
	var mail = document.getElementById('mail').value;
	var mailSecu = document.getElementById('mail2').value;
	var contactoInvolucrado = document.getElementById('contactoInvolucrado').value;



					
	//TABLA descripcionevento

	var timepo = document.getElementById('numTiempos').value;
	var torna = document.getElementById('tornaFiesta').value;
	var tiposervicio = document.getElementById('tipoServicio').value;
	var tipoEvento = document.getElementById('tipoEvento').value;
	var h = document.getElementById('hostess').value;
	var numHostess = document.getElementById('cantidadHostess').value;
	var pS = document.getElementById('perSeguridad').value;
	var numPS = document.getElementById('cantidadPerSeg').value;
	var perWC = document.getElementById('perWC').value;
	var numPWC = document.getElementById('cantidadPerWC').value;
	var Hostess = h+", "+numHostess;
	var PersonalSeguridad = pS+", "+numPS;
	var PersonalBanos = perWC+", "+numPWC;
	var totalpersona = document.getElementById('totalPersonas').value;
	var totalAdulto = document.getElementById('totalAdultos').value;
	var margen = document.getElementById('margen').value;
	var niño = document.getElementById('kids').value;
	var menu = document.getElementById('menuImpreso').value;
	var menuCantidad = document.getElementById('cantidadMenuImpreso').value;
	var impresos = document.getElementById('numerosImpresos').value;
	var numimpresos = document.getElementById('cantidadNumerosImpreso').value;
	

	//TABLA equipo_operativo
	 var entregaFe = document.getElementById('fechaEntregaEquipo').value;
	 var entregaHr = document.getElementById('horarioEntregaEquipo').value;
	 var premontajeFe = document.getElementById('fechaPreMontaje').value;
	 var premontajeHr = document.getElementById('horarioPreMontaje').value;
	 var numper = document.getElementById('numPer').value;
	 var montajeFe = document.getElementById('fechaMontaje').value;
	 var montajeHr = document.getElementById('horarioMontaje').value;
					
	
	//TABLA operativo_servicio
	 var hrservicio = document.getElementById('HorasServicio').value;
	 var capitan = document.getElementById('capitan').value;
	 var supervisor = document.getElementById('supervisor').value;
	 var mesero = document.getElementById('NumMeserosBar').value;

	//TABLA proveedores_externos
	 var info = document.getElementById('infoProv').value;
	 

	
	var datosEvento = "fecha="+fecha+"&vendedor="+vendedor+"&lugarEvento="+lugarEvento+
				"&telLugarEvento="+telLugarEvento+"&calle="+calle+"&colonia="+colonia+"&municipio="+municipio+
				"&estado="+estado+"&EntreCalles="+EntreCalles+"&hreventoIn="+hreventoIn+"&hreventoFi="+hreventoFi+
				"&hrecepIn="+hrecepIn+"&hrecepFi="+hrecepFi+"&hrcoctelIn="+hrcoctelIn+"&hrcoctelFi="+hrcoctelFi+
				"&hrbanqueteIn="+hrbanqueteIn+"&hrbanqueteFi="+hrbanqueteFi+"&hrtornaIn="+hrtornaIn+
				"&hrtornaFi="+hrtornaFi+"&hrotroIn="+hrotroIn+"&hrotroFi="+hrotroFi+"&nombre="+nombre+
				"&empresa="+empresa+"&tel="+tel+"&telSecu="+telSecu+"&mail="+mail+"&mailSecu="+mailSecu+
				"&contactoInvolucrado="+contactoInvolucrado+"&timepo="+timepo+"&torna="+torna+
				"&tiposervicio="+tiposervicio+"&tipoEvento="+tipoEvento+"&Hostess="+Hostess+
				"&PersonalSeguridad="+PersonalSeguridad+"&PersonalBanos="+PersonalBanos+
				"&totalpersona="+totalpersona+"&totalAdulto="+totalAdulto+"&margen="+margen+"&niño="+niño+
				"&menu="+menu+"&menuCantidad="+menuCantidad+"&impresos="+impresos+"&numimpresos="+numimpresos+
				"&entregaFe="+entregaFe+"&entregaHr="+entregaHr+"&premontajeFe="+premontajeFe+
				"&premontajeHr="+premontajeHr+"&numper="+numper+"&montajeFe="+montajeFe+"&montajeHr="+montajeHr+
				"&hrservicio="+hrservicio+"&capitan="+capitan+"&supervisor="+supervisor+"&mesero="+mesero+"&info="+info;

	//console.log(datosEvento);

	if(vendedor == ""){
		alert('Inserte el nombre del vendedor');
	}else{
		var controller = sessionStorage.getItem('controller');
		var url = config['url']+controller+"/caratula";
		eventoCreadoAjax = new XMLHttpRequest();
		eventoCreadoAjax.open('POST',url);
		eventoCreadoAjax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		eventoCreadoAjax.send(datosEvento);
		eventoCreadoAjax.onreadystatechange = function(){
			
			if (eventoCreadoAjax.readyState == 4 && eventoCreadoAjax.status == 200){
				console.log("res="+eventoCreadoAjax.responseText);
				if(eventoCreadoAjax.responseText == "	no" || eventoCreadoAjax.responseText == "	noID" ){
					alert('Error: Verifica que los campos estén completos')
				}else{
					var idEvento = eventoCreadoAjax.responseText;
					console.clear();
					alert('Evento creado');
					sessionStorage.setItem('idEventoCreado', idEvento);
					sessionStorage.setItem('eventoCreado', 1);
					pMenu();
					
				}
			}
		}
	}
}

function pMenu(){
	var menu = document.getElementById("menu");
	var info = document.getElementById("info");
	if(sessionStorage.getItem('eventoCreado') != "0"){

		cocina = new XMLHttpRequest();
		cocina.open('GET',config['url']+"Index/pMenu");
		cocina.send();

		cocina.onreadystatechange = function(){

				if (cocina.readyState == 4 && cocina.status == 200) {
					

					if (info.className = "active") {
						info.className = "no"
					}
	    			

	    			if (menu.className = "no") {

	    				menu.className ="";
	    				menu.className+="active";
	    			}
	    			

				

				document.querySelector('article').innerHTML = cocina.responseText;
				cargarInfo();
			}

		}
	}else{
		alert('Crea un evento para poder escoger el menú');
	}

}


function cargarInfo(){

	var id = sessionStorage.getItem('idEventoCreado');
	var controller = sessionStorage.getItem('controller');

	infoAjax = new XMLHttpRequest();
	infoAjax.open('GET',config['url']+controller+"/infoEv?id="+id);
	infoAjax.send();

	infoAjax.onreadystatechange = function(){

		if (infoAjax.readyState == 4 && infoAjax.status == 200) {
			info = JSON.parse(infoAjax.responseText);
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





		}

	}
}



	

