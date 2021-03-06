
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';




// una funcion que  obtiene una base de datos consultada  en una url en especifico
// consulta por un seguimiento en especifico
//devuelve el estado del pedido 
//



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

  //variable que pueden cambiar de estado en jsx
  const [Estado, setEstado] = useState([]);

  const [id, setID] = useState([]);
  const [founded, setFounded] = useState([]);
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);


  //evento que busca la palabra dentro del array
  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    result = allData.filter((data) => {
      return data.id.search(value) != -1;
    });
    setFilteredData(result);
    console.log(value)
    filteredData.find(function (array, index) {
      if (array.id == value) {
        setID(array.id);
        setEstado(array.Estado);
        setFounded("");
      }

      if (value == "") {
        setID("");
        setEstado("");
        setFounded("");
      }


    });
    
  }


  //consume el json de la base de datos
  useEffect(() => {
    axios('http://localhost/react/')
      .then(response => {
        setAllData(response.data);
        setFilteredData(response.data);
      })
      .catch(error => {
        console.log('No hay datos ' + error);
      })
  }, []);


  //pintado en pantalla de html y demas componentes
  return (

    <div className="App"  >
      <header className="App-header">
        <h1>Bienvenido</h1>


        <form className="form-register">

          <input type="text" placeholder='Digite su seguimiento' className='controls' onChange={(event) => handleSearch(event)} />

          <div>ID: {id} </div>
          <div>Estado: {Estado}</div>
          <div>{founded}</div>
        </form>

        <div className='cambiocr'>
          <div>
            <div>
              Tipo de cambio
            </div>
            {API()[2]}</div>
          <div className='compra'>Compra: {API()[0]}</div>
          <div className='venta'>Venta: {API()[1]}</div>
        </div>
        <div>
        </div>
      </header >
    </div>

  );
}

export default App;
