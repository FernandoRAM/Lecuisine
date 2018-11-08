<!DOCTYPE html>
<html>
    <head>
        <title>Le Cuisine - Bienvenido</title>
        <script type="text/javascript" src="<?=JS?>/funciones.js"></script>
        <meta charset="utf-8">
        <link rel="stylesheet" type="text/css" href="<?=CSS?>estiloLogin.css">
        <link rel="stylesheet" type="text/css" href="<?=CSS?>FontAwesome/fontawesome-all.css">
        <link rel="stylesheet" href="CSS/Fonts/stylesheet.css">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src *; font-src *; connect-src *">
    </head>
    <body>
        <img src="logo.png">
        <h1>Le Cuisine - Inicia Sesión</h1>
        <div class="form">
            <form method="POST" action="<?=URL?>Index/ingresar">
                <input class="dato" name="usuario" type="text" class="ficha" placeholder="Ingresa tu usuario" required />
                <input class="dato" name="pass" type="password" placeholder="contraseña" required />
                <input type="submit" name = "iniciar" value="Login" onclick="inicioSesion()" />
            </form>
        </div>
    </body>
</html>