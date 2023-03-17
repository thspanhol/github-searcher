import { useState, KeyboardEvent } from "react";
import classes from "./Search.module.css";

type SearchProps = {
    loadUser: (userName: string) => Promise<void>
}

function Search({loadUser}: SearchProps) {

    const [userName, setUserName] = useState("");

    const handleKeyDown = (e: KeyboardEvent) => {
        if(e.key === "Enter" && userName !== "") {
            loadUser(userName);
            setUserName("");
        }
    }

    return (
      <div className={classes.search}>
        {/* <h1>Search for Users</h1> */}
        <input type="text" placeholder="Search for Username" onChange={(e) => setUserName(e.target.value)} value={userName} onKeyDown={handleKeyDown} />
        <button onClick={() => {
          if(userName !== "") {
            loadUser(userName);
            setUserName("");
          }
        }}>Search</button>
      </div>
    );
  }
  
  export default Search;