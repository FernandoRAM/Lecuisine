<?php

	/**
	 *
	 */
	class Logistica_model extends Model{
		public function getInfo($id){

			/*return json_encode($this->db->selectStrict("ev.fechaEvento, ev.nombreVendedor, descev.numAdultos, descev.margen, descev.numNi_os, op.CapitanEnJefe, op.Supervisor, op.NumMeseros, ev.hrInicioEvento, ev.hrFinEvento, ev.hrInicioRecepcionEvento, ev.hrFinRecepcionEvento, ev.hrInicioCoctelEvento, ev.hrFinCoctelEvento, ev.hrInicioBanqueteEvento, ev.hrFinalBanqueteEvento, ev.tornaInicio, ev.tornaFin, ev.hrInicioOtroEvento, ev.hrFinalOtroEvento, ev.lugarEvento, ev.direccionEvento, ev.colonia, ev.municipio, ev.estado, descev.tipoServicio, descev.tipoEvento" , " descripcionevento descev, evento_ ev, operativo_servicio op"," descev.idEvento = '$id' AND ev.idEvento = '$id' AND op.idEvento = '$id'"));*/


			//Se descomenta ya que esté guardado el tel del lugar (telLugarEvento) YAAAAA


			return json_encode($this->db->selectStrict("ev.fechaEvento, ev.nombreVendedor, descev.numAdultos, descev.margen, descev.numNi_os, op.CapitanEnJefe, op.Supervisor, op.NumMeseros, ev.hrInicioEvento,ev.telLugarEvento, ev.hrFinEvento, ev.hrInicioRecepcionEvento, ev.hrFinRecepcionEvento, ev.hrInicioCoctelEvento, ev.hrFinCoctelEvento, ev.hrInicioBanqueteEvento, ev.hrFinalBanqueteEvento, ev.tornaInicio, ev.tornaFin, ev.hrInicioOtroEvento, ev.hrFinalOtroEvento, ev.lugarEvento, ev.direccionEvento, ev.colonia, ev.municipio, ev.estado, descev.tipoServicio, descev.tipoEvento" , " descripcionevento descev, evento_ ev, operativo_servicio op"," descev.idEvento = '$id' AND ev.idEvento = '$id' AND op.idEvento = '$id'"));

		}

		public function verificarID($id){
			return $this->db->selectStrict("u.idTipoUsuario AS 'Tipo', t.idTipoUsuario AS 't.idTipoUsuario',
										u.NombreUsuario AS 'u.NombreUsuario', t.TipoUsuario AS 'Controller'", "usuario u, tipo_usuario t",
										"u.idTipoUsuario = t.idTipoUsuario AND u.idTipoUsuario = '$id' AND
										t.idTipoUsuario = '$id'");
		}

		public function getEvento($id){

			return json_encode($this->db->selectStrict("ev.nombreVendedor" , "evento_ ev","ev.idEvento = '$id'"));



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
