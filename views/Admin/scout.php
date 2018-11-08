<div>
	<label>Fecha scouting <input type="date" id="fechaScout"></label>
	<br><br><br>
	<table>
		<tr>
			<th colspan="2">Protocolo de acceso</th>
		</tr>
		<tr>
			<th></th>
			<th>Sí/No</th>
		</tr>
		<tr>
			<td>
				Identificación oficial (INE):
			</td>
			<td>
				<select id="INE">
					<option value="si">Sí</option>
					<option value="no">No</option>
				</select>
			</td>
		</tr>
		<tr>
			<td>
				Lista de personal:
			</td>
			<td>
				<select id="listaPersonal">
					<option value="si">Sí</option>
					<option value="no">No</option>
				</select>
			</td>
		</tr>
		<tr>
			<td>
				Lista de vehículos:
			</td>
			<td>
				<select id="listaVehiculos">
					<option value="si">Sí</option>
					<option value="no">No</option>
				</select>
			</td>
		</tr>
		<tr>
			<td>
				Alta del IMSS:
			</td>
			<td>
				<select id="altaIMSS">
					<option value="si">Sí</option>
					<option value="no">No</option>
				</select>
			</td>
		</tr>
		<tr>
			<td>
				Carta responsiva:
			</td>
			<td>
				<select id="cartaResponsiva">
					<option value="si">Sí</option>
					<option value="no">No</option>
				</select>
			</td>
		</tr>
		<tr>
			<td>
				Zapatos de seguridad:
			</td>
			<td>
				<select id="zapatosSeguridad">
					<option value="si">Sí</option>
					<option value="no">No</option>
				</select>
			</td>
		</tr>
		<tr>
			<td>
				Casco de seguridad:
			</td>
			<td>
				<select id="cascoSeguridad">
					<option value="si">Sí</option>
					<option value="no">No</option>
				</select>
			</td>
		</tr>
		<tr>
			<td>
				Lentes de seguridad:
			</td>
			<td>
				<select id="lentesSeguridad">
					<option value="si">Sí</option>
					<option value="no">No</option>
				</select>
			</td>
		</tr>
		<tr>
			<td>
				Chaleco de seguridad:
			</td>
			<td>
				<select id="chalecoSeguridad">
					<option value="si">Sí</option>
					<option value="no">No</option>
				</select>
			</td>
		</tr>
		<tr>
			<td>
				Arnés:
			</td>
			<td>
				<select id="arnes">
					<option value="si">Sí</option>
					<option value="no">No</option>
				</select>
			</td>
		</tr>
		<tr>
			<td>
				Guantes de seguridad:
			</td>
			<td>
				<select id="guantesSeguridad">
					<option value="si">Sí</option>
					<option value="no">No</option>
				</select>
			</td>
		</tr>
		<tr>
			<td>
				Extintores:
			</td>
			<td>
				<select id="extintores">
					<option value="si">Sí</option>
					<option value="no">No</option>
				</select>
			</td>
		</tr>	
		<tr>
			<td>
				<label for="ingresaVehiculo">Ingresa vehículo (LeCuisine)</label>
			</td>
			<td>
				<input type="text" id="ingresaVehiculo">
			</td>
		</tr>
		<tr>
			<td>
				<label for="estacionamientoInvitados">Estacionamiento de invitados</label>
			</td>
			<td>
				<input type="text" id="estacionamientoInvitados">
			</td>
		</tr>
		<tr>
			<td>
				<label for="estacionamientoProveedor">Estacionamiento proveedor</label>
			</td>
			<td>
				<input type="text" id="estacionamientoProveedor">
			</td>
		</tr>
		<tr>
			<td>
				<label for="valetParking">¿Se requiere valet parking?</label>
			</td>
			<td>
				<input type="text" id="valetParking">
			</td>
		</tr>	
	</table>
	<br>
	<br>
	<br>
	<br>

	<table>
		<tr>
			<th colspan="2">
				Logística entrega
			</th>
		</tr>
		<tr>
			<td><label for="horarioAcceso">Horario de acceso</label></td>
			<td><input type="time" id="horarioAcceso"></td>
		</tr>
		<tr>
			<td><label for="lugarAlmacenamiento">Lugar de almacenamiento</label></td>
			<td><input type="text" id="lugarAlmacenamiento"></td>
		</tr>
		<tr>
			<td><label for="responsableLugar">Responsable del lugar</label></td>
			<td><input type="text" id="responsableLugar"></td>
		</tr>
	</table>
	<br>
	<br>
	<br>
	<br>

	<table>
		<tr>
			<th colspan="2">
				Baños de personal
			</th>
		</tr>
		<tr>
			<td><label for="ubicacionBanos">Ubicación de los baños</label></td>
			<td><input type="text" id="ubicacionBanos"></td>
		</tr>
		<tr>
			<td><label for="tipoBanos">Tipo baños</label></td>
			<td><input type="text" id="tipoBanos"></td>
		</tr>
	</table>

	<br>
	<br>
	<br>
	<br>
	<h2>En caso de comida, desayuno, cena o coctel considerar estos parámetros:</h2>
	<br>
	<table>
		<tr>
			 <th>m² por persona</th>
			 <th>Áreas</th>
			 <th>Personas por mesa</th>
		</tr>
		<tr>
			<td>1.25</td>
			<td>Sin pista y sin escenario</td>
			<td>10</td>
		</tr>
		<tr>
			<td>1.5</td>
			<td>Con pista y sin escenario</td>
			<td>10</td>
		</tr>
		<tr>
			<td>1.5</td>
			<td>Sin pista y sin escenario</td>
			<td>8</td>
		</tr>
		<tr>
			<td>1.75</td>
			<td>Con pista y con escenario</td>
			<td>8</td>
		</tr>
	</table>
	<br>
	<br>
	<br>
	<br>
	<table>
		<tr>
			<th colspan="2">
				Exterior (carpas)
			</th>
		</tr>
		<tr>
			<td><label for="carpaComensales">Carpa comensales</label></td>
			<td><input type="text" id="carpaComensales"></td>
		</tr>
		<tr>
			<td><label for="carpaCocina">Carpa cocina</label></td>
			<td><input type="text" id="carpaCocina"></td>
		</tr>
		<tr>
			<td><label for="carpaV">Carpa ()</label></td>
			<td><input type="text" id="carpaV"></td>
		</tr>
		<tr>
			<td><label for="cortinas">Tipo baños</label></td>
			<td>
				<select id="cortinas">
					<option value="si">Sí</option>
					<option value="no">No</option>
				</select>
			</td>
		</tr>
		<tr>
			<td><label for="sombrilla">Sombrillas</label></td>
			<td><input type="number" id="sombrilla"></td>
		</tr>
	</table>
	<br>
	<br>
	<br>
	<br>
	<table>
		<tr>
			<th colspan="2">
				Bar y operativo
			</th>
		</tr>
		<tr>
			<td><label for="ubicacionBar">Ubicación del bar</label></td>
			<td><input type="text" id="ubicacionBar"></td>
		</tr>
		<tr>
			<td><label for="ubicacionOperativo">Ubicación del operativo</label></td>
			<td><input type="text" id="ubicacionOperativo"></td>
		</tr>
		<tr>
			<td><label for="espacioBar">Espacio en m² del bar</label></td>
			<td><input type="text" id="espacioBar"></td>
		</tr>
			<td><label for="espacioOperativo">Espacio en m² del operativo</label></td>
			<td><input type="number" id="espacioOperativo"></td>
		</tr>
	</table>
	<br>
	<br>
	<br>
	<br>
	<table>
		<tr>
			<th colspan="2">
				Área de comedor
			</th>
		</tr>
		<tr>
			<td><label for="espacioMetros">Espacio disponible en m²</label></td>
			<td><input type="text" id="espacioMetros"></td>
		</tr>
		<tr>
			<td><label for="personasMesa">Personas por mesa</label></td>
			<td><input type="text" id="personasMesa"></td>
		</tr>
		<tr>
			<td><label for="metrosPista">Cantidad en m² pista</label></td>
			<td><input type="text" id="metrosPista"></td>
		</tr>
			<td><label for="montajeEspecial">Montaje espacial</label></td>
			<td><input type="number" id="montajeEspecial"></td>
		</tr>
	</table>
	<br>
	<br>
	<br>
	<br>
	<table>
		<tr>
			<th colspan="2">
				Iluminación
			</th>
		</tr>
		<tr>
			<td><label for="calidadIlumacion">Calidad de la iluminación</label></td>
			<td>
				<select id="calidadIlumacion">
					<option value="excelente">Excelente</option>
					<option value="buena">Buena</option>
					<option value="regular">Regular</option>
					<option value="mala">Mala</option>
				</select>
			</td>
		</tr>
		<tr>
			<td><label for="iluminacionCocina">Iluminación cocina</label></td>
			<td><input type="text" id="iluminacionCocina"></td>
		</tr>
		<tr>
			<td><label for="plantaLuz">Planta de luz</label></td>
			<td><input type="text" id="plantaLuz"></td>
		</tr>
	</table>
	<br>
	<br>
	<br>
	<br>
	<table>
		<tr>
			<th colspan="2">
				Cocina
			</th>
		</tr>
		<tr>
			<td><label for="cerradoCuatroParedes">Cerrado cuatro paredes</label></td>
			<td><input type="text" id="cerradoCuatroParedes"></td>
		</tr>
		<tr>
			<td><label for="accesoIndependiente">Acceso independiente</label></td>
			<td>
				<select id="accesoIndependiente">
					<option value="si">Sí</option>
					<option value="no">No</option>
				</select>
			</td>
		</tr>
		<tr>
			<td><label for="calidadIlumacionCocina">Iluminación</label></td>
			<td>
				<select id="calidadIlumacionCocina">
					<option value="excelente">Excelente</option>
					<option value="buena">Buena</option>
					<option value="regular">Regular</option>
					<option value="mala">Mala</option>
				</select>
			</td>
		</tr>
		<tr>
			<td><label for="ventilacion">Ventilación</label></td>
			<td>
				<select id="ventilacion">
					<option value="si hay">Sí hay</option>
					<option value="no hay">No hay</option>
				</select>
			</td>
		</tr>
		<tr>
			<td><label for="aguaPotable">Agua potable</label></td>
			<td>
				<select id="aguaPotable">
					<option value="si hay">Sí hay</option>
					<option value="no hay">No hay</option>
				</select>
			</td>
		</tr>
		<tr>
			<td><label for="corrienteElectrica">Corriente eléctrica</label></td>
			<td><input type="text" id="corrienteElectrica"></td>
		</tr>
		<tr>
			<td><label for="tipoSuelo">Tipo de suelo</label></td>
			<td><input type="text" id="tipoSuelo"></td>
		</tr>
		<tr>
			<td><label for="alturaLugar">Altura del lugar</label></td>
			<td><input type="text" id="alturaLugar"></td>
		</tr>
		<tr>
			<td><label for="distanciaCocinaComedor">Distancia cocina-comedor</label></td>
			<td><input type="text" id="distanciaCocinaComedor"></td>
		</tr>
	</table>
	<input type="button" id="btnInsertScout" onclick="insertScouting();" value="Guardar datos">

</div>