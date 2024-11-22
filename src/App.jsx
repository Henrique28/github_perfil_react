import { useState } from 'react'
import Perfil from './components/Perfil'
import Formulario from './components/Formulario'
import ReposList from './components/ReposList'

function App() {
  const [nomeUsuario, setUsuario] = useState('');

  return (
    <>

      {nomeUsuario.length > 4 ? (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      ) : (
        <input type="text" onBlur={(e) => setUsuario(e.target.value)} />
      )}
    </>
  )
}

export default App
