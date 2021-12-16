
import './App.css';
import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import NameForm from './NameForm'



// una funcion que  obtiene una base de datos consultada  en una url en especifico
// consulta por un seguimiento en especifico
//devuelve el estado del pedido 
//
function Seguimiento(TRACKID) {

  var baseUrl = "http://localhost/react/";

  const [data, setData] = useState([]);
  const peticionGet = async () => {
    await axios.get(baseUrl)
      .then(response => {
        setData(response.data);

      })
  }

  useEffect(() => {
    peticionGet();
  }, [])

  var trackState = "";

  data.find(function (value, index) {
    if (value.track_id == TRACKID) {
      trackState = value.Estado;
    } else {
    }
  });
  if (trackState == "") {
    trackState = "No existe seguimiento"
  }
  

  return trackState;
}


//una funcion que consumi el api de compra y venta del banco de costarica
//cesta funcion obtiene el dato diario
//devuelve el precio y fecha en array
let date;
function API() {
  date = new Date();
  var compra = "";
  var venta = "";
  var fecha = "";
  var baseUrl = `https://tipodecambio.paginasweb.cr/api//${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

  const [data, setData] = useState([]);
  const peticionGet = async () => {
    await axios.get(baseUrl)
      .then(response => {
        setData(response.data);
      })
  }
  useEffect(() => {
    peticionGet();
  }, [])

  compra = data.compra;
  venta = data.venta;
  fecha = data.fecha;

  return [compra, venta, fecha]
}


//esqueleto de la pagina. Aqui se une los componentes y apis y funciones
function App() {


  return (

    <div className="App">
      <header className="header">
        <h1>Bienvenido</h1>

      </header >

      <body>

        <NameForm />


        {Seguimiento(a)}
        <div>
          aqui si busca no importa lo que sea que le envia por parametro
          no mas de pasarle el parametro
          Por alguna razon, en formtracking no sirven las funciones
          entonces no se le pueden pasar ningun tipo  parametro
          menos uno de formulario
        </div>

      </body>

      <footer>
        <div className='cambiocr'>
          <div>
            <div>
              API de tipo de cambio
            </div>
            {API()[2]}</div>
          <div className='compra'>Compra: {API()[0]}</div>
          <div className='venta'>Venta: {API()[1]}</div>
        </div>
      </footer>

    </div>

  );
}
var a = parseInt("4");
export default App;
