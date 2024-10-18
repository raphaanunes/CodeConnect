import { useEffect, useState } from 'react'
import './App.css'
import BarraDePesquisa from './componentes/BarraDePesquisa'
import Card from './componentes/Card'
import Filtro from './componentes/Filtro'
import Sidebar from './componentes/Sidebar'
import Ordenacao from './componentes/Ordenacao'

function App() {

  const [dados,setDados] = useState([]);
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes')
    .then(resposta => resposta.json())
    .then(dados => setDados(dados))
  }, [])

  const Erro = 'Não foi possível carregar'
  
  return (
    <div className='container'>
      <Sidebar />
      <div>
        <BarraDePesquisa />
        <Filtro />
        <Ordenacao />

        <ul className='cards'>
          {dados ? dados.map((item, index) => (
            <li key={index}>
              <Card 
              id={item.id}
              imagemUrl={item.imagem_capa}
              titulo={item.titulo}
              resumo={item.resumo}
              linhasDeCodigo={item.linhas_de_codigo}
              compartilhamentos={item.compartilhamentos}
              comentarios={item.comentarios}
              usuario={item.usuario}
              />
            </li>
          )) : Erro}
        </ul>
      </div>
    </div>
  )
}

export default App
