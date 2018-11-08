<div id="evento">
  <h1>Operativo</h1>
  <!--Fila-->
  <div class="row">
    <div class="col-25">
      <label>Fecha del evento:</label>
    </div>
    <div class="col-25">
      <input type="text" id="fechaEvento" disabled>
    </div>
  </div>
  <!--Fila-->
  <div class="row">
    <div class="col-25">
      <label>Vendedor:</label>
    </div>
    <div class="col-25">
      <input type="text" id="vendedor" disabled>
    </div>
  </div>
  <!--Fila-->
  <div class="row">
    <div class="col-25">
      <label>Comensales:</label>
    </div>
    <div class="col-25">
      <input type="text" id="comensales" disabled>
    </div>
  </div>
  <!--Fila-->
  <div class="row">
    <div class="col-25">
      <label>Margen:</label>
    </div>
    <div class="col-25">
      <input type="text" id="margen" disabled>
    </div>
  </div>
  <!--Fila-->
  <div class="row">
    <div class="col-25">
      <label>Niños:</label>
    </div>
    <div class="col-25">
      <input type="text" id="ninios" disabled>
    </div>
  </div>
  <!--Fila-->
  <div class="row">
    <div class="col-25">
      <label>Supervisor:</label>
    </div>
    <div class="col-25">
      <input type="text" id="supervisor" disabled>
    </div>
  </div>
  <!--Fila-->
  <div class="row">
    <div class="col-25">
      <label>Capitan en Jefe:</label>
    </div>
    <div class="col-25">
      <input type="text" id="capitan" disabled>
    </div>
  </div>
  <!--Fila-->
  <div class="row">
    <div class="col-25">
      <label>Meseros:</label>
    </div>
    <div class="col-25">
      <input type="text" id="meseros" disabled>
    </div>
  </div><br><br><br>
  <table>
    <tr>
      <th>Descripción</th>
      <th>Inicio</th>
      <th>Fin</th>
    </tr>
    <tr>
      <td>Horario del evento</td>
      <td><input type="text" id="horaInicioHorario" disabled></td>
      <td><input type="text" id="horaFinHorario" disabled></td>
    </tr>
    <tr>
      <td>Recepción</td>
      <td><input type="text" id="horaInicioRecepcion" disabled></td>
      <td><input type="text" id="horaFinRecepcion" disabled></td>
    </tr>
    <tr>
      <td>Coctel</td>
      <td><input type="text" id="horaInicioCoctel" disabled></td>
      <td><input type="text" id="horaFinCoctel" disabled></td>
    </tr>
    <tr>
      <td>Banquetes</td>
      <td><input type="text" id="horaInicioBanquetes" disabled></td>
      <td><input type="text" id="horaFinBanquetes" disabled></td>
    </tr>
    <tr>
      <td>Torna fiesta</td>
      <td><input type="text" id="horaInicioTF" disabled></td>
      <td><input type="text" id="horaFinTF" disabled></td>
    </tr>
    <tr>
      <td>Otros</td>
      <td><input type="text" id="horaInicioOtros" disabled></td>
      <td><input type="text" id="horaFinOtros" disabled></td>
    </tr>
  </table><br><br>
  <h3>Lugar del evento</h3><br><br>
  <label>
    Lugar <input type="text" id="lugarEvento" disabled>
  </label>
  <label>
    Calle y número: <input type="text" id="calleConNum" disabled>
  </label><br>
  <label>
    Colonia: <input type="text" id="colonia" disabled>
  </label><br>
  <label>
    Municipio: <input type="text" id="municipio" disabled>
  </label><br>
  <label>
    Estado: <input type="text" id="estado" disabled>
  </label><br>
  <label>
    Teléfono: <input type="text" id="telLugarEvento" disabled>
  </label><br>
  <label>
    <div class="row">
      <div class="col-25">
        <label>Tipo evento:</label>
      </div>
      <div class="col-25">
        <input type="text" id="tipoEvento" disabled>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label>Tipo servicio:</label>
      </div>
      <div class="col-25">
        <input type="text" id="tipoServicio" disabled>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label>Horas de Servicio:</label>
      </div>
      <div class="col-25">
        <input type="text" id="hrServicio" disabled>
      </div>
    </div><br><br><br><br>
    <table>
      <tr>
        <th>Descripción</th>
        <th>Fecha</th>
        <th>Horario</th>
      </tr>
      <tr>
        <td>Entrega de equipo</td>
        <td><input type="text" id="fechaEntregaEquipo" disabled></td>
        <td><input type="text" id="horarioEntregaEquipo" disabled></td>
      </tr>
      <tr>
        <td>Pre montaje</td>
        <td><input type="text" id="fechaPreMontaje" disabled></td>
        <td><input type="text" id="horarioPreMontaje" disabled></td>
      </tr>
      <tr>
        <td>Número de personas pre montaje</td>
        <td><input type="text" id="numPer" disabled></td>
      </tr>
      <tr>
        <td>Montaje</td>
        <td><input type="text" id="fechaMontaje" disabled></td>
        <td><input type="text" id="horarioMontaje" disabled></td>
      </tr>
    </table><br><br>
    
    <!-- se tiene que agregar fechas y horarios premontaje y horas de servicio -->
    
    <div>
      <div>
        <div id="PersonalOperativo">
          <table>
            <tr>
              <th colspan="2"><h2>Personal operativo</h2></th>
            </tr>
            <tr>
              <td>Chofer</td>
              <td><input type="number" id="numChofer"></td>
            </tr>
            <tr>
              <td>Operativo</td>
              <td><input type="number" id="numOpe"></td>
            </tr>
            <tr>
              <td>Jefe operativo</td>
              <td><input type="number" id="numJO"></td>
            </tr>
          </table>
        </div>
        <br><br><br>
        <div>
          <h2>Mobiliario</h2>
          <div id="datosMobiliario"></div>
          <input type="button" onclick="mobiliario()" id="btnMobiliario" value="Insertar mobiliario">
        </div>
        <br><br><br>
        
        <div id="mobiliarioAdicional">
          <h2>Mobiliario Adicional</h2>
          <div id="datosMobiliarioAdicional"></div>
          <input type="button" onclick="mobiliarioAdicional()" id="btnMA" value="Insertar mobiliario adicional">
        </div>
        <br><br><br>
        <div id="Cristaleria">
          <h2>Cristalería</h2>
          <div id="datosCris"></div>
          <input type="button" onclick="cristaleria()" id="btnCris" value="Insertar cristalería">
        </div>
        <br><br><br>
        <div id="Refresco">
          <h2>Refresco</h2>
          <div id="divChesco">
            <img src onerror='refresco()'>
          </div>
        </div>
        <br><br><br>
        <div id="Cerveza">
          <h2>Cerveza</h2>
          <div id="divChela">
            <img src onerror='cerveza()'>
          </div>
        </div>
        
        <br><br><br>
        <div id="Sillas">
          <h2>Sillas</h2>
          <div id="datosSillas"></div>
          <input type="button" onclick="sillas()" id="btnSillas" value="Insertar silla">
        </div>
        <br><br><br>
        <div id="SillaFunda">
          Silla con funda
          <select id="sillaFunda">
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>
        <br><br><br>
        <div id="SillaFundaBanda">
          Silla con funda y banda
          <select id="sillaFundaBanda">
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
        </div>
        <br><br><br>
        <div id="Manteleria">
          <h2>Mantelería</h2>
          <div id="datosMant"></div>
          <input type="button" onclick="manteleria()" id="btnMant" value="Insertar mantelería">
        </div>
        <br><br><br>
        <div id="Servilleta">
          <h2>Servilletas</h2>
          <div id="datosSer"></div>
          <input type="button" onclick="servilleta()" id="btnSer" value="Insertar servilleta">
        </div>
        <br><br><br>
        <div id="Banda">
          <h2>Banda</h2>
          <div id="datosBanda"></div>
          <input type="button" onclick="banda()" id="btnBanda" value="Insertar banda para silla">
        </div>
        <br><br><br><br><br>

          <div class="row">
    <div class="col-25">
      <label>Tipo de Vajilla:</label>
    </div>
    <div class="col-25">
      <input type="text" id="tipoVajilla" disabled>
    </div>
  </div><br><br><br>

    <table>
    <tr>
      <th colspan="8"><h3>Equipo Cocina</h3></th>
    </tr>
    
    <tr>
      <td><input type="text" id="estufones" value="Estufones" disabled></td>
      <td><input type="number" id="numEstufones" min="0" disabled></td>
      <td><input type="text" id="estufa3Quemadores" value="Estufa de 3 quemadores" disabled></td>
      <td><input type="number" id="numEstufa3Q" min="0" disabled></td>
    </tr>
    <tr>
      <td><input type="text" id="pulpo" value="Pulpo" disabled></td>
      <td><input type="number" id="numPulpo" min="0" disabled></td>
      <td><input type="text" id="horno" value="Horno" disabled></td>
      <td><input type="number" id="numHorno" min="0" disabled></td>
    </tr>
    <tr>
      <td><input type="text" id="tanqueGas" value="Tanques de gas" disabled></td>
      <td><input type="number" id="numTanquesGas" min="0" disabled></td>
      <td><input type="text" id="tablones" value="Tablones" disabled></td>
      <td><input type="number" id="numTablones" min="0" disabled></td>
    </tr>
    <tr>
      <td><input type="text" id="garrafones" value="Garrafones" disabled></td>
      <td><input type="number" id="numGarrafones" min="0" disabled></td>
      <td><input type="text" id="otros" value="Otros" disabled></td>
      <td><input type="text" id="descOtros" disabled></td>
    </tr>
  </table><br>
  <h1>Menú</h1>

   <div class="row">
        <div class="col-25">
          <label>Bocadillos</label>
        </div>
        <div class="col-25">
          <textarea class="areaC" name="bocadillos" id="bocadillos" cols="30" rows="10" disabled></textarea>
        </div>
      </div> 
<!--Fila-->
        <div class="row">
        <div class="col-25">
          <label>Sopa o crema</label>
        </div>
        <div class="col-25">
          <textarea class="areaC" name="sopaCrema" id="sopaCrema" cols="30" rows="10" disabled></textarea>
        </div>
      </div>    
<!--Fila-->
      <div class="row">
        <div class="col-25">
          <label>Plato fuerte</label>
        </div>
        <div class="col-25">
          <textarea class="areaC" name="platoFuerte" id="platoFuerte" cols="30" rows="10" disabled></textarea>
        </div>
      </div>
<!--Fila-->
      <div class="row">
        <div class="col-25">
          <label>Entremes</label>
        </div>
        <div class="col-25">
          <textarea class="areaC" name="entremes" id="entremes" cols="30" rows="10" disabled></textarea>
        </div>
      </div> 
<!--Fila-->
      <div class="row">
        <div class="col-25">
          <label>Menú infantil</label>
        </div>
        <div class="col-25">
          <textarea class="areaC" name="menuInfantil" id="menuInfantil" cols="30" rows="10" disabled></textarea>
        </div>
      </div> 
<!--Fila-->
      <div class="row">
        <div class="col-25">
          <label>Postres</label>
        </div>
        <div class="col-25">
          <textarea class="areaC" name="postres" id="postres" cols="30" rows="10" disabled></textarea>
        </div>
      </div> 
<!--Fila-->
      <div class="row">
        <div class="col-25">
          <label>Torna fiesta</label>
        </div>
        <div class="col-25">
          <input type="text" name="tornaFiestaTipo" id="tornaFiestaTipo" placeholder="Tipo de Tornafiesta" disabled>
        </div>
      </div> 
<!--Fila-->
      <div class="row">
        <div class="col-25">
          <label>Num. personas torna fiesta</label>
        </div>
        <div class="col-25">
          <input type="number" name="numTorna" id="numTorna" min="0" disabled>
        </div>
      </div> 
<!--Fila-->
      <div class="row">
        <div class="col-25">
          <label></label>
        </div>
        <div class="col-25">
        </div>
      </div> 
<!--Fila-->
      <div class="row">
        <div class="col-25">
          <label>Descripción torna fiesta</label>
        </div>
        <div class="col-25">
          <textarea class="areaC" name="descTorna" id="descTorna" cols="30" rows="10" disabled></textarea>
        </div>
      </div> 

      <div class="row">
        <div class="col-25">
          <label>Pan</label>
        </div>
        <div class="col-25">
          <textarea class="areaC" name="pan" id="pan" cols="30" rows="10" disabled></textarea>
        </div>
      </div><br><br>

<h1>Bebidas</h1>
      <div class="row">
        <div class="col-25">
          <label>Jugos</label>
        </div>
        <div class="col-25">
          <textarea class="areaC" name="jugo" id="jugo" cols="30" rows="10" disabled></textarea>
        </div>
      </div> 
       <div class="row">
        <div class="col-25">
          <label>Aguas de Sabor</label>
        </div>
        <div class="col-25">
          <textarea class="areaC" name="aguas" id="aguas" cols="30" rows="10" disabled></textarea>
        </div>
      </div> 
       <div class="row">
        <div class="col-25">
          <label>Destilados</label>
        </div>
        <div class="col-25">
          <textarea class="areaC" name="destil" id="destil" cols="30" rows="10" disabled></textarea>
        </div>
      </div> 
       <div class="row">
        <div class="col-25">
          <label>Coctel</label>
        </div>
        <div class="col-25">
          <textarea class="areaC" name="coct" id="coct" cols="30" rows="10" disabled></textarea>
        </div>
      </div> 
       <div class="row">
        <div class="col-25">
          <label>Refresco</label>
        </div>
        <div class="col-25">
          <textarea class="areaC" name="refresc" id="refresc" cols="30" rows="10" disabled></textarea>
        </div>
      </div> 
       <div class="row">
        <div class="col-25">
          <label>Cerveza</label>
        </div>
        <div class="col-25">
          <textarea class="areaC" name="cervez" id="cervez" cols="30" rows="10" disabled></textarea>
        </div>
      </div> 



        <div id="btnAddOpe">
          <input type="button" id="btnVerificarDatos" onclick="btnVerificarDatos()" value="Guardar">
        </div>
      </div>
    </div>
  </div>
