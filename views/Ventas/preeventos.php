<div class="item" id="eventos">
	<?php $evento = ($this->resultados);
		if ($evento != "0") {

			for ($i=0; $i < sizeof($evento); $i++) { 
				echo("<div class='item'>".
									"<div class='datos'>".
										"<div class='subitem'>".'Contratante:'."</div>".
										"<div class='subitem'>".'Fecha:'."</div>".
										"<div class='subitem'>".'Lugar:'."</div>".
										"<div class='subitem'>".'Tipo:'."</div>".
									"</div>".
									"<div class='info'>".
										"<div class='subitem'>".$evento[$i]['empresa']."</div>".
										"<div class='subitem'>".$evento[$i]['fechaEvento']."</div>".
										"<div class='subitem'>".$evento[$i]['lugar']."</div>".
										"<div class='subitem'>".$evento[$i]['tipoEvento']."</div>".
									"</div>".
									"<div class='personas'>".
										"<div class='numP'>".$evento[$i]['totalPersonas']. ' Personas'."</div>".
									"</div>".
						
									"<button class='boton' onclick=verPreevento(". $evento[$i]['idPreevento'] .")>".'Ver'."</button>".
								"</div>"); 
			}
			
		}else {

			print_r("No hay ningun evento.");
			

			
		}
	?>
	
</div>