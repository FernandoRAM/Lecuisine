<?php

	Class Cocina extends Controller{

		function __construct(){
			parent::__construct();
		}

		/*Acceder a la pantalla principal de COCINA*/

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

		public function infoEv(){

			$id = $_GET['id'];
			$control = strtolower( SESSION::getValue('Usuario'));
			$resultados = $this->model->getInfo($id);
			print_r($resultados);
		}

		public function verEvento(){

			$id = $_GET['id'];
			$control = strtolower( SESSION::getValue('Usuario'));
			$resultado = $this->model->getEvento($id);
			print_r($resultado);

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
