<div class="item" id="eventos">
	<?php $evento = ($this->resultados);
		if ($evento != "No se encontró ningún registro") {

			for ($i=0; $i < sizeof($evento); $i++) { 
				echo("<div class='item'>".
									"<div class='datos'>".
										"<div class='subitem'>".'Contratante:'."</div>".
										"<div class='subitem'>".'Fecha:'."</div>".
										"<div class='subitem'>".'Lugar:'."</div>".
										"<div class='subitem'>".'Tipo:'."</div>".
									"</div>".
									"<div class='info'>".
										"<div class='subitem'>".$evento[$i]['nombreContratante']."</div>".
										"<div class='subitem'>".$evento[$i]['fechaEvento']."</div>".
										"<div class='subitem'>".$evento[$i]['lugarEvento']."</div>".
										"<div class='subitem'>".$evento[$i]['tipoServicio']."</div>".
									"</div>".
									"<div class='personas'>".
										"<div class='numP'>".$evento[$i]['totalPersonas']. ' Personas'."</div>".
									"</div>".
						
									"<button class='boton' onclick=verEvento(". $evento[$i]['idEvento'] .")>".'Ver'."</button>".
								"</div>"); 
			}
			
		}else {

			print_r($evento);
			
		}
	?>
	
</div>