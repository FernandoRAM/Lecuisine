<?php

class Controller {

    function __construct(){
        Session::init();
        $this->view = new View();
        $this->loadModel();
        $this->accesos = (Session::existVar('accesos') ) ? Session::getValue('accesos') : null ;
    }

    function loadModel() {
        $model = get_class($this) . '_model';
        $path = 'models/' . $model . '.php';

        if (file_exists($path)) {
            require_once($path);
            $this->model = new $model();
        }
    }

    function loadOtherModel($model) {
        $nameModel = $model;
        $model = $model. '_model';
        $path = 'models/' . $model . '.php';

        if (file_exists($path)) {
            require_once($path);
            $this->$nameModel = new $model;
        }
    }

    function pageNotFound(){
        $this->view->render('Default', 'errorSitio', true);
    }

    /**
    * function sessionExist($val = null)
    * Esta función verifica que haya una sesión iniciada; hace uso de
    * la clase Session con su función exist()
    * @author Enrique Aguilar Orozco
    * @version 1.1 por Jorge Luis Rojas Arcos
    * @since Noviembre 2018
    *         Se agrega parámetro de búsqueda por valor de sesión (null por defecto).
    * @example if(isset(sessionExist('Usuario'))){return true;}
    * @param $val
    *         Este parámetro permite realizar una búsqueda exacta de un valor de sesión
    *         Su valor por defecto es null;
    * @return boolean true | string $temp
    *         En caso de existir una sesión y no haya un valor de búsqueda retornará un "true"
    *         En caso de existir una sesión y  haya un valor de búsqueda retornará el valor
    *             de la sesión
    */

    static function sessionExist($val = null){
        if($val == null){
          if(Session::exist()){
            return true;
          }else{
            header('location:'.URL);
          }
        }else{
          $temp = Session::getValue($val);
          if($temp != null){
            return $temp;
          }else{
            return null;
          }
        }
    }
}

?>
