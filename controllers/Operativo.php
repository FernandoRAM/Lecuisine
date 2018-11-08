<?php

	Class Operativo extends Controller{

		function __construct(){
			parent::__construct();
		}

		/*Acceder a la pantalla principal de OPERATIVO*/

		public function index()
		{
			$control = strtolower( SESSION::getValue('Usuario'));
			$id = SESSION::getValue('idTipoUsuario');
			$verificar = $this->model->verificarID($id);
			if( $control != null  && $id != null && $id == $verificar[0]['Tipo']){
				$this->view->render($this, "index");
			}else{
				header('Location: '.URL);
			}

		}

		public function operativoServicio()
		{
			$this->view->render($this, 'operativo');
		}


		public function pInfo(){

			$control = strtolower( SESSION::getValue('Usuario'));
			$id = SESSION::getValue('idTipoUsuario');
			$verificar = $this->model->verificarID($id);
			if( $control != null  && $id != null && $id == $verificar[0]['Tipo']){
				$this->view->render($control, "crear_evento", true);
			}else{
				header('Location: '.URL);
			}


		}
		public function pEventoOp(){

			$control = strtolower( SESSION::getValue('Usuario'));
			$id = SESSION::getValue('idTipoUsuario');
			$verificar = $this->model->verificarID($id);
			if( $control != null  && $id != null && $id == $verificar[0]['Tipo']){
				$this->view->render($control, "evento", true);
			}else{
				header('Location: '.URL);
			}


		}
		public function servicio(){

			$control = strtolower( SESSION::getValue('Usuario'));
			$id = SESSION::getValue('idTipoUsuario');
			$verificar = $this->model->verificarID($id);
			if( $control != null  && $id != null && $id == $verificar[0]['Tipo']){
				$this->view->render($control, "servicio", true);
			}else{
				header('Location: '.URL);
			}


		}

		public function verEvento(){

			$id = $_GET['id'];
			$control = strtolower( SESSION::getValue('Usuario'));
			$resultado = $this->model->getEvento($id);
			print_r($resultado);

		}

		public function getBeb(){

			$id = $_GET['id'];
			$control = strtolower( SESSION::getValue('Usuario'));
			$resultado = $this->model->getBeb($id);
			print_r($resultado);

		}

		public function getBebida(){
			$id = $_GET['id'];
			$cate = $_GET['cate'];
			$menu = $this->model->getMenu($id);

			$idMenu = $menu['idMenu'];
			$bebida = $this->model->getBebidas($idMenu, $cate);
			if($bebida == "No se encontró ningún registro"){
				echo json_encode("no");
			}else{
				echo json_encode($bebida);
			}
		}

		public function operativoDatos(){
			if (empty($_POST)) {
				echo "NO";
			}else{
				$idEvento = $_POST['id'];

				/*TABLA operativo_servicio*/

				if(empty($_POST['numChofer'])){
					$numChofer = "0";
				}else{
					$numChofer = $_POST['numChofer'];
				}

				if(empty($_POST['numOpe'])){
					$numOpe = "0";
				}else{
					$numOpe = $_POST['numOpe'];
				}

				if(empty($_POST['numJO'])){
					$numJO = "0";
				}else{
					$numJO = $_POST['numJO'];
				}

				$updateOpeSer = $this->model->updateOpeSer($numChofer, $numOpe, $numJO, $idEvento);
				if($updateOpeSer == '1'){
					$selectOpeSer = $this->model->selectOpeSer($idEvento);
					$idOperativo = $selectOpeSer['idOperativo'];

					/*TABLA mobiliario*/
					if($_POST['mobiliario'] == "" || $_POST['mobiliario'] == "JA"){
						$tipoMobiliario = "NO";
						$cantidadMobiliario = "0";
					}else{
						$numMobiliario = explode(",", $_POST['mobiliario']);
						$mobiliario;
						$tipoMobiliario;
						$cantidadMobiliario;
						for ($a=0; $a < sizeof($numMobiliario); $a++) {
							$mobiliario = explode("/",$numMobiliario[$a]);
							for ($b=0; $b < sizeof($mobiliario); $b++) {
								$tipoMobiliario = $mobiliario[0];
								$cantidadMobiliario = $mobiliario[1];
								if($tipoMobiliario == "NO"){
									break;
								}else{
									if($cantidadMobiliario == 0){
										break;
									}else{
										$insertMobiliario=$this->model->insertMobiliario($tipoMobiliario, $cantidadMobiliario, $idOperativo);
										break;
									}
								}
							}
						}
					}

					/*-----------------------------------------------------------------*/
					/*TABLA mobiliario_adicional*/
					if($_POST['MA'] == "" || $_POST['MA'] == "JA"){
						$nombreMA="NO";
						$tipoMA = "NO";
						$numPerMA = "0";
						$cantMa = "0";
					}else{
						$numMA = explode(",", $_POST['MA']);
						$MA;
						$nombreMA;
						$tipoMA;
						$cantMa;
						$numPerMA;
						for ($c=0; $c < sizeof($numMA); $c++) {
							$MA = explode("/", $numMA[$c]);
							for ($d=0; $d < sizeof($MA); $d++) {
								$nombreMA = $MA[0];
								$tipoMA = $MA[1];
								$cantMa = $MA[2];
								$numPerMA = $MA[3];
								if ($nombreMA == "NO") {
									break;
								}else{
									if($cantMa == 0){
										break;
									}else{
										$insertMA = $this->model->insertMA($nombreMA, $tipoMA, $cantMa, $numPerMA, $idOperativo);
										break;
									}
								}
							}
						}
					}

					/*TABLA cristaleria*/
					if($_POST['cris'] == "" || $_POST['cris'] == "JA"){
						$tipoCris = "NO";
						$cantCris = "0";
					}else{
						$numCris = explode(",", $_POST['cris']);
						$cris;
						$tipoCris;
						$cantCris;
						for ($e=0; $e < sizeof($numCris); $e++) {
							$cris = explode("/",$numCris[$e]);
							for ($f=0; $f < sizeof($cris); $f++) {
								$tipoCris = $cris[0];
								$cantCris = $cris[1];
								if($tipoCris == "NO"){
									break;
								}else{
									if($cantCris == 0){
										break;
									}else{
										$insertCris=$this->model->insertCris($tipoCris, $cantCris, $idOperativo);
										break;
									}
								}
							}
						}
					}

					/*TABLA bebida*/
					$menu = $this->model->getMenu($idEvento);
					$idMenu = $menu['idMenu'];

					if($_POST['chesco'] == ""||$_POST['chesco'] == "JA"){
						$nombreChesco = null;
						$presChesco = null;
					}else{
						$categoria = "REFRESCO";
						$getBebidas = $this->model->getBebidas($idMenu, $categoria);

						$numChesco = explode(",", $_POST['chesco']);
						$chesco;
						$nombreChesco;
						$presChesco;
						for ($g=0; $g < sizeof($numChesco); $g++) {
							$chesco = explode("/", $numChesco[$g]);
							for ($h=0; $h < sizeof($chesco); $h++) {
								$nombreChesco = $chesco[0];
								$presChesco = $chesco[1];
								$updateRefresco = $this->model->updateRefresco($nombreChesco, $presChesco, $idMenu);
								break;
							}
						}
					}

					if($_POST['cheve'] == "" || $_POST['cheve'] == "JA"){
						$nombreCheve = null;
						$cantCheve = null;
					}else{
						$categoria = "CERVEZA";
						$getBebidas = $this->model->getBebidas($idMenu, $categoria);
						$numCheve = explode(",", $_POST['cheve']);
						$cheve;
						$nombreCheve;
						$cantCheve;
						for ($i=0; $i < sizeof($numCheve); $i++) {
							$cheve = explode("/", $numCheve[$i]);
							for ($j=0; $j < sizeof($cheve); $j++) {
								$nombreCheve = $cheve[0];
								$cantCheve = $cheve[1];
								$updateCheve=$this->model->updateCheve($nombreCheve, $cantCheve, $idMenu);
								break;
							}
						}
					}

					/*TABLA silla*/
					if($_POST['silla'] =="" || $_POST['silla'] == "JA"){
						$tipoSilla = "NO";
						$colorSilla = "NO";
						$cantSilla = "0";
						$provSilla = "NO";
					}else{
						$numSilla = explode(",", $_POST['silla']);
						$silla;
						$tipoSilla;
						$colorSilla;
						$cantSilla;
						$provSilla;
						for ($k=0; $k < sizeof($numSilla); $k++) {
							$silla = explode("/", $numSilla[$k]);
							for ($l=0; $l < sizeof($silla); $l++) {
								$tipoSilla = $silla[0];
								$colorSilla = $silla[1];
								$cantSilla = $silla[2];
								$provSilla = $silla[3];
								if ($tipoSilla == "NO") {
									break;
								}else{
									if($cantSilla == 0){
										break;
									}else{
										$insertSilla = $this->model->insertSilla($tipoSilla, $cantSilla, $colorSilla, $provSilla, $idOperativo);
										break;
									}
								}
							}
						}
					}

					/*TABLA decoracion_silla*/
					if(empty($_POST['sillaFunda']) && empty($_POST['sillaFundaBanda'])){
						$sillaFunda = "No";
						$sillaFundaBanda = "No";
					}else{
						$sillaFunda = $_POST['sillaFunda'];
						$sillaFundaBanda = $_POST['sillaFundaBanda'];

						$insertDecoracionSilla = $this->model->insertDecoracionSilla($sillaFunda, $sillaFundaBanda, $idOperativo);
					}

					/*TABLA mantel*/
					if($_POST['mantel'] =="" || $_POST['mantel'] == "JA"){
						$tipoMantel = "NO";
						$colorMantel = "NO";
						$cantMantel = "0";
						$provMantel = "NO";
					}else{
						$numSilla = explode(",", $_POST['mantel']);
						$mantel;
						$tipoMantel;
						$colorMantel;
						$cantMantel;
						$provMantel;
						for ($m=0; $m < sizeof($numSilla); $m++) {
							$mantel = explode("/", $numSilla[$m]);
							for ($n=0; $n < sizeof($mantel); $n++) {
								$tipoMantel = $mantel[0];
								$colorMantel = $mantel[1];
								$cantMantel = $mantel[2];
								$provMantel = $mantel[3];
								if ($tipoMantel == "NO") {
									break;
								}else{
									if($cantMantel == 0){
										break;
									}else{
										/*SE INSERTAAAAAAAAAA*/
										$insertMantel = $this->model->insertMantel($tipoMantel, $cantMantel, $colorMantel, $provMantel, $idOperativo);
										break;
									}
								}
							}
						}

					/*TABLA servilleta*/
					if($_POST['ser'] =="" || $_POST['ser'] == "JA"){
						$tipoServilleta = "NO";
						$colorServilleta = "NO";
						$cantServilleta = "0";
						$provServilleta = "NO";
					}else{
						$numServilleta = explode(",", $_POST['ser']);
						$ser;
						$tipoServilleta;
						$colorServilleta;
						$cantServilleta;
						$provServilleta;
						for ($o=0; $o < sizeof($numServilleta); $o++) {
							$ser = explode("/", $numServilleta[$o]);
							for ($p=0; $p < sizeof($ser); $p++) {
								$tipoServilleta = $ser[0];
								$colorServilleta = $ser[1];
								$cantServilleta = $ser[2];
								$provServilleta = $ser[3];
								if ($tipoServilleta == "NO") {
									break;
								}else{
									if($cantServilleta == 0){
										break;
									}else{
										/*SE INSERTAAAAAAAAAA*/
										$insertServilleta = $this->model->insertServilleta($tipoServilleta, $cantServilleta, $colorServilleta, $provServilleta, $idOperativo);
										break;
									}
								}
							}
						}
					}

					/*TABLA banda*/
					if($_POST['banda'] =="" || $_POST['banda'] == "JA"){
						$tipoBanda = "NO";
						$colorBanda = "NO";
						$cantBanda = "0";
						$provBanda = "NO";
					}else{
						$numBanda = explode(",", $_POST['banda']);
						$banda;
						$tipoBanda;
						$colorBanda;
						$cantBanda;
						$provBanda;
						for ($q=0; $q < sizeof($numBanda); $q++) {
							$banda = explode("/", $numBanda[$q]);
							for ($r=0; $r < sizeof($banda); $r++) {
								$tipoBanda = $banda[0];
								$colorBanda = $banda[1];
								$cantBanda = $banda[2];
								$provBanda = $banda[3];
								if ($tipoBanda == "NO") {
									break;
								}else{
									if($cantBanda == 0){
										break;
									}else{
										/*SE INSERTAAAAAAAAAA*/
										$insertBanda = $this->model->insertBanda($tipoBanda, $cantBanda, $colorBanda, $provBanda, $idOperativo);
										break;
									}
								}
							}
						}
					}


				}
					echo "1";
				}else{
					echo "NOUP";
				}


			}
		}


		public function servicioInsert(){
			if (empty($_POST)) {
				echo "NOPOROLÓ";
			}else{
				if(!(empty($_POST['id']))){
					$id = $_POST['id'];
				}else{
					echo "NELSON";
				}
				if(!(empty($_POST['descUniforme']))){
					$descUniforme = $_POST['descUniforme'];
				}else{
					echo "NELSON";
				}
				if(!(empty($_POST['hrRecluIn']))){
					$hrRecluIn = $_POST['hrRecluIn'];
				}else{
					echo "NELSON";
				}
				if(!(empty($_POST['hrRecluFin']))){
					$hrRecluFin = $_POST['hrRecluFin'];
				}else{
					echo "NELSON";
				}
				if(!(empty($_POST['lugarReclutamiento']))){
					$lugarReclutamiento = $_POST['lugarReclutamiento'];
				}else{
					echo "NELSON";
				}
				if(!(empty($_POST['modoTraslado']))){
					$modoTraslado = $_POST['modoTraslado'];
				}else{
					echo "NELSON";
				}


				$insertServicio = $this->model->insertServicio($id,$hrRecluIn,$hrRecluFin,$lugarReclutamiento,$modoTraslado);
				$insertUS = $this->model->insertUS($id, $descUniforme);

				if($insertServicio == '1' && $insertUS == '1'){
					echo 1;
				}else{
					echo "NO JALA";
				}

			}
		}

		public function  scouting(){
			if (empty($_POST)) {
				echo "NO";
			}else{

				/*TABLA protocolo_acceso*/
				$idEvento = $_POST['id'];
				$fechaScout = $_POST['fechaScout'];
				$INE = $_POST['INE'];
				$listaPersonal = $_POST['listaPersonal'];
				$listaVehiculos = $_POST['listaVehiculos'];
				$altaIMSS = $_POST['altaIMSS'];
				$cartaResponsiva = $_POST['cartaResponsiva'];
				$zapatosSeguridad = $_POST['zapatosSeguridad'];
				$cascoSeguridad = $_POST['cascoSeguridad'];
				$lentesSeguridad = $_POST['lentesSeguridad'];
				$chalecoSeguridad = $_POST['chalecoSeguridad'];
				$arnes = $_POST['arnes'];
				$guantesSeguridad = $_POST['guantesSeguridad'];
				$extintores = $_POST['extintores'];
				$ingresaVehiculo = $_POST['ingresaVehiculo'];
				$estacionamientoInvitados = $_POST['estacionamientoInvitados'];
				$estacionamientoProveedor = $_POST['estacionamientoProveedor'];
				$valetParking = $_POST['valetParking'];

				$insertProtocolo = $this->model->insertProtocolo($idEvento,$fechaScout,$INE,$listaPersonal,$listaVehiculos,$altaIMSS,$cartaResponsiva,$zapatosSeguridad,$cascoSeguridad,$lentesSeguridad,$chalecoSeguridad,$arnes,$guantesSeguridad,$extintores,$ingresaVehiculo,$estacionamientoInvitados,$estacionamientoProveedor,$valetParking);


				/*TABLA logistica_entrega*/
				$horarioAcceso = $_POST['horarioAcceso'];
				$lugarAlmacenamiento = $_POST['lugarAlmacenamiento'];
				$responsableLugar = $_POST['responsableLugar'];

				$insertLog = $this->model->insertLog($idEvento,$horarioAcceso,$lugarAlmacenamiento,$responsableLugar);



				/*TABLA scouting1*/
				$ubicacionBanos = $_POST['ubicacionBanos'];
				$tipoBanos = $_POST['tipoBanos'];
				$carpaComensales = $_POST['carpaComensales'];
				$carpaCocina = $_POST['carpaCocina'];
				$carpaV = $_POST['carpaV'];
				$cortinas = $_POST['cortinas'];
				$sombrilla = $_POST['sombrilla'];
				$ubicacionBar = $_POST['ubicacionBar'];
				$ubicacionOperativo = $_POST['ubicacionOperativo'];
				$espacioBar = $_POST['espacioBar'];
				$espacioOperativo = $_POST['espacioOperativo'];

				$insertScouting1 = $this->model->insertScouting1($ubicacionBanos,$tipoBanos,$carpaComensales,$carpaCocina,$carpaV,$cortinas,$sombrilla,$ubicacionBar,$ubicacionOperativo,$espacioBar,$espacioOperativo, $idEvento);





				/*TABLA scouting2*/
				$espacioMetros = $_POST['espacioMetros'];
				$personasMesa = $_POST['personasMesa'];
				$metrosPista = $_POST['metrosPista'];
				$montajeEspecial = $_POST['montajeEspecial'];
				$calidadIlumacion = $_POST['calidadIlumacion'];
				$iluminacionCocina = $_POST['iluminacionCocina'];
				$plantaLuz = $_POST['plantaLuz'];
				$cerradoCuatroParedes = $_POST['cerradoCuatroParedes'];
				$accesoIndependiente = $_POST['accesoIndependiente'];
				$calidadIlumacionCocina = $_POST['calidadIlumacionCocina'];
				$ventilacion = $_POST['ventilacion'];
				$aguaPotable = $_POST['aguaPotable'];
				$corrienteElectrica = $_POST['corrienteElectrica'];
				$tipoSuelo = $_POST['tipoSuelo'];
				$alturaLugar = $_POST['alturaLugar'];
				$distanciaCocinaComedor = $_POST['distanciaCocinaComedor'];

				$insertScouting2 = $this->model->insertScouting2($espacioMetros,$personasMesa,$metrosPista,$montajeEspecial,$calidadIlumacion,$iluminacionCocina,$plantaLuz,$cerradoCuatroParedes,$accesoIndependiente,$calidadIlumacionCocina,	$ventilacion,	$aguaPotable,$corrienteElectrica,$tipoSuelo,$alturaLugar,$distanciaCocinaComedor,$idEvento);


				if($insertProtocolo == '1' && $insertLog == '1' && $insertScouting1 == '1' && $insertScouting2 == '1'){
					echo "1";
				}




			}
		}



	}

 ?>
