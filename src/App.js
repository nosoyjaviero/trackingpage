
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

  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = allData.filter((data) => {
if (1==1){  
  
}

      return data.id.search(value) != -1;
    });
    setFilteredData(result);
  }



  useEffect(() => {
    axios('http://localhost/react/')
      .then(response => {
        setAllData(response.data);
        setFilteredData(response.data);
      })
      .catch(error => {
        console.log('Error getting fake data: ' + error);
      })
  }, []);









  return (

    <div className="App">
      <header className="header">
        <h1>Bienvenido</h1>

      </header >

      <body>




     


        {Seguimiento(a)}



        <div style={{ margin: '0 auto', marginTop: '10%' }}>
          <label>Search:</label>
          <input type="text" onChange={(event) => handleSearch(event)} />
        </div>
        <div style={{ padding: 10 }}>
          {
            filteredData.map(function (value, index) {
              if(1==1){
                return ( 
               
                <div key={value.id}>
                  {filteredData.id}
                 ID: {value.id}  Estado:{value.Estado}
                </div>
              )
            
              }
              
            }
            )
          }
        </div>




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
