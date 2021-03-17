<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> SimiTumblr</title>
    <?php
echo'<link href="vistas/CSS/estilos.css" type="text/css" rel="stylesheet">';

?>

</head>
    
<body>
<?php
#include() se utiliza para invocar el archivo que contiene código html
include "modulos/encabezado.php";
include "modulos/menu.php";

if(isset($_GET["ruta"])){
    if($_GET["ruta"]=="productosAgregar"
    || $_GET["ruta"]=="productosConsulta"
    ||$_GET["ruta"]=="categoriasNuevo"
    ||$_GET["ruta"]=="categoriasConsulta"
    || $_GET["ruta"]=="marcasNuevo"
    || $_GET["ruta"]=="consultaMarca"
    || $_GET["ruta"]=="nuevoLaboratorio"
    || $_GET["ruta"]=="consultaLaboratorio"
    || $_GET["ruta"]=="nuevoClientes"
    || $_GET["ruta"]=="consultaCliente"
    || $_GET["ruta"]=="nuevoUsuario"
    || $_GET["ruta"]=="consultaUsuario"
    || $_GET["ruta"]=="nuevoEmpleado"
    || $_GET["ruta"]=="consultaEmpleado"
    || $_GET["ruta"]=="nuevoDepartamento"
    || $_GET["ruta"]=="consultaDepartamento")
    include "modulos/".$_GET["ruta"].".php";
}

?>
</body>
</html>