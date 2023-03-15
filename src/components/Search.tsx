import { useState, KeyboardEvent } from "react";
import classes from "./Search.module.css";

type SearchProps = {
    loadUser: (userName: string) => Promise<void>
}

function Search({loadUser}: SearchProps) {

    const [userName, setUserName] = useState("");

    const handleKeyDown = (e: KeyboardEvent) => {
        if(e.key === "Enter") {
            loadUser(userName);
            setUserName("");
        }
    }

    return (
      <div className={classes.search}>
        <h2>Busque por usuário:</h2>
        <p>Principais informações</p>
        <input type="text" placeholder="Digite o nome do usuário" onChange={(e) => setUserName(e.target.value)} value={userName} onKeyDown={handleKeyDown} />
        <button onClick={() => {
            loadUser(userName);
            setUserName("");
        }}>Pesquisar</button>
      </div>
    );
  }
  
  export default Search;