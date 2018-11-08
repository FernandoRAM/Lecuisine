<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" lang="es">
  <script type="text/javascript" src="<?=JS?>funciones.js"></script>
  <script type="text/javascript" src="<?=JS?>config.js"></script>  
  <script type="text/javascript" src="<?=JS?>insertarEvento.js"></script>  
  <script type="text/javascript" src="<?=JS?>operativoServicio.js"></script>  
  <script type="text/javascript" src="<?=JS?>crearMenu.js"></script>  
  <script type="text/javascript" src="<?=JS?>servicio.js"></script>  
  <script type="text/javascript" src="<?=JS?>scouting.js"></script>  
  <script type="text/javascript" src="<?=JS?>preevento.js"></script>  
  <script type="text/javascript" src="<?=JS?>bitacora.js"></script>  
  <script type="text/javascript" src="<?=JS?>pruebaMenu.js"></script>  
  <link rel="stylesheet" type="text/css" href="<?=CSS?>index.css">
  <link rel="stylesheet" type="text/css" href="<?=CSS?>eventos.css">
  <link rel="stylesheet" type="text/css" href="<?=CSS?>crearEventos.css">
  <link rel="stylesheet" type="text/css" href="<?=CSS?>estiloBitacora.css">
  <link rel="stylesheet" type="text/css" href="<?=CSS?>calendario.css">
  <script src="http://code.jquery.com/jquery-latest.js"></script>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
    <a href="#" onclick="tabsCalendario(), calendario()">Calendario</a>
    <a href="#" onclick="tabsEventos(),eventos()">Eventos</a>
    <a href="<?=URL?>Index/logOut">Cerrar Sesión</a>
  </div>  
  <!-- END Left Menu -->
  
  <!-- Top Menu -->
  <section class="top-menu">
  </section>
  
  <div id="content">
    <article id="table-content">
      <center>VENTAS</center>
      <center>ALGUN TIPO DE CONTENIDO</center>
    </article>
  </div>
</div>
</body>
</html>