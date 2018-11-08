<form method="POST" action="#">
  <div class="contenedor">
    <h1>Información general del evento</h1>
    <!--Fila-->
    <div class="row">
      <div class="col-25">
        <label>Fecha del evento:</label>
      </div>
      <div class="col-25">
        <input type="date" id="fechaEvento" value="<?=date('Y-m-d')?>">
      </div>
    </div>
    <!--Fila-->
    <div class="row">
      <div class="col-25">
        <label>Vendedor:</label>
      </div>
      <div class="col-25">
        <input type="text" id="vendedor">
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label>Cliente:</label>
      </div>
      <div class="col-25">
        <input type="text" id="contratante">
      </div>
    </div>
    <!--Fila-->
    <div class="row">
      <div class="col-25">
        <label>Contacto involucrado:</label>
      </div>
      <div class="col-25">
        <input type="text" id="contactoInvolucrado">
      </div>
    </div>
    <!--Fila-->
    <div class="row">
      <div class="col-25">
        <label>Empresa:</label>
      </div>
      <div class="col-25">
        <input type="text" id="empresa">
      </div>
    </div>
    <!--Fila-->
    <div class="row">
      <div class="col-25">
        <label>Teléfono contacto:</label>
      </div>
      <div class="col-25">
        <input type="text" id="telContacto">
      </div>
    </div>
    <!--Fila-->
    <div class="row">
      <div class="col-25">
        <label>Teléfono contacto 2:</label>
      </div>
      <div class="col-25">
        <input type="text" id="telContacto2">
      </div>
    </div>
    <!--Fila-->
    <div class="row">
      <div class="col-25">
        <label>Email:</label>
      </div>
      <div class="col-25">
        <input type="text" id="mail">
      </div>
    </div>
    <!--Fila-->
    <div class="row">
      <div class="col-25">
        <label>Email 2:</label>
      </div>
      <div class="col-25">
        <input type="text" id="mail2">
      </div>
    </div>
    <!--Fila-->

    <h1>Lugar del evento</h1>
<!--Fila-->
      <div class="row">
        <div class="col-25">
          <label>Lugar</label>
        </div>
        <div class="col-25">
          <input type="text" id="lugarEvento">
        </div>
      </div>
<!--Fila-->
      <div class="row">
        <div class="col-25">
          <label>Calle y número:</label>
        </div>
        <div class="col-25">
          <input type="text" id="calleConNum">
        </div>
      </div>
<!--Fila-->
      <div class="row">
        <div class="col-25">
          <label>Colonia:</label>
        </div>
        <div class="col-25">
          <input type="text" id="colonia">
        </div>
      </div> 
<!--Fila-->
      <div class="row">
        <div class="col-25">
          <label>Municipio:</label>
        </div>
        <div class="col-25">
          <input type="text" id="municipio">
        </div>
      </div> 
<!--Fila-->
      <div class="row">
        <div class="col-25">
          <label>Estado:</label>
        </div>
        <div class="col-25">
          <input type="text" id="estado">
        </div>
      </div>
<!--Fila-->
      <div class="row">
        <div class="col-25">
          <label>Teléfono:</label>
        </div>
        <div class="col-25">
          <input type="text" id="telLugarEvento">
        </div>
      </div>
<!--Fila-->
      <div class="row">
        <div class="col-25">
          <label>Entre Calles:</label>
        </div>
        <div class="col-25">
          <input type="text" id="entreCalles">
        </div>
      </div>
<!--Fila-->

  <h1>Tipo de evento</h1>

    <div class="row">
        <div class="col-25">
          <label> Tipo de evento:</label>
        </div>
        <div class="col-25">
          <input type="text" id="tipoEvento">
        </div>
      </div>
<!--Fila-->
      <div class="row">
        <div class="col-25">
          <label># Tiempos:</label>
        </div>
        <div class="col-25">
          <input type="text" id="numTiempos">
        </div>
      </div>
<!--Fila-->
      <div class="row">
        <div class="col-25">
          <label>Torna fiesta:</label>
        </div>
        <div class="col-25">
          <input type="text" id="tornaFiesta" placeholder="Si o No">
        </div>
      </div> 
<!--Fila-->
      <div class="row">
        <div class="col-25">
          <label>Tipo de servicio: </label>
        </div>
        <div class="col-25">
          <input type="text" id="tipoServicio">
        </div>
      </div>
<!--Fila-->

    <h1>Total de personas</h1>

      <div class="row">
        <div class="col-25">
          <label>Total personas:</label>
        </div>
        <div class="col-25">
          <input type="text" id="totalPersonas">
        </div>
      </div>
<!--Fila-->
      <div class="row">
        <div class="col-25">
          <label>Comensales:</label>
        </div>
        <div class="col-25">
          <input type="text" id="totalAdultos">
        </div>
      </div> 
<!--Fila-->
      <div class="row">
        <div class="col-25">
          <label>Margen:</label>
        </div>
        <div class="col-25">
          <input type="text" id="margen">
        </div>
      </div>
<!--Fila-->
      <div class="row">
        <div class="col-25">
          <label>Niños:</label>
        </div>
        <div class="col-25">
          <input type="text" id="kids">
        </div>
      </div>
<!--Fila-->
    <h1>Horarios</h1>

    <div>
      <table>
        <tr>
          <th>Descripción</th>
          <th>Inicio</th>
          <th>Fin</th>
        </tr>
        <tr>
          <td>Horario del evento</td>
          <td><input type="time" id="horaInicioHorario"></td>
          <td><input type="time" id="horaFinHorario"></td>
        </tr>
        <tr>
          <td>Recepción</td>
          <td><input type="time" id="horaInicioRecepcion"></td>
          <td><input type="time" id="horaFinRecepcion"></td>
        </tr>
        <tr>
          <td>Coctel</td>
          <td><input type="time" id="horaInicioCoctel"></td>
          <td><input type="time" id="horaFinCoctel"></td>
        </tr>
        <tr>
          <td>Banquetes</td>
          <td><input type="time" id="horaInicioBanquetes"></td>
          <td><input type="time" id="horaFinBanquetes"></td>
        </tr>
        <tr>
          <td>Torna fiesta</td>
          <td><input type="time" id="horaInicioTF"></td>
          <td><input type="time" id="horaFinTF"></td>
        </tr>
        <tr>
          <td>Otros</td>
          <td><input type="time" id="horaInicioOtros"></td>
          <td><input type="time" id="horaFinOtros"></td>
        </tr>
      </table>
    </div><br>
<!--Fila--> 
      <div class="row">
        <div class="col-25">
          <label>Horas de servicio:</label>
        </div>
        <div class="col-25">
          <input type="text" id="HorasServicio">
        </div>
      </div> 
<!--Fila-->

    <h1>Operativos</h1>

    <div>
      <table>
        <tr>
          <th>Descripción</th>
          <th>Fecha</th>
          <th>Horario</th>
        </tr>
        <tr>
          <td>Entrega de equipo</td>
          <td><input type="date" id="fechaEntregaEquipo"></td>
          <td><input type="time" id="horarioEntregaEquipo"></td>
        </tr>
        <tr>
          <td>Pre montaje</td>
          <td><input type="date" id="fechaPreMontaje"></td>
          <td><input type="time" id="horarioPreMontaje"></td>
        </tr>
        <tr>
          <td>Número de personas pre montaje</td>
          <td><input type="text" id="numPer"></td>
        </tr>
        <tr>
          <td>Montaje</td>
          <td><input type="date" id="fechaMontaje"></td>
          <td><input type="time" id="horarioMontaje"></td>
        </tr>
      </table>
    </div><br>
<!--Fila-->
      <div class="row">
        <div class="col-25">
          <label>Supervisor</label>
        </div>
        <div class="col-25">
          <input type="text" id="supervisor">
        </div>
      </div>
<!--Fila-->
      <div class="row">
        <div class="col-25">
          <label>Capitan</label>
        </div>
        <div class="col-25">
          <input type="text" id="capitan">
        </div>
      </div> 
<!--Fila-->
      <div class="row">
        <div class="col-25">
          <label>No. de meseros y bar</label>
        </div>
        <div class="col-25">
          <input type="text" id="NumMeserosBar">
        </div>
      </div>
      <br><br>

    <div>
      <br>
 <!--  
     <div class="row">
        <div class="col-25">
          <label></label>
        </div>
        <div class="col-25">
          <input type="" name="">
        </div>
      </div> 
  -->


      <!-- <h3>Lugar del evento</h3>
      <label>
        Lugar <input type="text" id="lugarEvento">
      </label> -->
    <!--   <label>
        Calle y número: <input type="text" id="calleConNum">
      </label><br>
      <label> -->
        <!-- Colonia: <input type="text" id="colonia">
      </label><br> -->
     <!--  <label>
        Municipio: <input type="text" id="municipio">
      </label><br> -->
      <!-- <label>
        Estado: <input type="text" id="estado">
      </label><br> -->
      <!-- <label>
        Teléfono: <input type="text" id="telLugarEvento">
      </label><br> -->
      <!-- <label>
        Entre Calles: <input type="text" id="entreCalles">
      </label><br> -->
    <!-- </div><br>
    <div>
      <label>
        Tipo de evento: <input type="text" id="tipoEvento">
      </label><br>
      <label> -->
       <!--  # Tiempos: <input type="text" id="numTiempos">
      </label><br>
      <label> -->
      <!--   Torna fiesta: <input type="text" id="tornaFiesta">
      </label><br>
      <label> -->
       <!--  Tipo de servicio: <input type="text" id="tipoServicio">
      </label>
    </div><br>
    <div> -->
      <!-- <label>
        Total personas: <input type="text" id="totalPersonas">
      </label><br>
      <label> -->
       <!--  Comensales: <input type="text" id="totalAdultos">
      </label><br> -->
    <!--   <label>
        Margen: <input type="text" id="margen">
      </label><br> -->
     <!--  <label>
        Niños: <input type="text" id="kids">
      </label><br> -->
    <!-- </div><br>
    <div>
      <table>
        <tr>
          <th>Descripción</th>
          <th>Inicio</th>
          <th>Fin</th>
        </tr>
        <tr>
          <td>Horario del evento</td>
          <td><input type="time" id="horaInicioHorario"></td>
          <td><input type="time" id="horaFinHorario"></td>
        </tr>
        <tr>
          <td>Recepción</td>
          <td><input type="time" id="horaInicioRecepcion"></td>
          <td><input type="time" id="horaFinRecepcion"></td>
        </tr>
        <tr>
          <td>Coctel</td>
          <td><input type="time" id="horaInicioCoctel"></td>
          <td><input type="time" id="horaFinCoctel"></td>
        </tr>
        <tr>
          <td>Banquetes</td>
          <td><input type="time" id="horaInicioBanquetes"></td>
          <td><input type="time" id="horaFinBanquetes"></td>
        </tr>
        <tr>
          <td>Torna fiesta</td>
          <td><input type="time" id="horaInicioTF"></td>
          <td><input type="time" id="horaFinTF"></td>
        </tr>
        <tr>
          <td>Otros</td>
          <td><input type="time" id="horaInicioOtros"></td>
          <td><input type="time" id="horaFinOtros"></td>
        </tr>
      </table>
    </div><br> -->
    <!-- <div>
      <table>
        <tr>
          <caption>Operativo</caption>
          <th>Descripción</th>
          <th>Fecha</th>
          <th>Horario</th>
        </tr>
        <tr>
          <td>Entrega de equipo</td>
          <td><input type="date" id="fechaEntregaEquipo"></td>
          <td><input type="time" id="horarioEntregaEquipo"></td>
        </tr>
        <tr>
          <td>Pre montaje</td>
          <td><input type="date" id="fechaPreMontaje"></td>
          <td><input type="time" id="horarioPreMontaje"></td>
        </tr>
        <tr>
          <td>Número de personas pre montaje</td>
          <td><input type="text" id="numPer"></td>
        </tr>
        <tr>
          <td>Montaje</td>
          <td><input type="date" id="fechaMontaje"></td>
          <td><input type="time" id="horarioMontaje"></td>
        </tr>
      </table>
    </div><br>
    <div> -->
      <!-- <label>
        Horas de servicio: <input type="text" id="HorasServicio">
      </label>
    </div><br> -->
   <!--  <div>
      <label>
        Capitan <input type="text" id="capitan">
      </label><br>
      <label>
        Supervisor <input type="text" id="supervisor">
      </label><br>
      <label>
        No. de meseros y bar <input type="text" id="NumMeserosBar">
      </label>
    </div><br> -->
    <div>
      <table>
        <tr>
          <th></th>
          <th>Opción</th>
          <th>Cantidad</th>
        </tr>
        <tr>
          <th>Menús impresos</th>
          <th>
            <select id="menuImpreso">
              <option value="si">Sí</option>
              <option value="no">No</option>
            </select>
          </th>
          <th><input type="text" id="cantidadMenuImpreso"></th>
        </tr>
        <tr>
          <th>Numeros impresos</th>
          <th>
            <select id="numerosImpresos">
              <option value="si">Sí</option>
              <option value="no">No</option>
            </select>
          </th>
          <th><input type="text" id="cantidadNumerosImpreso"></th>
        </tr>
      </table>
    </div>
<!--Fila-->
    <h1></h1>
    <div>
      <table>
        <tr>
          <th></th>
          <th>Opción</th>
          <th>Cantidad</th>
        </tr>
        <tr>
          <th>Hostess</th>
          <th>
            <select id="hostess">
              <option value="si">Sí</option>
              <option value="no">No</option>
            </select>
          </th>
          <th><input type="text" id="cantidadHostess"></th>
        </tr>
        <tr>
          <th>Personal Seguridad</th>
          <th>
            <select id="perSeguridad">
              <option value="si">Sí</option>
              <option value="no">No</option>
            </select>
          </th>
          <th><input type="text" id="cantidadPerSeg"></th>
        </tr>
        <tr>
          <th>Personal baños</th>
          <th>
            <select id="perWC">
              <option value="si">Sí</option>
              <option value="no">No</option>
            </select>
          </th>
          <th><input type="text" id="cantidadPerWC"></th>
        </tr>
      </table>
    </div><br><br>
<!--Fila-->
    <div>
      <h3>Lista de proveedores externos</h3>
      <!-- <input type="text" name="infoProv" id="infoProv"> -->
      <textarea class="area" name="infoProv" id="infoProv"></textarea>
    </div>
    <input type="button" id="btnCrearEvento" value="Guardar información y crear menú" onclick="insertarEvento()">
  </form>