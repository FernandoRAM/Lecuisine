<div id="evento">
	<h1>Info del evento</h1>
	<div id="servicio">
		<h3>Uniforme requerido</h3>
		<br>
		<textarea id="descUniforme" cols="30" rows="10"></textarea>
		<br><br><br>
		<h3>Reclutamiento del servicio</h3>
		<br>
		<table>
			<tr>
				<th></th>
				<th>Inicio</th>
				<th>Fin</th>
			</tr>
			<tr>
				<td>
					<label for="hrRecluIn">Hora reclutamiento</label>
				</td>
				<td>
					 <input type="time" id="hrRecluIn">
				</td>
				<td>
					<input type="time" id="hrRecluFin">
				</td>
			</tr>
			<tr>
				<td>
					<label for="lugarReclutamiento">Lugar de reclutamiento</label>
				</td>
				<td colspan="2">
					<input type="text" id="lugarReclutamiento" placeholder="Lugar de reclutamiento">
				</td>
			</tr>
			<tr>
				<td>
					<label for="modoTraslado">Modo de traslado</label>
				</td>
				<td colspan="2">
					<input type="text" id="modoTraslado" placeholder="Modo de traslado">
				</td>
			</tr>
		</table>

		<input type="button" id="btnServicio" name="btnServicio" onclick="btnServicio()" value="Guardar">
	</div>
	
</div>