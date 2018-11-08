<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <script type="text/javascript" src="<?=JS?>funciones.js"></script>
  <script type="text/javascript" src="<?=JS?>config.js"></script> 
  <script type="text/javascript" src="<?=JS?>insertarEvento.js"></script> 
  <script type="text/javascript" src="<?=JS?>crearMenu.js"></script> 
  <script type="text/javascript" src="<?=JS?>scouting.js"></script> 
  <link rel="stylesheet" type="text/css" href="<?=CSS?>index.css">
  <link rel="stylesheet" type="text/css" href="<?=CSS?>eventos.css">
  <link rel="stylesheet" type="text/css" href="<?=CSS?>crearEventos.css">
  <title></title>
</head>
<body>

  <div id="main-container">
  <!-- Left Menu -->  
  <!-- END Left Menu -->

  <!-- Left Menu -->
  <div class="light-menu">
    <h1 id="page_title">LeCuisine</h1>
    <a href="#" onclick="crearEvento(), showNav();" style="margin-top: 50%;">Crear evento</a>
    <a href="#" onclick="calendario()">Calendario </a>
    <a href="#" onclick="eventos()">Eventos</a>
    
    <a href="<?=URL?>Index/logOut">Cerrar Sesión</a>
  </div>  
  <!-- END Left Menu -->
  
  <!-- Top Menu -->
  <section class="top-menu">
  </section>
  
  <div id="content">
    <article id="table-content">
      <center>ADMINISTRADOR</center>
      <center>ALGUN TIPO DE CONTENIDO</center>
    </article>
  </div>
</div>
<!-- Deshabilitar el click derecho -->
<!-- <script type="text/javascript"> document.addEventListener('contextmenu', event => event.preventDefault());</script> -->
</body>
</html>