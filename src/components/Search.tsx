import { useState } from "react";

type SearchProps = {
    loadUser: (userName: string) => Promise<void>
}

function Search({loadUser}: SearchProps) {

    const [userName, setUserName] = useState("");

    return (
      <div>
        <h2>Busque por usuário:</h2>
        <p>Principais informações</p>
        <input type="text" placeholder="Digite o nome do usuário" onChange={(e) => setUserName(e.target.value)} value={userName} />
        <button onClick={() => loadUser(userName)}>Pesquisar</button>
      </div>
    );
  }
  
  export default Search;