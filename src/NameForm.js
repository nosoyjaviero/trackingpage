
import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios';





function Seguimiento() {

  const [Info,SetInfo] = useState([]);

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
    if (value.track_id == a) {
      trackState = value.Estado;
    } else {
    }
  });
  if (trackState == "") {
    trackState = "No existe seguimiento"
  }

}


var a ;

class NameForm extends React.Component {



  constructor(props){  
    super(props);

    this.state = {
      nombre: '',
     
    }
    this.onChange = this.onChange.bind(this);
    this.enviarAlaBD = this.enviarAlaBD.bind(this);
  }

  onChange = e =>{
   
    const {name, value} = e.target;
    this.setState({
      [name]: value,
    });
  }
  enviarAlaBD = e  => {    
    e.preventDefault();
    let valido = true;
    if(this.state.nombre === ''){
      this.setState({
        invalidNombre: true,
        mensajeNombre: 'El campo nombre es obligatorio, indica un seguimiento',
      });
      valido = false;
    }
   
    if(valido){
      a=parseInt(this.state.nombre);
     
      console.log(a);
      
    }
  }
  

  render(){
    return (
      <div>
        
            
            <form className='form-register' onSubmit={this.enviarAlaBD}>
             
                <input type="text" name="nombre" className='controls' placeholder='Digite su seguimiento' 
                value={this.state.nombre} 
                onChange={this.onChange}
                 invalid={this.state.invalidNombre} />
             
              
                <button className="botons" color="success">Buscar </button>
              
            </form>
            {Seguimiento}
      </div>

    );
    
  }
}

export default NameForm;