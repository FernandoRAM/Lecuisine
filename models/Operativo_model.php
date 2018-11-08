<?php

class Operativo_model extends Model {

		public function getEvento($id){
			//los datos para vista previa de operativo ;menú(bocadillos, sopa o crema, plato fuerte, menu inf, entremes, postres), torna, No. torna, pan, jugos, destilados, cctel, aguas de sabor
			return json_encode($this->db->selectStrict("ev.fechaEvento, ev.telLugarEvento,ev.nombreVendedor, descev.numAdultos, descev.margen, descev.numNi_os, op.CapitanEnJefe, op.Supervisor, op.NumMeseros, ev.hrInicioEvento, ev.hrFinEvento, ev.hrInicioRecepcionEvento, ev.hrFinRecepcionEvento, ev.hrInicioCoctelEvento, ev.hrFinCoctelEvento, ev.hrInicioBanqueteEvento, ev.hrFinalBanqueteEvento, ev.tornaInicio, ev.tornaFin, ev.hrInicioOtroEvento, ev.hrFinalOtroEvento, ev.lugarEvento, ev.direccionEvento, ev.colonia, ev.municipio, ev.estado, descev.tipoServicio, descev.tipoEvento, eqop.FechaEntregaEquipo, eqop.HorarioEntregaEquipo, eqop.FechaPreMontaje, eqop.HorarioPreMontaje, eqop.NumPersonasPreMontaje, eqop.FechaMontaje, eqop.HoraMontaje, descev.horasServicio, va.NombreTipoVajilla, equcos.Nombre, equcos.Cantidad, men.bocadillos, men.entremes, men.SopaOCrema, men.platoFuerte,men.MenuInfantil,men.TipoTornaFiesta,men.NumPersonasTF,men.DescripcionTF,men.postre, p.NombrePan, men.idMenu" , " descripcionevento descev, evento_ ev, operativo_servicio op, equipo_operativo eqop, vajilla va, menu men, equipo_cocina equcos, pan p"," descev.idEvento = '$id' AND ev.idEvento = '$id' AND op.idEvento = '$id' AND eqop.idEvento = '$id' AND men.idEvento = '$id' AND equcos.idEvento = '$id' AND va.idMenu = men.idMenu AND p.idMenu = men.idMenu"));



		}

		public function verificarID($id){
			return $this->db->selectStrict("u.idTipoUsuario AS 'Tipo', t.idTipoUsuario AS 't.idTipoUsuario',
										u.NombreUsuario AS 'u.NombreUsuario', t.TipoUsuario AS 'Controller'", "usuario u, tipo_usuario t",
										"u.idTipoUsuario = t.idTipoUsuario AND u.idTipoUsuario = '$id' AND
										t.idTipoUsuario = '$id'");
		}

		public function getBeb($id){

			return json_encode($this->db->selectStrict("NombreBebida, CategoriaBebida" , "bebida", "bebida.idMenu = '$id'"));



		}

		public function getMenu($id){
			return $this->db->select("*", "menu", "idEvento='$id'");
		}

		public function getBebidas($idMenu, $categoria){
			return $this->db->selectStrict("*", "bebida", "idMenu='$idMenu' AND CategoriaBebida = '$categoria'");
		}

		public function updateOpeSer($chofer, $operativo, $jefe, $idEvento){
			$dataOS = array('NumChoferes' => $chofer, 'NumOperativo'=>$operativo, 'NumJefeOperativo' =>$jefe);
			return $this->db->update($dataOS, "operativo_servicio", "idEvento = '$idEvento'");
		}

		public function selectOpeSer($idEvento){
			return $this->db->select("*", "operativo_servicio", "idEvento = '$idEvento'");
		}

		public function insertMobiliario($tipoMobiliario, $cantidadMobiliario, $idOperativo){
			$dataMobiliario = array('tipoMobiliario'=>$tipoMobiliario, 'cantidadMobiliario' => $cantidadMobiliario, 'idOperativo'=>$idOperativo);
			return $this->db->insert($dataMobiliario, "mobiliario");
		}

		public function insertMA($nombreMA, $tipoMA, $cantMa, $numPerMA, $idOperativo){
			$dataMA = array('Mobiliario'=>$nombreMA, 'Tipo' => $tipoMA, 'Cantidad'=>$cantMa, 'NumPersonas'=>$numPerMA, 'idOperativo'=>$idOperativo);
			return $this->db->insert($dataMA, "mobiliario_adicional");
		}

		public function insertCris($tipoCris, $cantCris, $idOperativo){
			$dataCris = array('Tipo' => $tipoCris, 'Cantidad'=>$cantCris, 'idOperativo'=>$idOperativo);
			return $this->db->insert($dataCris, "cristaleria");
		}

		public function updateRefresco($nombreChesco, $presChesco, $idMenu){
			$dataChesco = array('Presentacion'=>$presChesco);
			return $this->db->update($dataChesco, "bebida", "NombreBebida = '$nombreChesco' AND idMenu ='$idMenu'");
		}

		public function updateCheve($nombreCheve, $cantCheve, $idMenu){
			$dataChela = array('Cantidad'=>$cantCheve);
			return $this->db->update($dataChela, "bebida", "NombreBebida = '$nombreCheve' AND idMenu ='$idMenu'");
		}

		public function insertSilla($tipoSilla, $cantSilla, $colorSilla, $provSilla, $idOperativo){
			$dataSilla = array('NombreTipoSilla'=>$tipoSilla, 'Cantidad' => $cantSilla, 'ColorSilla'=>$colorSilla, 'ProveedorSilla'=>$provSilla, 'idOperativo'=>$idOperativo);
			return $this->db->insert($dataSilla, "silla");
		}

		public function insertDecoracionSilla($sillaFunda, $sillaFundaBanda, $idOperativo){
			$dataDecoration = array('SillaFunda' => $sillaFunda, 'SillaFundaBanda'=>$sillaFundaBanda, 'idOperativo'=>$idOperativo);
			return $this->db->insert($dataDecoration, "decoracion_silla");
		}

		public function insertMantel($tipoMantel, $cantMantel, $colorMantel, $provMantel, $idOperativo){
			$dataMantel = array('NombreTipoMantel'=>$tipoMantel, 'CantidadMantel' => $cantMantel, 'ColorMantel'=>$colorMantel, 'ProveedorMantel'=>$provMantel, 'idOperativo'=>$idOperativo);
			return $this->db->insert($dataMantel, "mantel");
		}

		public function insertServilleta($tipoServilleta, $cantServilleta, $colorServilleta, $provServilleta, $idOperativo){
			$dataServilleta = array('NombreTipoServilleta'=>$tipoServilleta, 'Cantidad' => $cantServilleta, 'ColorServilleta'=>$colorServilleta, 'ProveedorServilleta'=>$provServilleta, 'idOperativo'=>$idOperativo);
			return $this->db->insert($dataServilleta, "servilleta");
		}

		public function insertBanda($tipoBanda, $cantBanda, $colorBanda, $provBanda, $idOperativo){
			$dataBanda = array('NombreTipoBanda'=>$tipoBanda, 'Cantidad' => $cantBanda, 'ColorBanda'=>$colorBanda, 'ProveedorBanda'=>$provBanda, 'idOperativo'=>$idOperativo);
			return $this->db->insert($dataBanda, "banda");
		}

		public function getInfo($id){

			return json_encode($this->db->selectStrict("ev.fechaEvento, ev.nombreVendedor, descev.numAdultos, descev.margen, descev.numNi_os, op.CapitanEnJefe, op.Supervisor, op.NumMeseros, ev.hrInicioEvento,ev.telLugarEvento, ev.hrFinEvento, ev.hrInicioRecepcionEvento, ev.hrFinRecepcionEvento, ev.hrInicioCoctelEvento, ev.hrFinCoctelEvento, ev.hrInicioBanqueteEvento, ev.hrFinalBanqueteEvento, ev.tornaInicio, ev.tornaFin, ev.hrInicioOtroEvento, ev.hrFinalOtroEvento, ev.lugarEvento, ev.direccionEvento, ev.colonia, ev.municipio, ev.estado, descev.tipoServicio, descev.tipoEvento" , " descripcionevento descev, evento_ ev, operativo_servicio op"," descev.idEvento = '$id' AND ev.idEvento = '$id' AND op.idEvento = '$id'"));

		}


		public function insertServicio($id,$hrRecluIn,$hrRecluFin,$lugarReclutamiento,$modoTraslado){
			$dataServicio = array('hrReclutamientoIn' => $hrRecluIn, 'hrReclutamientoFin'=>$hrRecluFin, 'LugarReclutamiento'=>$lugarReclutamiento, 'ModoTraslado'=>$modoTraslado, 'idEvento'=>$id);
			return $this->db->insert($dataServicio, "servicio");
		}

		public function insertUS($id, $descUniforme){
			$dataUS = array('Descripcion' => $descUniforme, 'idEvento'=>$id);
			return $this->db->insert($dataUS, "uniforme_servicio");
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



	}



 ?>
