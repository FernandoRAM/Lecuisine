function b() {
	var descripcion = document.getElementById('descripcion').value;
	var date = new Date();
	var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
					"Septiembre", "Octubre", "Noviembre", "Deciembre"];
	var fecha = date.getDate()+"-"+months[date.getMonth()]+"-"+date.getFullYear();
	var hora = date.getHours()+":"+date.getMinutes();

	var d = fecha+" >>> "+hora;
	var id = sessionStorage.getItem('Preevento');

	var link = "descripcion="+descripcion+"&fecha="+d+"&id="+id;

	var controller = sessionStorage.getItem('controller');

	if(descripcion !=""){
		navAjax = new XMLHttpRequest();
		navAjax.open('POST',config['url']+controller+"/bita");
		navAjax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		navAjax.send(link);
		navAjax.onreadystatechange = function(){

			if(navAjax.readyState == 4 && navAjax.status == 200){
				//console.log(navAjax.responseText);
				console.log(navAjax.responseText);
				if(navAjax.responseText == "	si"){
					pBitacora();
				}else{
					alert("Error inesperado, intente más tarde");
				}
			}
		}
	}else{
		alert("Registro vacío");
	}
}

function pBitacora(){
	var menu = document.getElementById("pruebaMenu");
	var info = document.getElementById("info");
	var bitacora = document.getElementById("bitacora");
	var controller = sessionStorage.getItem('controller');
	var link = "id="+sessionStorage.getItem('Preevento');
	if(sessionStorage.getItem('Preevento') != "0"){

		cocina = new XMLHttpRequest();
		cocina.open('GET',config['url']+"Index/pBitacora");
		cocina.send();

		cocina.onreadystatechange = function(){

				if (cocina.readyState == 4 && cocina.status == 200) {
					if (info.className == "active") {
						console.log("va");
						info.className = "no"
					}
	    			if (menu.className == "active") {
						menu.className = "no"
					}

	    			if (bitacora.className = "no") {

	    				bitacora.className = "";
	    				bitacora.className+="active";
	    			}
	   				

				document.querySelector('article').innerHTML = cocina.responseText;
				ajax = new XMLHttpRequest();
				ajax.open('POST', config['url']+controller+"/infoBita");
				ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
				ajax.send(link);
				
				ajax.onreadystatechange = function(){
					if(ajax.readyState == 4 && ajax.status == 200){
						var info = JSON.parse(ajax.responseText);
						console.log(info);
						if (info != "0"){
							for (var i = 0; i < info.length; i++) {
								var j = 
									"<input type='text' value='"+info[i].fecha+"' disabled='disabled'"+ 
									"style='text-align: center; float:left; width: 35%;'>"+
	          						"<input type='text' value='"+info[i].descripcion+"' disabled='disabled'"+
	          						"style='text-align: center; float:right; width: 65%;'><br>";
          						document.getElementById('tr').innerHTML += j;
							}
						}else{
							document.getElementById('tablaBitacora').innerHTML = "";
							document.getElementById('tr').innerHTML = "No hay registros en este preevento.";
						}
					}
				}
			}

		}
	}

}