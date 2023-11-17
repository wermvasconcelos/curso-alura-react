import './Formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')



    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto value={nome} aoAlterado={valor => setNome(valor)} label="Nome" obrigatorio={true} placeholder="Digite seu nome" />
                <CampoTexto value={cargo} aoAlterado={valor => setCargo(valor)}label="Cargo" obrigatorio={true} placeholder="Digite seu cargo" />
                <CampoTexto value={imagem} aoAlterado={valor => setImagem(valor)} label="Imagem" placeholder="Informe o endereço da imagem" />
                <ListaSuspensa value={time} aoAlterado={valor => setTime(valor)} label="Time" obrigatorio={true} itens={times} />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario