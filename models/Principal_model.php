<?php

	/**
	*
	*/
	class Principal_model extends Model
	{
		public function ingresar($user, $pass){
			return $this->db->select("*" , "usuario", "NombreUsuario = '$user' AND Password = '$pass'");
		}

		public function insertarUsuario($user, $pass, $idTipoUser){
			$data = array('NombreUsuario' => $user, 'Password' => $pass, 'idTipoUsuario' => $idTipoUser);
			return $this->db->insert($data, 'usuario');
		}

		public function getEventos(){

			return $this->db->selectStrict("c.nombreContratante, ev.fechaEvento, ev.lugarEvento, descev.tipoServicio, descev.totalPersonas, c.idEvento" , "contratante c, descripcionevento descev, evento_ ev","c.idEvento = ev.idEvento AND descev.idEvento = ev.idEvento AND c.idEvento = descev.idEvento", "fechaEvento");
		}

		public function getPreEventos(){
			$nombre = Session::getValue('Usuario');

			return $this->db->selectStrict("*" , "preevento", "vendedor = '$nombre'");
		}

		public function verificarID($id){
			return $this->db->selectStrict("u.idTipoUsuario AS 'Tipo', t.idTipoUsuario AS 't.idTipoUsuario',
										u.NombreUsuario AS 'u.NombreUsuario', t.TipoUsuario AS 'Controller'", "usuario u, tipo_usuario t",
										"u.idTipoUsuario = t.idTipoUsuario AND u.idTipoUsuario = '$id' AND
										t.idTipoUsuario = '$id'");
		}




	}

?>
