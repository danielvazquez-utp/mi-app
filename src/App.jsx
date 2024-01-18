import { useState } from 'react';
import './Miapp.css';

const App = () => {

  const [contador, setContador] = useState(0);

  return (
    <>
      <h1>Hola mundo</h1>
      <p>Daniel Vázquez</p>
      <h2>Contador: { contador }</h2>
      <button id="btn-incrementa" className="btns" onClick={() =>  setContador(contador+1) } >Incrementa</button>
      <button id="btn-decrementa" className="btns">Decrementa</button>
      <button id="btn-reinicia" className="btns">Reinicia</button>
    </>
  )
}

export default App;