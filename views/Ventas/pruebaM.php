<div id="contentCocina">  
<h1>Datos Prueba de Menú</h1>
  <!--Fila-->
    <div class="row">
      <div class="col-25">
        <label>Cliente:</label>
      </div>
      <div class="col-25">
        <input type="text" id="cliente" >
      </div>
    </div>
     <!--Fila-->
    <div class="row">
      <div class="col-25">
        <label>Fecha Degustacion:</label>
      </div>
      <div class="col-25">
        <input type="date" id="fechaDeg" >
      </div>
    </div>
    <!--Fila-->
    <div class="row">
      <div class="col-25">
        <label>Hora:</label>
      </div>
      <div class="col-25">
        <input type="time" id="horaDeg" >
      </div>
    </div>
    <!--Fila-->
    <div class="row">
      <div class="col-25">
        <label>Lugar:</label>
      </div>
      <div class="col-25">
        <input type="text" id="lugarDeg" >
      </div>
    </div>
    <!--Fila-->
    <div class="row">
      <div class="col-25">
        <label>No. PAX:</label>
      </div>
      <div class="col-25">
        <input type="number" id="pax" >
      </div>
    </div>
    <!--Fila-->
    <div class="row">
      <div class="col-25">
        <label>Servicio:</label>
      </div>
      <div class="col-25">
        <input type="text" id="servicio" >
      </div>
    </div>
    <!--Fila-->
    <div class="row">
      <div class="col-25">
        <label>No. Meseros:</label>
      </div>
      <div class="col-25">
        <input type="number" id="noMeseros" >
      </div>
    </div>
    <!--Fila-->
    <div class="row">
      <div class="col-25">
        <label>Tipo de Vajila:</label>
      </div>
      <div class="col-25">
        <input type="text" id="vajilla" >
      </div>
    </div><br><br><br>

 
<!-- Fila -->
      <h1>Datos para evento</h1>
<!--Fila-->      
      <div class="row">
        <div class="col-25">
          <label>Tipo de Evento</label>
        </div>
        <div class="col-25">
          <input type="text" id="tipoEvento" >
        </div>
      </div>
<!--Fila-->
      <div class="row">
        <div class="col-25">
          <label>No. PAX Evento</label>
        </div>
        <div class="col-25">
          <input type="number" id="paxEvento" >
        </div>
      </div> 
<!--Fila-->
      <div class="row">
        <div class="col-25">
          <label>Tipo de Servicio:</label>
        </div>
        <div class="col-25">
          <input type="text" id="tipoServicioEv" >
        </div>
      </div>
<!--Fila-->
      <div class="row">
        <div class="col-25">
          <label>Fecha Evento:</label>
        </div>
        <div class="col-25">
          <input type="date" id="fechaEvento" >
        </div>
      </div>
<!--Fila-->
      <div class="row">
        <div class="col-25">
          <label>Lugar Evento:</label>
        </div>
        <div class="col-25">
          <input type="text" id="lugarEvento" >
        </div>
      </div>
<!--Fila-->
     <div class="row">
      <div class="col-25">
        <label>Tipo servicio:</label>
      </div>
      <div class="col-25">
        <input type="text" id="tipoServicio" >
      </div>
    </div><br><br>

  <h1>Menú</h1><br>

  <h3>Entremes</h3><br>
  	<div id="entremeses">

	</div>
  <input type="button" value="Agregar entremes" id="btnEntremes" onclick="entremes();" style="align-self: center;"><br><br>

   <h3>Cremas o sopas</h3><br>
  	<div id="cremaSopa">
	  	
	</div>
  <input type="button" value="Agregar crema o sopa" id="btnSopaCrema" onclick="cremaSopa();" style="align-self: center;"><br><br>

   <h3>Platos Fuertes</h3><br>
  	<div id="platosFuertes">
	  	
	</div>
  <input type="button" value="Agregar plato fuerte" id="btnPlato" onclick="platoFuerte();" style="align-self: center;"><br><br>

   <h3>Postres</h3><br>
  	<div id="postres">
	  	
	</div>
  <input type="button" value="Agregar postre" id="btnPostre" onclick="postre();" style="align-self: center;"><br><br>

    <h3>Pan</h3><br>
  	<div id="panes">
	  	
	</div>
  <input type="button" value="Agregar pan" id="btnPan" onclick="pan();" style="align-self: center;"><br><br>

 <h1>Mobiliario</h1><br>

  <div class="row">
        <div class="col-25">
          <label>Mesa:</label>
        </div>
        <div class="col-25">
          <input type="text" id="mesa" >
        </div>
      </div>
      <!--  -->
    <div class="row">
        <div class="col-25">
          <label>Silla:</label>
        </div>
        <div class="col-25">
          <input type="text" id="silla" >
        </div>
      </div>
     <!--  -->
      <div class="row">
        <div class="col-25">
          <label>Cubierto:</label>
        </div>
        <div class="col-25">
          <input type="text" id="cubierto" >
        </div>
      </div>
      <!--  -->
 	 <div class="row">
        <div class="col-25">
          <label>Cristalería:</label>
        </div>
        <div class="col-25">
          <input type="text" id="lugarEvento" >
        </div>
      </div><br><br>
      <!--  -->
      <h3>Mantelería</h3><br>
  	<div id="manteleria">
  		
	</div>
  <input type="button" value="Agregar mantelería" id="btnMant" onclick="manteleria2();" style="align-self: center;"><br><br>

  <h3>Vajilla</h3><br>
  	<div id="vajillas">
  		
	</div>
  <input type="button" value="Agregar vajilla" id="btnVaj" onclick="vajilla2();" style="align-self: center;"><br><br>
	
 
 <button >Guardar Prueba de Menú</button>
  
  
</div>

