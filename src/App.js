import React, {Component} from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';
class App extends Component {
  state = {
    citas: []
  }

  // cuando el componente carga
  componentDidMount() {
    console.log(this.state.citas)
    localStorage.setItem('citas', JSON.stringify(this.state.citas));
  }
  
  crearNuevaCita = datos => {
    console.log(datos);
    // copiar el state actual
    let citas = [...this.state.citas, datos];
    
    // agregar el nuevo state
    this.setState({
      citas: citas
    })
    console.log(citas);
    console.log(this.state.citas);
    localStorage.setItem('citas', (this.state.citas));
  }

  eliminarCita = id => {
    const citasActuales = [...this.state.citas];

    const citas = citasActuales.filter(cita => cita.id !== id);

    this.setState({
      citas: citas
    })
  }

  render() {
    return (
      <div className="container">
        <Header titulo="Administrador Veterinaria" />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita crearNuevaCita={this.crearNuevaCita} />
          </div>

          <div className="mt-5 col-md-10 mx-auto">
            <ListaCitas 
              citas={this.state.citas}
              eliminarCita={this.eliminarCita}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
