import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Fomulario';
import Time from './componentes/Time';

function App() {
  
  const [colaboradores, setColaboradores] = useState([]) 
  const aoNovoColaboradorAdicionar = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionar(colaborador)}/>
      <Time nome="Programação"/>
      <Time nome="Front-End"/>
      <Time nome="Data Science"/>
    </div>
  );
}

export default App;
 