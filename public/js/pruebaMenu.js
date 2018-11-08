var contadorEntremes = 1;
var contadorCremaSopa = 1;
var contadorPlatosF = 1;
var contadorPostres = 1;
var contadorPan = 1;
var contadorManteleria = 1;
var contadorVajilla = 1;

function entremes() {
	addEntremes();
	var btnConcepto = document.getElementById('btnEntremes');
	btnConcepto.removeAttribute("onclick");
	btnConcepto.value = "Agregar otro elemento";
	btnConcepto.setAttribute("onclick", "addEntremes()");
	btnConcepto.setAttribute("id", "btnCon");
}

function cremaSopa() {
	addSopaCrema();
	var btnConcepto = document.getElementById('btnSopaCrema');
	btnConcepto.removeAttribute("onclick");
	btnConcepto.value = "Agregar otro elemento";
	btnConcepto.setAttribute("onclick", "addSopaCrema()");
	btnConcepto.setAttribute("id", "btnCon");
}

function platoFuerte() {
	addPlatoFuerte();
	var btnConcepto = document.getElementById('btnPlato');
	btnConcepto.removeAttribute("onclick");
	btnConcepto.value = "Agregar otro elemento";
	btnConcepto.setAttribute("onclick", "addPlatoFuerte()");
	btnConcepto.setAttribute("id", "btnCon");
}
function postre() {
	addPostre();
	var btnConcepto = document.getElementById('btnPostre');
	btnConcepto.removeAttribute("onclick");
	btnConcepto.value = "Agregar otro elemento";
	btnConcepto.setAttribute("onclick", "addPostre()");
	btnConcepto.setAttribute("id", "btnCon");
}

function pan() {
	addPan();
	var btnConcepto = document.getElementById('btnPan');
	btnConcepto.removeAttribute("onclick");
	btnConcepto.value = "Agregar otro elemento";
	btnConcepto.setAttribute("onclick", "addPan()");
	btnConcepto.setAttribute("id", "btnCon");
}
function manteleria2() {
	addManteleria2();
	var btnConcepto = document.getElementById('btnMant');
	btnConcepto.removeAttribute("onclick");
	btnConcepto.value = "Agregar otro elemento";
	btnConcepto.setAttribute("onclick", "addManteleria2()");
	btnConcepto.setAttribute("id", "btnCon");
}
function vajilla2() {
	addVajilla2();
	var btnConcepto = document.getElementById('btnVaj');
	btnConcepto.removeAttribute("onclick");
	btnConcepto.value = "Agregar otro elemento";
	btnConcepto.setAttribute("onclick", "addVajilla2()");
	btnConcepto.setAttribute("id", "btnCon");
}

function addEntremes() {

	var entremes = 
	"<div id='entremes'>"+
	  		"<input name='cantidad' class='desc' type='text' placeholder='Descripción' id='entremes"+contadorEntremes+"'>"+
	  		"<input name='concepto' class='desc'  type='text' placeholder='Observaciones' id='obserEntre"+contadorEntremes+"'>"+
	 "</div><br>";

	  	//document.getElementById('entremeses').innerHTML += entremes;
	  	$("#entremeses").append(entremes);
	  	

	contadorEntremes++;

}

function addSopaCrema() {

	var sopaC = 
	"<div id='sopasCremas'>"+
	  		"<input name='cantidad' class='desc' type='text' placeholder='Descripción' id='sopaCrema"+contadorCremaSopa+"'>"+
	  		"<input name='concepto' class='desc'  type='text' placeholder='Observaciones' id='obserCrema"+contadorCremaSopa+"'>"+
	  	"</div><br>";

	  	//document.getElementById('cremaSopa').innerHTML += sopaC;
	  	$("#cremaSopa").append(sopaC);

	contadorCremaSopa++;

}

function addPlatoFuerte() {

	var platoF = 
	"<div id='platoFuerte'>"+
	  		"<input name='cantidad' class='desc' type='text' placeholder='Descripción' id='platoFuerte"+contadorPlatosF+"'>"+
	  		"<input name='concepto' class='desc'  type='text' placeholder='Observaciones' id='obserPlatoFuerte"+contadorPlatosF+"'>"+
	  	"</div><br>";

	  	//document.getElementById('platosFuertes').innerHTML += platoF;
	  	$("#platosFuertes").append(platoF);


	contadorPlatosF++;

}
function addPostre() {

	var postre = 
	"<div id='postre'>"+
	  		"<input name='cantidad' class='desc' type='text' placeholder='Descripción' id='postre"+contadorPostres+"'>"+
	  		"<input name='concepto' class='desc'  type='text' placeholder='Observaciones' id='obserPostre"+contadorPostres+"'>"+
	  	"</div><br>";

	  	//document.getElementById('postres').innerHTML += postre;
	  	$("#postres").append(postre);

	contadorPostres++;

}

function addPan() {

	var pan = 
	"<div id='pan'>"+
	  		"<input name='cantidad' class='desc' type='text' placeholder='Descripción' id='pan"+contadorPostres+"'>"+
	  		"<input name='concepto' class='desc'  type='text' placeholder='Observaciones' id='obserPan"+contadorPostres+"'>"+
	  	"</div><br>";

	  	//document.getElementById('panes').innerHTML += pan;
	  	$("#panes").append(pan);

	contadorPostres++;

}
function addManteleria2() {

	var manteleria = 
	"<div>"+
	  	"<select class='desc' id='colorMobiliario"+contadorManteleria+"' onchange='checamanteleria(this,+"+contadorManteleria+")'>"+
	  		"<option selected hidden value='no'>Color</option>"+
	  		"<option value='Amarillo con blanco cuadriculado'> Amarillo con blanco cuadriculado </option>"+
			"<option value='Azul marino'> Azul marino </option>"+
			"<option value='Azul rey'> Azul rey </option>"+
			"<option value='Blanco'> Blanco </option>"+
			"<option value='Beige'> Beige </option>"+
			"<option value='Bugambilia'> Bugambilia </option>"+
			"<option value='Capuchino'> Capuchino </option>"+
			"<option value='Chedron Chantu'> Chedron Chantu </option>"+
			"<option value='Chocolate'> Chocolate </option>"+
			"<option value='Dorado'> Dorado </option>"+
			"<option value='Durazno(Restaurant)'> Durazno(Restaurant) </option>"+
			"<option value='Flor de Poblano'> Flor de Poblano </option>"+
			"<option value='Lila Chantu'> Lila Chantu </option>"+
			"<option value='Naranja'> Naranja </option>"+
			"<option value='Negro'> Negro </option>"+
			"<option value='Obispo'> Obispo </option>"+
			"<option value='Palo de Rosa'> Palo de Rosa </option>"+
			"<option value='Perla'> Perla </option>"+
			"<option value='Plata'> Plata </option>"+
			"<option value='Rojo'> Rojo </option>"+
			"<option value='Rosa Mexicano'> Rosa Mexicano </option>"+
			"<option value='Varios Mantelería'> Varios Mantelería </option>"+
			"<option value='Verde Agua'> Verde Agua </option>"+
			"<option value='Verde Botella'> Verde Botella </option>"+
			"<option value='Verde Limon'> Verde Limon </option>"+
			"<option value='Vino'> Vino </option>"+
			"<option value='Vintage (Blanco y negro)'> Vintage (Blanco y negro) </option>"+
			"<option value='Gris'> Gris </option>"+
			"<option value='Lino Natural'> Lino Natural </option>"+
	  	"</select>"+
	  	"<select class='desc' id='mobiliario"+contadorManteleria+"'>"+
	  	"</select>"+
	  	"</div>"+
	"</div><br>";

	  //document.getElementById('manteleria').innerHTML += manteleria; con este se despedorra el de arriba
	  $("#manteleria").append(manteleria); // con este no :)

	contadorManteleria++;

}

function addVajilla2() {

	var vajilla = 
	"<div>"+
	  	"<select class='desc' id='tipoVajilla"+contadorVajilla+"' onchange='checaVajilla2(this,+"+contadorVajilla+")'>"+
	  		"<option selected hidden value='no'>Tipo Vajilla</option>"+
	  		"<option value='Cuadrada'> Cuadrada </option>"+
	  		"<option value='Loza Santa Anita'> Loza Santa Anita </option>"+
	  		"<option value='Loza Nueva Colibri'> Loza Nueva Colibri </option>"+
	  		"<option value='Kutahya'> Kutahya </option>"+
	  		"<option value='Loza Yardley'> Loza Yardley </option>"+
	  		"<option value='Loza Tremont'> Loza Tremont </option>"+
	  		"<option value='Loza Anfora'> Loza Anfora </option>"+
	  		"<option value='Loza San Isidro'> Loza San Isidro </option>"+
	  		"<option value='Loza Victoria (Limoges)'> Loza Victoria (Limoges) </option>"+
	  	"</select>"+
	  	"<select class='desc' id='pieza"+contadorVajilla+"'>"+
	  	"</select>"+
	  	"</div>"+
	"</div><br>";

	  //document.getElementById('manteleria').innerHTML += manteleria; con este se despedorra el de arriba
	  $("#vajillas").append(vajilla); // con este no :)

	contadorVajilla++;

}

function checamanteleria(elem, mant){

		var id = (elem.id);

	
		var color = document.getElementById(id).value;
		
		if (color != "no") {

			switch(color){

				case "Amarillo con blanco cuadriculado":

					var items = "<option value='Cubre Mantel'> Cubre Mantel </option>"

					document.getElementById('mobiliario'+mant).innerHTML = items;

					break;

				case "Azul marino":

					var items = "<option value='Servilleta'> Servilleta </option>"+
								"<option value='Mantel Redondo Tergal Liso'> Mantel Redondo Tergal Liso </option>"+
								"<option value='Mantel Redondo Razo Doble Vista shantu'> Mantel Redondo Razo Doble Vista shantu </option>"+
								"<option value='Mantel Tablón'> Mantel Tablón </option>"+
								"<option value='Bambalina'> Bambalina </option>"+
								"<option value='Banda'> Banda </option>";

					document.getElementById('mobiliario'+mant).innerHTML = items;
					break;

				case "Azul rey":

						var items = "<option value='Servilleta'> Servilleta </option>"+
									"<option value='Mantel Redondo'> Mantel Redondo </option>"+
									"<option value='Cubre Mantel'> Cubre Mantel </option>"+
									"<option value='Banda'> Banda </option>";

						document.getElementById('mobiliario'+mant).innerHTML = items;

					break;

				case "Blanco":


						var items = "<option value='Servilleta blanca lisa'> Servilleta blanca lisa </option>"+
									"<option value='Servilleta blanca lisa vieja'> Servilleta blanca lisa vieja </option>"+
									"<option value='Servilleta caballo graminia'> Servilleta caballo graminia </option>"+
									"<option value='Servilleta blanca mariposa'> Servilleta blanca mariposa </option>"+
									"<option value='Servilleta luxemburgo'> Servilleta luxemburgo </option>"+
									"<option value='Mantel redondo blanco'> Mantel redondo blanco </option>"+
									"<option value='Mantel redondo blanco viejos'> Mantel redondo blanco viejos </option>"+
									"<option value='Mantel redondo grande oficial'> Mantel redondo grande oficial </option>"+
									"<option value='Mantel redondo graminia'> Mantel redondo graminia </option>"+
									"<option value='Mantel redondo satín'> Mantel redondo satín </option>"+
									"<option value='Cubre mantel grabado redondo'> Cubre mantel grabado redondo </option>"+
									"<option value='Cubre mantel grabado cuadrado'> Cubre mantel grabado cuadrado </option>"+
									"<option value='Cubre cuadarado boyanguera'> Cubre cuadarado boyanguera </option>"+
									"<option value='Cubre mantel blanco liso'> Cubre mantel blanco liso </option>"+
									"<option value='Cubre mantel redondo blanco redondo español'> Cubre mantel redondo blanco redondo español </option>"+
									"<option value='Cubre mantel redondo blanco trebol'> Cubre mantel redondo blanco trebol </option>"+
									"<option value='Camino luxemburgo'> Camino luxemburgo </option>"+
									"<option value='Mantel tablón'> Mantel tablón </option>"+
									"<option value='Mantel tablón a piso'> Mantel tablón a piso </option>"+
									"<option value='Bambalina semi nueva sancona'> Bambalina semi nueva sancona </option>"+
									"<option value='Bambalina c/mantel integrado'> Bambalina c/mantel integrado </option>"+
									"<option value='Mantel descnaso'> Mantel descnaso </option>"+
									"<option value='Banda blanca'> Banda blanca </option>"+
									"<option value='Funda faldón redonda (vieja amarillenta)'> Funda faldón redonda (vieja amarillenta) </option>"+
									"<option value='Funda faldón redonda (zancona)'> Funda faldón redonda (zancona) </option>"+
									"<option value='Funda faldón redonda (nueva)'> Funda faldón redonda (nueva) </option>"+
									"<option value='Funda faldón cuadrada (zancona)'> Funda faldón cuadrada (zancona) </option>"+
									"<option value='Funda faldón cuadrada (nueva)'> Funda faldón cuadrada (nueva) </option>"+
									"<option value='Funda para termo naranja'> Funda para termo naranja </option>";

						document.getElementById('mobiliario'+mant).innerHTML = items;
					break;

			case "Beige":

					var items = "<option value='Servilleta luxemburgo'> Servilleta luxemburgo </option>"+
								"<option value='Cubre mantel luxemburgo'> Cubre mantel luxemburgo </option>"+
								"<option value='Cmino Imperial (beige con gris)'> Cmino Imperial (beige con gris) </option>"+
								"<option value='Bambalina'> Bambalina </option>"
								;

						document.getElementById('mobiliario'+mant).innerHTML = items;

					break;

			case "Bugambilia":

						var items = "<option value='Servilleta '> Servilleta </option>"+
									"<option value='Mantel redondo '> Mantel redondo </option>"+
									"<option value='Bambalinas '> Bambalinas </option>"+
									"<option value='Bandas '> Bandas </option>"
								;

						document.getElementById('mobiliario'+mant).innerHTML = items;


					break;

			case "Capuchino":

					var items = "<option value='Servilleta capuchino claro '> Servilleta capuchino claro </option>"+
								"<option value='Servilleta capuchino obscuro '> Servilleta capuchino obscuro </option>"+
								"<option value='Mantel redondo capuchino claro '> Mantel redondo capuchino claro </option>"+
								"<option value='Mantel redondo capuchino obscuro '> Mantel redondo capuchino obscuro </option>"+
								"<option value='Mantel redondo kaky nuevo '> Mantel redondo kaky nuevo </option>"+
								"<option value='Cubre capuchino rayado holandes '> Cubre capuchino rayado holandes </option>"+
								"<option value='Camino brocado '> Camino brocado </option>"+
								"<option value='Camino de lino flores purpura '> Camino de lino flores purpura </option>"+
								"<option value='Servilleta '> Servilleta </option>";

					document.getElementById('mobiliario'+mant).innerHTML = items;


					break;

			case "Chedron Chantu":

					var items = "<option value='Mantel Redondo'> Mantel Redondo </option>";

					document.getElementById('mobiliario'+mant).innerHTML = items;


					break;

			case "Chocolate":

					var items = "<option value='Servilleta'> Servilleta </option>"+
								"<option value='Mantel redondo (coco)'> Mantel redondo (coco) </option>"+
								"<option value='Mantel redondo (liso)'> Mantel redondo (liso) </option>"+
								"<option value='Mantel redondo corrugado'> Mantel redondo corrugado </option>"+
								"<option value='Bandas'> Bandas </option>";

					document.getElementById('mobiliario'+mant).innerHTML = items;


					break;

			case "Dorado":

					var items = "<option value='Mantel redondo (brocado con forro)'> Mantel redondo (brocado con forro) </option>"+
								"<option value='Mantel redondo razo obscuro o cajeta'> Mantel redondo razo obscuro o cajeta </option>"+
								"<option value='Mantel redondo razo claro'> Mantel redondo razo claro </option>"+
								"<option value='Cubre mantel cuadrado rallado'> Cubre mantel cuadrado rallado </option>"+
								"<option value='Camino rayado'> Camino rayado </option>"+
								"<option value='Cubre mantel cuadrado (entre verde y dorado)'> Cubre mantel cuadrado (entre verde y dorado) </option>"+
								"<option value='Camino brocado'> Camino brocado </option>"+
								"<option value='Camino estilo japonés'> Camino estilo japonés </option>";

					document.getElementById('mobiliario'+mant).innerHTML = items;


					break;

			case "Durazno(Restaurant)":

					var items = "<option value='Mantel redondo claro'> Mantel redondo claro </option>"+
								"<option value='Mantel redondo oscuro'> Mantel redondo oscuro </option>"+
								"<option value='Bambalina'> Bambalina </option>";

					document.getElementById('mobiliario'+mant).innerHTML = items;


					break;

			case "Flor de Poblano":

					var items = "<option value='Mantel redondo'> Mantel redondo </option>"+
								"<option value='Bambalina'> Bambalina </option>";

					document.getElementById('mobiliario'+mant).innerHTML = items;


					break;

			case "Lila Chantu":

					var items = "<option value='Mantel redondo lila'> Mantel redondo lila </option>";

					document.getElementById('mobiliario'+mant).innerHTML = items;


					break;

			case "Naranja":

					var items = "<option value='Servilleta'> Servilleta </option>"+
								"<option value='Mantel redondo intenso nuevo'> Mantel redondo intenso nuevo </option>"+
								"<option value='Mantel redondo'> Mantel redondo </option>"+
								"<option value='Mantel tablón'> Mantel tablón </option>"+
								"<option value='Bambalina'> Bambalina </option>"+
								"<option value='Banda'> Banda </option>"+
								"<option value='Forro de mampara (naranja)'> Forro de mampara (naranja) </option>";

					document.getElementById('mobiliario'+mant).innerHTML = items;


					break;
			case "Negro":

					var items = "<option value='Servilleta'> Servilleta </option>"+
								"<option value='Mantel redondo'> Mantel redondo </option>"+
								"<option value='Cubre mantel cuadrado'> Cubre mantel cuadrado </option>"+
								"<option value='Bambalina'> Bambalina </option>"+
								"<option value='Mantel redondo oficial'> Mantel redondo oficial </option>"+
								"<option value='Cubre mantel descanso'> Cubre mantel descanso </option>";

					document.getElementById('mobiliario'+mant).innerHTML = items;


					break;

			case "Obispo":

					var items = "<option value='Servilleta'> Servilleta </option>"+
								"<option value='Mantel redondo'> Mantel redondo </option>"+
								"<option value='Banda'> Banda </option>";

					document.getElementById('mobiliario'+mant).innerHTML = items;


					break;

			case "Palo de Rosa":

					var items = "<option value='Mantel redondo'> Mantel redondo </option>";

					document.getElementById('mobiliario'+mant).innerHTML = items;


					break;

			case "Perla":

					var items = "<option value='Servilleta'> Servilleta </option>"+
								"<option value='Mantel redondo estampado c/forro'> Mantel redondo estampado c/forro </option>"+
								"<option value='Mantel redondo tergal liso'> Mantel redondo tergal liso </option>"+
								"<option value='Mantel redondo brocado'> Mantel redondo brocado </option>"+
								"<option value='Camino perla rayado'> Camino perla rayado </option>";

					document.getElementById('mobiliario'+mant).innerHTML = items;


					break;

			case "Plata":

					var items = "<option value='Mantel redondo corrugado'> Mantel redondo corrugado </option>"+
								"<option value='Mantel redondo Shantu'> Mantel redondo Shantu </option>"+
								"<option value='Mantel redondo coco plata'> Mantel redondo coco plata </option>"+
								"<option value='Camino brocado arigoleado'> Camino brocado arigoleado </option>"+
								"<option value='Camino coco plata'> Camino coco plata </option>";

					document.getElementById('mobiliario'+mant).innerHTML = items;


					break;

			case "Rojo":

					var items = "<option value='Servilleta'> Servilleta </option>"+
								"<option value='Mantel redondo'> Mantel redondo </option>"+
								"<option value='Cubre cuadrado rojo'> Cubre cuadrado rojo </option>"+
								"<option value='Mantel tablón rojo'> Mantel tablón rojo </option>"+
								"<option value='Banda'> Banda </option>";

					document.getElementById('mobiliario'+mant).innerHTML = items;


					break;

			case "Rosa Mexicano":

					var items = "<option value='Mantel redondo imperial salmón'> Mantel redondo imperial salmón </option>"+
								"<option value='Mantel redondo salmón'> Mantel redondo salmón </option>"+
								"<option value='Mantel redondo'> Mantel redondo </option>";

					document.getElementById('mobiliario'+mant).innerHTML = items;


					break;

			case "Varios Mantelería":

					var items = "<option value='Servilleta caballo varios colores'> Servilleta caballo varios colores </option>"+
								"<option value='Funda para charola ovalada'> Funda para charola ovalada </option>"+
								"<option value='Funda para charola bar'> Funda para charola bar </option>"+
								"<option value='Molletones para mesa tablón'> Molletones para mesa tablón </option>"+
								"<option value='Molletones para mesa cuadrada'> Molletones para mesa cuadrada </option>"+
								"<option value='Molletones para mesa redonda'> Molletones para mesa redonda </option>"+
								"<option value='Funda para termos naranjas'> Funda para termos naranjas </option>"+
								"<option value='Rebozos'> Rebozos </option>";

					document.getElementById('mobiliario'+mant).innerHTML = items;


					break;

			case "Verde Agua":

					var items = "<option value='Servilleta'> Servilleta </option>"+
								"<option value='Mantel redondo'> Mantel redondo </option>";

					document.getElementById('mobiliario'+mant).innerHTML = items;


					break;	

			case "Verde Botella":

					var items = "<option value='Servilleta'> Servilleta </option>"+
								"<option value='Mantel redondo'> Mantel redondo </option>"+
								"<option value='Bambalina'> Bambalina </option>"+
								"<option value='Banda'> Banda </option>"+
								"<option value='Mantel tablón verde botella'> Mantel tablón verde botella </option>";

					document.getElementById('mobiliario'+mant).innerHTML = items;


					break;	

			case "Verde Limon":

					var items = "<option value='Servilleta'> Servilleta </option>"+
								"<option value='Mantel redondo'> Mantel redondo </option>"+
								"<option value='Bambalina'> Bambalina </option>"+
								"<option value='Banda'> Banda </option>";

					document.getElementById('mobiliario'+mant).innerHTML = items;


					break;

			case "Vino":

					var items = "<option value='Servilleta'> Servilleta </option>"+
								"<option value='Mantel redondo'> Mantel redondo </option>"+
								"<option value='Mantel tablón'> Mantel tablón </option>"+
								"<option value='Bambalina'> Bambalina </option>"+
								"<option value='Banda'> Banda </option>";

					document.getElementById('mobiliario'+mant).innerHTML = items;


					break;	

			case "Vintage (Blanco y negro)":

					var items = "<option value='Mantel redondo Vintage'> Mantel redondo Vintage </option>"+
								"<option value='Camino vintage'> Camino vintage </option>";

					document.getElementById('mobiliario'+mant).innerHTML = items;


					break;

			case "Gris":

					var items = "<option value='Servilleta'> Servilleta </option>"+
								"<option value='Mantel gris tergal'> Mantel gris tergal </option>";

					document.getElementById('mobiliario'+mant).innerHTML = items;


					break;

			case "Lino Natural":

					var items = "<option value='Mantel Lino Natural'> Mantel Lino Natural </option>";

					document.getElementById('mobiliario'+mant).innerHTML = items;


					break;



		}
	}
}	
	
function checaVajilla2(elem, vaj){

	var id = (elem.id);

	
		var tipoVajilla = document.getElementById(id).value;

		if (tipoVajilla != "no"){

			switch(tipoVajilla){

				case "Cuadrada":

					var items = "<option value='Plato base'> Plato base </option>"+
								"<option value='Plato trinche'> Plato trinche </option>"+
								"<option value='Plato sopero'> Plato sopero </option>"+
								"<option value='Plato panero'> Plato panero </option>"+
								"<option value='Plato cafetero'> Plato cafetero </option>"+
								"<option value='Taza café'> Taza café </option>";

					document.getElementById('pieza'+vaj).innerHTML = items;

					break;

				case "Loza Santa Anita":

					var items = "<option value='Plato pescado'> Plato pescado </option>"+
								"<option value='Plato postre'> Plato postre </option>"+
								"<option value='Plato trinche'> Plato trinche </option>"+
								"<option value='Plato sopero'> Plato sopero </option>"+
								"<option value='Plato panero'> Plato panero </option>"+
								"<option value='Plato cafetero'> Plato cafetero </option>"+
								"<option value='Plato cafetero Sta Anita cuadrado'> Plato cafetero Sta Anita cuadrado </option>"+
								"<option value='Taza café'> Taza café </option>"+
								"<option value='Taza sola'> Taza sola </option>";

					document.getElementById('pieza'+vaj).innerHTML = items;

					break;

				case "Loza Nueva Colibri":

					var items = "<option value='Plato cafetero'> Plato cafetero </option>"+
								"<option value='Taza'> Taza </option>";

					document.getElementById('pieza'+vaj).innerHTML = items;

					break;

				case "Kutahya":

					var items = "<option value='Taza'> Taza </option>"+
								"<option value='Plato cafetero'> Plato cafetero </option>"+
								"<option value='Plato base'> Plato base </option>"+
								"<option value='Plato sopero'> Plato sopero </option>"+
								"<option value='Plato panero'> Plato panero </option>"+
								"<option value='Plato trinche'> Plato trinche </option>";

					document.getElementById('pieza'+vaj).innerHTML = items;

					break;

				case "Loza Yardley":

					var items = "<option value='Plato trinche'> Plato trinche </option>"+
								"<option value='Plato pescado'> Plato pescado </option>"+
								"<option value='Plato sopero'> Plato sopero </option>"+
								"<option value='Plato panero'> Plato panero </option>"+
								"<option value='Plato cafetero'> Plato cafetero </option>";

					document.getElementById('pieza'+vaj).innerHTML = items;

					break;

				case "Loza Tremont":

					var items = "<option value='Plato trinche'> Plato trinche </option>"+
								"<option value='Plato pescado'> Plato pescado </option>"+
								"<option value='Plato sopero'> Plato sopero </option>"+
								"<option value='Plato panero'> Plato panero </option>"+
								"<option value='Plato cafetero'> Plato cafetero </option>"+
								"<option value='Plato postre'> Plato postre </option>"+
								"<option value='Taza express'> Taza express </option>";

					document.getElementById('pieza'+vaj).innerHTML = items;

					break;

				case "Loza Anfora":

					var items = "<option value='Plato trinche'> Plato trinche </option>"+
								"<option value='Plato pescado'> Plato pescado </option>"+
								"<option value='Plato sopero'> Plato sopero </option>"+
								"<option value='Plato panero'> Plato panero </option>"+
								"<option value='Plato cafetero'> Plato cafetero </option>"+
								"<option value='Plato postre'> Plato postre </option>"+
								"<option value='Plato panero royal doulton'> Plato panero royal doulton </option>";

					document.getElementById('pieza'+vaj).innerHTML = items;

					break;

				case "Loza San Isidro":

					var items = "<option value='Plato trinche'> Plato trinche </option>"+
								"<option value='Plato pescado'> Plato pescado </option>"+
								"<option value='Plato sopero'> Plato sopero </option>"+
								"<option value='Plato cafetero'> Plato cafetero </option>"+
								"<option value='Plato postre'> Plato postre </option>";

					document.getElementById('pieza'+vaj).innerHTML = items;

					break;

				case "Loza Victoria (Limoges)":

					var items = "<option value='Plato trinche'> Plato trinche </option>"+
								"<option value='Plato base'> Plato base </option>"+
								"<option value='Plato sopero'> Plato sopero </option>"+
								"<option value='Plato cafetero'> Plato cafetero </option>"+
								"<option value='Plato panero'> Plato panero </option>";

					document.getElementById('pieza'+vaj).innerHTML = items;

					break;				

			}

		}
}