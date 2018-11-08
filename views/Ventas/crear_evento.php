<form method="POST" action="#">
  <div class="contenedor">
    <h1>Información general del cliente</h1>
    <!--Fila-->
    <div class="row">
      <div class="col-25">
        <label>Fecha del evento:</label>
      </div>
      <div class="col-25">
        <input type="date" id="fechaEvento">
      </div>
    </div>
    <!--Fila-->
    <div class="row">
      <div class="col-25">
        <label>Vendedor:</label>
      </div>
      <div class="col-25">
        <input type="text" id="vendedor" value="<?=Session::getValue('Usuario')?>" disabled>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label>Tipo de Cliente:</label>
      </div>
      <div class="col-25">
        <select id="tipoCliente">
          <option hidden disabled selected value="0">Selecciona</option>
          <option value="social">Social</option>
          <option value="empresarial">Empresarial</option>
        </select>
      </div>
    </div>
    <!--Fila-->
    <div class="row">
      <div class="col-25">
        <label>Contacto involucrado:</label>
      </div>
      <div class="col-25">
        <input type="text" id="contacto">
      </div>
    </div>
    <!--Fila-->

    <div class="row">
      <div class="col-25">
        <label>Estado/Ciudad:</label>
      </div>
      <div class="col-25">
        <select name="estados" id="estadoCiudad">

          <option value="0" hidden disabled selected>Selecciona</option>

          <option value="1">Aguascalientes</option>

          <option value="2">Baja California</option>

          <option value="3">Baja California Sur</option>

          <option value="4">Campeche</option>

          <option value="5">Coahuila de Zaragoza</option>

          <option value="6">Colima</option>

          <option value="7">Chiapas</option>

          <option value="8">Chihuahua</option>

          <option value="9">Distrito Federal</option>

          <option value="10">Durango</option>

          <option value="11">Guanajuato</option>

          <option value="12">Guerrero</option>

          <option value="13">Hidalgo</option>

          <option value="14">Jalisco</option>

          <option value="15">México</option>

          <option value="16">Michoacán de Ocampo</option>

          <option value="17">Morelos</option>

          <option value="18">Nayarit</option>

          <option value="19">Nuevo León</option>

          <option value="20">Oaxaca</option>

          <option value="21">Puebla</option>

          <option value="22">Querétaro</option>

          <option value="23">Quintana Roo</option>

          <option value="24">San Luis Potosí</option>

          <option value="25">Sinaloa</option>

          <option value="26">Sonora</option>

          <option value="27">Tabasco</option>

          <option value="28">Tamaulipas</option>

          <option value="29">Tlaxcala</option>

          <option value="30">Veracruz de Ignacio de la Llave</option>

          <option value="31">Yucatán</option>

          <option value="32">Zacatecas</option>

        </select>
      </div>
    </div>
<!--Fila-->
    <div class="row">
      <div class="col-25">
        <label>Empresa/Cliente:</label>
      </div>
      <div class="col-25">
        <input type="text" id="empresa">
      </div>
    </div>
    <!--Fila-->
    <!--Fila-->
    <div class="row">
      <div class="col-25">
        <label>Tipo de Empresa:</label>
      </div>
      <div class="col-25">
        <select id="tipoEmpresa">
          <option value="0" hidden disabled selected>Selecciona</option>
          <option value="Wedding Planner">Wedding Planner</option>
          <option value="Planner">Planner</option>
          <option value="Intermediario">Intermediario</option>
          <option value="Directo">Directo</option>
        </select>
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
        <input type="text" id="email">
      </div>
    </div>
    <!--Fila-->
    <div class="row">
      <div class="col-25">
        <label>Email 2:</label>
      </div>
      <div class="col-25">
        <input type="text" id="email2">
      </div>
    </div>
    <!--Fila-->
     <!--Fila-->
    <div class="row">
      <div class="col-25">
        <label>Tipo de Evento:</label>
      </div>
      <div class="col-25">
       <select id="tipoEvento">
        <option hidden disabled selected value="0">Selecciona</option>
         <option value="Boda">Boda</option>
         <option value="Comida">Comida</option>
         <option value="Cena">Cena</option>
         <option value="Coffee break">Coffee break</option>
         <option value="Aniversario">Aniversario</option>
         <option value="Desayuno">Desayuno</option>
         <option value="Box Lunch">Box Lunch</option>
         <option value="Bocadillos">Bocadillos</option>
       </select>
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
          <input type="text" id="lugar">
        </div>
      </div>
<!--Fila-->
      <div class="row">
        <div class="col-25">
          <label>Calle y número:</label>
        </div>
        <div class="col-25">
          <input type="text" id="calleNumero">
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
          <input type="text" id="tel">
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
      <div class="row">
        <div class="col-25">
          <label>Código Postal:</label>
        </div>
        <div class="col-25">
          <input type="number" id="codigoPostal">
        </div>
      </div>
<!--Fila-->



    <h1>Número de personas</h1>

      <div class="row">
        <div class="col-25">
          <label>Total personas:</label>
        </div>
        <div class="col-25">
          <input type="number" id="totalPersonas">
        </div>
      </div>
<!--Fila-->
      <div class="row">
        <div class="col-25">
          <label>Adultos:</label>
        </div>
        <div class="col-25">
          <input type="number" id="adultos">
        </div>
      </div> 
<!--Fila-->
      <div class="row">
        <div class="col-25">
          <label>Niños:</label>
        </div>
        <div class="col-25">
          <input type="number" id="ninos">
        </div>
      </div>
<!--Fila-->
    <h1>Horario</h1>

     <div class="row">
        <div class="col-25">
          <label>Horario del evento:</label>
        </div>
        <div class="col-25">
         <select id="horario">
          <option value="0" hidden disabled selected>Selecciona</option>
           <option value="Día">Día</option>
           <option value="Tarde">Tarde</option>
           <option value="Noche">Noche</option>
         </select>
        </div>
      </div>
<!--Fila--> 
      <div class="row">
        <div class="col-25">
          <label>Horas de servicio:</label>
        </div>
        <div class="col-25">
          <input type="text" id="hrServicio" value="8" disabled>
        </div>
      </div> <br>

<!--Fila-->
    <h1>Cita</h1>

    <!--Fila--> 
      <div class="row">
        <div class="col-25">
          <label>Fecha de Cita:</label>
        </div>
        <div class="col-25">
          <input type="date" id="fechaCita">
        </div>
      </div>
    <!--Fila--> 
      <div class="row">
        <div class="col-25">
          <label>Hora de Cita:</label>
        </div>
        <div class="col-25">
          <input type="time" id="hrCita">
        </div>
      </div>
    <!--Fila-->
     <!--Fila--> 
      <div class="row">
        <div class="col-25">
          <label>Método de Cita:</label>
        </div>
        <div class="col-25">
          <input type="text" id="metodoCita">
        </div>
      </div><br><br>

      <h1>Horas extra</h1>
      <br>
       <div>
      <table>
        <tr>
          
          <th>Horas extra</th>
          <th>Costo horas extra</th>
        </tr>
        <tr>
          <td><input type="text" id="hrExtra"></td>
          <td><input type="text" id="costoHr"></td>
        </tr>
       
      </table>
    </div><br><br><br><br>

    <div>
      <table>
        <tr>
          <th><h2 colspan="4" style="text-align: center;">Resumen cotizado</h2></th>
        </tr>
      </table>
      <div id="coti"></div><br><br>
      <input type="button" value="Agregar nuevo concepto" id="btnConcepto" onclick="concepto();" style="align-self: center;">
      <div id="btnCalcular" style="height: 20px; align-self: center;"></div>
    </div><br><br><br><br>
    
    </div>
    <div style=" align-self: center; text-align: center;" id="sub"></div>
    <div style=" align-self: center; text-align: center;" id="iva"></div>
    <div style=" align-self: center; text-align: center;" id="total"></div>
    <input type="button" id="btnCrearEvento" value="Guardar información" onclick="insertarPreEvento()">
  </form>