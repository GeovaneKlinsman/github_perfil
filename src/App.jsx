import { useState } from "react";
import Perfil from "./components/Perfil";
import style from './App.module.css'
import ReposList from "./components/ReposList";

function App() {
const [nomeUsuario, setNomeUsuario] = useState('');
const [inputValue, setInputValue] = useState('')
const handleSearch = () => {setNomeUsuario(inputValue)}

  return(
    // uma função commais de um elemento deve ter seu conteúdo dentro de uma tag de encapsulamento ou fragmento
    // Uma tag de encapsulamento pode ser uma DIV por exemplo, qualquer taga que tnha a função de criar grupos serve.
    // Já os fragmentos são chaves de Tag vazias "<>", elas podem ser utilizadas assim neste contexto. Apenas para agrupar mas sem agregar nenhum recurso de tag.
    <div>
      <div className={style.barraBusca}>
        <input className={style.input}  value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Nome usuario GitHub' />
        <button className={style.button} onClick={handleSearch}>Buscar</button>
      </div>
      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
    </div>
  )
}

export default App
