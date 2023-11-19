import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import {v4 as uuidv4} from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29'
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      nome: 'WERMENSON VASCONCELOS',
      cargo: 'Líder Técnico',
      imagem: 'http://github.com/wermvasconcelos.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'MARCOS KAIO',
      cargo: 'Desenvolvedor',
      imagem: 'http://github.com/kaiomarcos056.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'OSMAR LIMA',
      cargo: 'Desenvolvedor',
      imagem: 'http://github.com/osmarlimaag.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'ISADORA ROCHA',
      cargo: 'Desenvolvedora',
      imagem: 'http://github.com/is-Isadora-Rocha.png',
      time: times[0].nome
    }
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador() {
    console.log('deletando colaborador')
  }

  function mudarCorDoTime(cor, nome) {
    setTimes(times.map(time => {
      if(time.nome === nome) {
        time.cor = cor;
      }
      return time;
    }));
  }

  return (
    <div>
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} />
      <section className="times"> 
        <h1>Minha organização</h1>
        {times.map((time, indice) => 
          <Time 
            mudarCor={mudarCorDoTime}
            key={indice} 
            time={time} 
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} 
            aoDeletar={deletarColaborador}
          />
        )}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
