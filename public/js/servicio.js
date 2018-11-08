function btnServicio() {
	var descUniforme = document.getElementById('descUniforme').value;
	var hrRecluIn = document.getElementById('hrRecluIn').value;
	var hrRecluFin = document.getElementById('hrRecluFin').value;
	var lugarReclutamiento = document.getElementById('lugarReclutamiento').value;
	var modoTraslado = document.getElementById('modoTraslado').value;

	if(descUniforme == "" && hrRecluIn == "" && hrRecluFin == "" && lugarReclutamiento == "" && modoTraslado == ""){
		if(confirm("Los elementos están vacíos ¿desea continuar?")){
			descUniforme = "No especificado"
			hrRecluIn = "00:00";
			hrRecluFin = "00:00";
			lugarReclutamiento = "No especificado";
			modoTraslado = "No especificado";
			var controller = sessionStorage.getItem('controller');
			var id = sessionStorage.getItem('evento');
			var link = "id="+id+"&descUniforme="+descUniforme+"&hrRecluIn="+hrRecluIn+"&hrRecluFin="+hrRecluFin+
						"&lugarReclutamiento="+lugarReclutamiento+"&modoTraslado="+modoTraslado;
			console.log(link);
		}
	}else{
		var controller = sessionStorage.getItem('controller');
		var id = sessionStorage.getItem('evento');
		var link = "id="+id+"&descUniforme="+descUniforme+"&hrRecluIn="+hrRecluIn+"&hrRecluFin="+hrRecluFin+
					"&lugarReclutamiento="+lugarReclutamiento+"&modoTraslado="+modoTraslado;



		servicioAjax = new XMLHttpRequest();
		servicioAjax.open("POST", config['url']+controller+"/servicioInsert");
		servicioAjax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		servicioAjax.send(link);

		servicioAjax.onreadystatechange = function(){
			if (servicioAjax.readyState == 4 && servicioAjax.status == 200){
				var ser = servicioAjax.responseText;
				console.log(ser);
				if(ser == "	1"){
					alert('Información guardada con éxito');
					console.clear();
					window.location = config['url']+controller;
				}else{
					alert('Error inesperado, intente más tarde');
				}
			}
		}


	}
}