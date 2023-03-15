import Search from "./components/Search";
import { useState } from "react";
import { UserProps } from "./types/user";

function App() {

  const [user, setUser] = useState<UserProps | null>(null);

  const loadUser = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    console.log(data);
    
  }

  return (
    <div className="App">
      <h1>GitHub Searcher</h1>
      <Search loadUser={loadUser} />
    </div>
  );
}

export default App;
