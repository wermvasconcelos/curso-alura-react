import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Fomulario';

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
    </div>
  );
}

export default App;
 