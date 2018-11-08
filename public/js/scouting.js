function insertScouting() {
	var fechaScout = document.getElementById('fechaScout').value;
	var INE = document.getElementById('INE').value;
	var listaPersonal = document.getElementById('listaPersonal').value;
	var listaVehiculos = document.getElementById('listaVehiculos').value;
	var altaIMSS = document.getElementById('altaIMSS').value;
	var cartaResponsiva = document.getElementById('cartaResponsiva').value;
	var zapatosSeguridad = document.getElementById('zapatosSeguridad').value;
	var cascoSeguridad = document.getElementById('cascoSeguridad').value;
	var lentesSeguridad = document.getElementById('lentesSeguridad').value;
	var chalecoSeguridad = document.getElementById('chalecoSeguridad').value;
	var arnes = document.getElementById('arnes').value;
	var guantesSeguridad = document.getElementById('guantesSeguridad').value;
	var extintores = document.getElementById('extintores').value;
	var ingresaVehiculo = document.getElementById('ingresaVehiculo').value;
	var estacionamientoInvitados = document.getElementById('estacionamientoInvitados').value;
	var estacionamientoProveedor = document.getElementById('estacionamientoProveedor').value;
	var valetParking = document.getElementById('valetParking').value;
	var horarioAcceso = document.getElementById('horarioAcceso').value;
	var lugarAlmacenamiento = document.getElementById('lugarAlmacenamiento').value;
	var responsableLugar = document.getElementById('responsableLugar').value;
	var ubicacionBanos = document.getElementById('ubicacionBanos').value;
	var tipoBanos = document.getElementById('tipoBanos').value;
	var carpaComensales = document.getElementById('carpaComensales').value;
	var carpaCocina = document.getElementById('carpaCocina').value;
	var carpaV = document.getElementById('carpaV').value;
	var cortinas = document.getElementById('cortinas').value;
	var sombrilla = document.getElementById('sombrilla').value;
	var ubicacionBar = document.getElementById('ubicacionBar').value;
	var ubicacionOperativo = document.getElementById('ubicacionOperativo').value;
	var espacioBar = document.getElementById('espacioBar').value;
	var espacioOperativo = document.getElementById('espacioOperativo').value;
	var espacioMetros = document.getElementById('espacioMetros').value;
	var personasMesa = document.getElementById('personasMesa').value;
	var metrosPista = document.getElementById('metrosPista').value;
	var montajeEspecial = document.getElementById('montajeEspecial').value;
	var calidadIlumacion = document.getElementById('calidadIlumacion').value;
	var iluminacionCocina = document.getElementById('iluminacionCocina').value;
	var plantaLuz = document.getElementById('plantaLuz').value;
	var cerradoCuatroParedes = document.getElementById('cerradoCuatroParedes').value;
	var accesoIndependiente = document.getElementById('accesoIndependiente').value;
	var calidadIlumacionCocina = document.getElementById('calidadIlumacionCocina').value;
	var ventilacion = document.getElementById('ventilacion').value;
	var aguaPotable = document.getElementById('aguaPotable').value;
	var corrienteElectrica = document.getElementById('corrienteElectrica').value;
	var tipoSuelo = document.getElementById('tipoSuelo').value;
	var alturaLugar = document.getElementById('alturaLugar').value;
	var distanciaCocinaComedor = document.getElementById('distanciaCocinaComedor').value;

	var id= sessionStorage.getItem('idEventoCreado');
	var controller = sessionStorage.getItem('controller');

	var final = "fechaScout="+fechaScout+"&INE="+INE+"&listaPersonal="+listaPersonal+"&listaVehiculos="+listaVehiculos+
				"&altaIMSS="+altaIMSS+"&cartaResponsiva="+cartaResponsiva+"&zapatosSeguridad="+zapatosSeguridad+
				"&cascoSeguridad="+cascoSeguridad+"&lentesSeguridad="+lentesSeguridad+"&chalecoSeguridad="+chalecoSeguridad+
				"&arnes="+arnes+"&guantesSeguridad="+guantesSeguridad+"&extintores="+extintores+
				"&ingresaVehiculo="+ingresaVehiculo+"&estacionamientoInvitados="+estacionamientoInvitados+
				"&estacionamientoProveedor="+estacionamientoProveedor+"&valetParking="+valetParking+
				"&horarioAcceso="+horarioAcceso+"&lugarAlmacenamiento="+lugarAlmacenamiento+
				"&responsableLugar="+responsableLugar+"&ubicacionBanos="+ubicacionBanos+"&tipoBanos="+tipoBanos+
				"&carpaComensales="+carpaComensales+"&carpaCocina="+carpaCocina+"&carpaV="+carpaV+"&cortinas="+cortinas+
				"&sombrilla="+sombrilla+"&ubicacionBar="+ubicacionBar+"&ubicacionOperativo="+ubicacionOperativo+
				"&espacioBar="+espacioBar+"&espacioOperativo="+espacioOperativo+"&espacioMetros="+espacioMetros+
				"&personasMesa="+personasMesa+"&metrosPista="+metrosPista+"&montajeEspecial="+montajeEspecial+
				"&calidadIlumacion="+calidadIlumacion+"&iluminacionCocina="+iluminacionCocina+"&plantaLuz="+plantaLuz+
				"&cerradoCuatroParedes="+cerradoCuatroParedes+"&accesoIndependiente="+accesoIndependiente+
				"&calidadIlumacionCocina="+calidadIlumacionCocina+"&ventilacion="+ventilacion+"&aguaPotable="+aguaPotable+
				"&corrienteElectrica="+corrienteElectrica+"&tipoSuelo="+tipoSuelo+"&alturaLugar="+alturaLugar+
				"&distanciaCocinaComedor="+distanciaCocinaComedor+"&id="+id;

	if (confirm("¿Desea guardar los datos?")) {
		scoutAjax = new XMLHttpRequest();
		scoutAjax.open('POST',config['url']+controller+"/scouting");
		scoutAjax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		scoutAjax.send(final);
		scoutAjax.onreadystatechange = function(){
			if (scoutAjax.readyState == 4 && scoutAjax.status == 200){
				var res = scoutAjax.responseText;
				console.log(res);
				if(res == "	1"){
					alert("Información guardada con éxito");
					window.location =config['url']+controller;
				}else{
					alert("Ocurrió un error inesperado, intente más tarde");
				}
			}
		}
	}

	


}