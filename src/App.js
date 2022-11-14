import React, { useState } from "react";
import Formulario from "./components/estadoscomponentes";
import Boton from "./components/boton";


function App() {
  const [user, setUser] = useState ('')
  const [password, setPassword] = useState('')
  return (
    <div className="App">
      <Formulario user={user} setUser={setUser} password={password} setPassword={setPassword}/>
     
      {password === "252525" ? <Boton /> : null}
    </div>
  );
}

export default App;
