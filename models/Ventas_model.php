<?php


	class Ventas_model extends Model {

			/*INSERT admin crear evento*/

		public function insertEvento($fecha, $vendedor, $lugarEvento, $calle, $colonia, $municipio, $estado, $EntreCalles, $hreventoIn, $hreventoFi, $hrecepIn, $hrecepFi, $hrcoctelIn, $hrcoctelFi, $hrbanqueteIn, $hrbanqueteFi, $hrtornaIn, $hrtornaFi, $hrotroIn, $hrotroFi,$telLugarEvento){

			$dataE = array('fechaEvento'=>$fecha, 'nombreVendedor'=>$vendedor, 'lugarEvento'=>$lugarEvento, 'direccionEvento'=>$calle, 'colonia'=>$colonia, 'municipio'=>$municipio, 'estado'=>$estado, 'EntreCalles'=>$EntreCalles, 'hrInicioEvento  '=>$hreventoIn, 'hrFinEvento'=>$hreventoFi, 'hrInicioRecepcionEvento'=>$hrecepIn, 'hrFinRecepcionEvento'=>$hrecepFi, 'hrInicioCoctelEvento '=>$hrcoctelIn, 'hrFinCoctelEvento'=>$hrcoctelFi, 'hrInicioBanqueteEvento'=>$hrbanqueteIn, 'hrFinalBanqueteEvento'=>$hrbanqueteFi, 'tornaInicio   '=>$hrtornaIn, 'tornaFin'=>$hrtornaFi, 'hrInicioOtroEvento'=>$hrotroIn, 'hrFinalOtroEvento'=>$hrotroFi, 'telLugarEvento' =>$telLugarEvento);
			return $this->db->insert($dataE, 'evento_');

		}

		public function selectId($fecha, $vendedor)
		{
			return $this->db->select("*", "evento_", "fechaEvento = '$fecha' AND  nombreVendedor= '$vendedor'");
		}

		public function verificarID($id){
			return $this->db->selectStrict("u.idTipoUsuario AS 'Tipo', t.idTipoUsuario AS 't.idTipoUsuario',
										u.NombreUsuario AS 'u.NombreUsuario', t.TipoUsuario AS 'Controller'", "usuario u, tipo_usuario t",
										"u.idTipoUsuario = t.idTipoUsuario AND u.idTipoUsuario = '$id' AND
										t.idTipoUsuario = '$id'");
		}

		public function insertCon($nombre, $empresa, $tel, $telSecu, $mail, $mailSecu, $contactoInvolucrado, $idEvento){

			$dataC = array('nombreContratante'=>$nombre, 'Empresa'=>$empresa, 'telContacto'=>$tel, 'telContactoSecundario'=>$telSecu, 'correo'=>$mail, 'correoSecundario'=>$mailSecu, 'ContactoInvolucrado'=>$contactoInvolucrado, 'idEvento'=>$idEvento);
			return $this->db->insert($dataC, 'contratante');

		}
		public function inserDesc($timepo, $torna, $tiposervicio, $tipoEvento, $totalpersona, $totalAdulto, $margen, $niño, $menu, $menuCantidad, $impresos, $numimpresos, $Hostess, $PersonalSeguridad, $hrservicio, $PersonalBanos, $idEvento){

			$dataDesc = array('numTiempos'=>$timepo, 'tornaFiesta'=>$torna, 'tipoServicio'=>$tiposervicio, 'tipoEvento'=>$tipoEvento, 'totalPersonas'=>$totalpersona, 'numAdultos'=>$totalAdulto, 'margen'=>$margen, 'numNi_os'=>$niño, 'menuImpreso'=>$menu, 'cantidadMenuImpreso'=>$menuCantidad, 'numImpresosSN'=>$impresos, 'numerosImpresos'=>$numimpresos,'Hostess'=>$Hostess, 'PersonalSeguridad'=>$PersonalSeguridad, 'horasServicio'=>$hrservicio, 'PersonalBanos'=>$PersonalBanos,'idEvento'=>$idEvento);
			return $this->db->insert($dataDesc, 'descripcionevento');

		}
		public function insertEO($entregaFe, $entregaHr, $premontajeFe, $premontajeHr, $numper, $montajeFe, $montajeHr, $idEvento){
			$dataEO = array('FechaEntregaEquipo'=>$entregaFe, 'HorarioEntregaEquipo'=>$entregaHr, 'FechaPreMontaje'=>$premontajeFe, 'HorarioPreMontaje'=>$premontajeHr, 'NumPersonasPreMontaje'=>$numper, 'FechaMontaje'=>$montajeFe, 'HoraMontaje'=>$montajeHr, 'idEvento'=>$idEvento);
			return $this->db->insert($dataEO, 'equipo_operativo');

		}
		public function insertOP($hrservicio, $capitan, $supervisor, $mesero, $idEvento){
			$dataOP = array('hrServicio'=>$hrservicio, 'CapitanEnJefe'=>$capitan, 'Supervisor'=>$supervisor, 'NumMeseros'=>$mesero, 'idEvento'=>$idEvento);
			return $this->db->insert($dataOP, 'operativo_servicio');
		}
		public function insertPE($info, $idEvento){
			$dataPE = array('Informacion'=>$info, 'idEvento'=>$idEvento);
			return $this->db->insert($dataPE, 'proveedores_externos');

		}

		public function getEventoMenu($idEvento){
			return $this->db->select("c.nombreContratante, ev.fechaEvento, ev.direccionEvento, descev.tipoServicio, descev.totalPersonas, c.idEvento" , "contratante c, descripcionevento descev, evento_ ev","c.idEvento = ev.idEvento AND descev. idEvento = ev.idEvento AND c.idEvento = descev.idEvento AND ev.idEvento = '$idEvento'" , "fechaEvento");
		}

		public function insertCocina($lider, $personalCo, $transporte, $personalOp, $totalPe, $idEvento){
			$dataCo = array('LiderCocina' => $lider, 'PersonalCocina' => $personalCo, 'TipoTransportePersonalCocina' => $transporte, 'PersonalOperativo' => $personalOp, 'TotalPersonal' => $totalPe, 'idEvento' => $idEvento);
			return $this->db->insert($dataCo, 'cocina');
		}

		public function insertMenu($bocadillos, $entremes, $SopaOCrema, $platoFuerte, $MenuInfantil, $TipoTornaFiesta, $NumPersonasTF, $DescripcionTF, $postre, $idEvento){
			$dataM = array('bocadillos' => $bocadillos, 'entremes' => $entremes, 'SopaOCrema' => $SopaOCrema, 'platoFuerte' => $platoFuerte, 'MenuInfantil' => $MenuInfantil, 'TipoTornaFiesta' => $TipoTornaFiesta, 'NumPersonasTF' => $NumPersonasTF, 'DescripcionTF' => $DescripcionTF, 'postre' => $postre, 'idEvento' => $idEvento);
			return $this->db->insert($dataM, 'menu');
		}


		public function getMenu($idEvento){
			return $this->db->select("*", "menu", "idEvento = '$idEvento'");
		}

		public function insertPan($NombrePan, $idMenu){
			$dataP = array('NombrePan' => $NombrePan, 'idMenu' => $idMenu);
			return $this->db->insert($dataP, 'pan');
		}

		public function insertBebida($NombreBebida, $CategoriaBebida, $idMenu){
			$dataBe = array('NombreBebida' => $NombreBebida, 'CategoriaBebida' => $CategoriaBebida, 'idMenu' => $idMenu);
			return $this->db->insert($dataBe, 'bebida');
		}

		public function insertVajilla($NombreTipoVajilla, $idMenu){
			$dataVa = array('NombreTipoVajilla' => $NombreTipoVajilla, 'idMenu' => $idMenu);
			return $this->db->insert($dataVa, 'vajilla');
		}

		public function insertEquipoCocina($Nombre, $Cantidad, $idEvento){
			$dataEC = array('Nombre' => $Nombre, 'Cantidad' => $Cantidad, 'idEvento' => $idEvento);
			return $this->db->insert($dataEC, 'equipo_cocina');
		}

		public function insertEquipoCocinaOtros($Nombre, $idEvento){
			$dataEC = array('Nombre' => $Nombre, 'idEvento' => $idEvento);
			return $this->db->insert($dataEC, 'equipo_cocina');
		}

		public function getInfo($id){


			return json_encode($this->db->selectStrict("ev.fechaEvento, ev.nombreVendedor, descev.numAdultos, descev.margen, descev.numNi_os, op.CapitanEnJefe, op.Supervisor, op.NumMeseros, ev.hrInicioEvento,ev.telLugarEvento, ev.hrFinEvento, ev.hrInicioRecepcionEvento, ev.hrFinRecepcionEvento, ev.hrInicioCoctelEvento, ev.hrFinCoctelEvento, ev.hrInicioBanqueteEvento, ev.hrFinalBanqueteEvento, ev.tornaInicio, ev.tornaFin, ev.hrInicioOtroEvento, ev.hrFinalOtroEvento, ev.lugarEvento, ev.direccionEvento, ev.colonia, ev.municipio, ev.estado, descev.tipoServicio, descev.tipoEvento" , " descripcionevento descev, evento_ ev, operativo_servicio op"," descev.idEvento = '$id' AND ev.idEvento = '$id' AND op.idEvento = '$id'"));

		}
		public function getEvento($id){

			//contratante, descripcion evento, equipo operativo, evento_ ,operativo_servicio, proveedores externos
			return json_encode($this->db->selectStrict("*","contratante contr, descripcionevento descev,equipo_operativo eqop, evento_ ev, operativo_servicio op, proveedores_externos provex", "descev.idEvento = '$id' AND ev.idEvento = '$id' AND op.idEvento = '$id' AND eqop.idEvento = '$id' AND contr.idEvento = '$id' AND provex.idEvento = '$id'"));
		}

		public function getPreevento($id){
			$cotizacion = $this->db->selectStrict("*", "cotizado c", "c.idPreevento = '$id'");
			$informacion = $this->db->selectStrict("*","preevento", "idPreevento = '$id'");
			if($cotizacion != '0'){

				return json_encode(array('cotizacion'=>$cotizacion, 'info'=>$informacion));
			}


			return json_encode($informacion);
		}

		public function insertProtocolo($idEvento,$fechaScout,$INE,$listaPersonal,$listaVehiculos,$altaIMSS,$cartaResponsiva,$zapatosSeguridad,$cascoSeguridad,$lentesSeguridad,$chalecoSeguridad,$arnes,$guantesSeguridad,$extintores,$ingresaVehiculo,$estacionamientoInvitados,$estacionamientoProveedor,$valetParking){
			$dataPro = array('idEvento'=>$idEvento,'fechaScouting'=>$fechaScout,'INE'=>$INE,'ListaPersonal'=>$listaPersonal,'ListaVehiculos'=>$listaVehiculos,'IMSS'=>$altaIMSS,'CartaResponsiva'=>$cartaResponsiva,'ZapatosSeguridad'=>$zapatosSeguridad,'CascoSeguridad'=>$cascoSeguridad,'LentesSeguridad'=>$lentesSeguridad,'ChalecoSeguridad'=>$chalecoSeguridad,'Arnes'=>$arnes,'GuatesSeguridad'=>$guantesSeguridad,'Extintores'=>$extintores,'IngresaVehiculoEmpresa'=>$ingresaVehiculo,'EstacionamientoInvitados'=>$estacionamientoInvitados,'EstacionamientoProveedor'=>$estacionamientoProveedor,'ValetParking'=>$valetParking);
			return $this->db->insert($dataPro, "protocolo_acceso");
		}

		public function insertLog($idEvento,$horarioAcceso,$lugarAlmacenamiento,$responsableLugar){
			$dataLog = array('idEvento' => $idEvento, 'HorarioDeAcceso'=>$horarioAcceso, 'LugarAlmacenamiento'=>$lugarAlmacenamiento, 'ResponsableLugar'=>$responsableLugar);

			return $this->db->insert($dataLog, "logistica_entrega");
		}

		public function insertScouting1($ubicacionBanos,$tipoBanos,$carpaComensales,$carpaCocina,$carpaV,$cortinas,$sombrilla,$ubicacionBar,$ubicacionOperativo,$espacioBar,$espacioOperativo, $idEvento){
			$dataS1 = array('ubicacionBanos' => $ubicacionBanos, 'tipoBanos'=>$carpaComensales, 'carpaCocina'=>$carpaCocina, 'carpa'=>$carpaV, 'cortinas'=>$cortinas, 'sombrillas'=>$sombrilla, 'ubicacionBar'=>$ubicacionBar, 'ubicacionOperativo'=>$ubicacionOperativo, 'espacioBar'=>$espacioBar, 'espacioOperativo'=>$espacioOperativo, 'idEvento'=>$idEvento);

			return $this->db->insert($dataS1, "scouting1");
		}

		public function insertScouting2($espacioMetros,$personasMesa,$metrosPista,$montajeEspecial,$calidadIlumacion,$iluminacionCocina,$plantaLuz,$cerradoCuatroParedes,$accesoIndependiente,$calidadIlumacionCocina,	$ventilacion,	$aguaPotable,$corrienteElectrica,$tipoSuelo,$alturaLugar,$distanciaCocinaComedor,$idEvento){

			$dataS2 = array('espacioDisponible' => $espacioMetros, 'personasPorMesa'=>$personasMesa, 'metrosPista'=>$metrosPista, 'montajeEspecial'=>$montajeEspecial, 'calidadIluminacion'=>$calidadIlumacion, 'iluminacionCocina'=>$iluminacionCocina, 'plantaLuz'=>$plantaLuz, 'cerrado4Paredes'=> $cerradoCuatroParedes, 'accesoIndependiente'=>$accesoIndependiente, 'calidadIlumacionCocina'=>$calidadIlumacionCocina, 'ventilacion'=>$ventilacion, 'aguaPotable'=>$aguaPotable, 'corrienteElectrica'=>$corrienteElectrica, 'tipoSuelo'=>$tipoSuelo, 'alturaLugar'=>$alturaLugar, 'distanciaCocinaComedor'=>$distanciaCocinaComedor, 'idEvento'=>$idEvento);

			return $this->db->insert($dataS2, "scouting2");
		}


		public function insertPre($fechaEvento, $vendedor, $tipoCliente, $contacto, $estadoCiudad, $empresa, $tipoEmpresa, $telContacto, $telContacto2, $email, $email2, $tipoEvento, $lugar, $calleNumero, $colonia, $municipio, $estado, $tel, $entreCalles, $codigoPostal, $totalPersonas, $adultos, $ninos, $horario, $hrServicio, $fechaCita, $hrCita, $metodoCita, $hrExtra, $costoHr){

			$data = array('fechaEvento' => $fechaEvento, 'vendedor' => $vendedor, 'tipoCliente' => $tipoCliente, 'contacto' => $contacto, 'estadoCiudad' => $estadoCiudad, 'empresa' => $empresa, 'tipoEmpresa' => $tipoEmpresa, 'telContacto' => $telContacto, 'telContacto2' => $telContacto2, 'email' => $email, 'email2' => $email2, 'tipoEvento' => $tipoEvento, 'lugar' => $lugar, 'calleNumero' => $calleNumero, 'colonia' => $colonia, 'municipio' => $municipio, 'estado' => $estado, 'tel' => $tel, 'entreCalles' => $entreCalles, 'codigoPostal' => $codigoPostal, 'totalPersonas' => $totalPersonas, 'adultos' => $adultos, 'ninos' => $ninos, 'horario' => $horario, 'hrServicio' => $hrServicio, 'fechaCita' => $fechaCita, 'hrCita' => $hrCita, 'metodoCita' => $metodoCita, 'hrExtra' => $hrExtra, 'costoHr' => $costoHr);

			return $this->db->insert($data, "preevento");
		}

		public function bitac($fecha, $descripcion, $idPreevento){
			$data = array('fecha' => $fecha, 'descripcion' => $descripcion, 'idPreevento'=>$idPreevento);
			return $this->db->insert($data, "bitacora");
		}

		public function selectIdPreevento($fechaEvento, $vendedor, $tipoEvento){
			return $this->db->select("*", "preevento", "fechaEvento = '$fechaEvento' AND vendedor = '$vendedor' AND tipoEvento = '$tipoEvento'");
		}

		public function idPreevento($fechaEvento, $vendedor, $tipoEvento){
			return $this->db->select("*", "preevento", "fechaEvento = '$fechaEvento' AND vendedor = '$vendedor' AND tipoEvento = '$tipoEvento'");
		}

		public function selectBita($idPreevento){
			return $this->db->selectStrict("*", "bitacora", "idPreevento = '$idPreevento'");
		}
		public function insertCoti($descripcion, $cantidad, $precio, $idPreevento){
			$data = array('Descripcion' => $descripcion, 'Cantidad'=>$cantidad, 'PrecioUnitario'=>$precio, 'idPreevento'=>$idPreevento);
			return $this->db->insert($data, "cotizado");
		}


	}



 ?>
