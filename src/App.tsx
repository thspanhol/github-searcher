import Search from "./components/Search";
import User from "./components/User";
import Error from "./components/Error";
import Loading from "./components/Loading";
import { useState } from "react";
import { UserProps } from "./types/user";
import classes from "./App.module.css"

function App() {

  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const loadUser = async (userName: string) => {
    setLoading(true)
    setError(false);
    setUser(null);

    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();

    if(res.status === 404) {
      setLoading(false)
      setError(true);
      return;
    }

    const {avatar_url, login, location, followers, following, bio, html_url, public_repos,} = data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
      bio,
      html_url,
      public_repos,
    };

    setLoading(false)
    setUser(userData);
  }

  return (
    <div className={classes.app}>
      <img src="/logo.png" alt="github-searcher-logo" className={classes.imgapp}/>
      <Search loadUser={loadUser} />
      {user && <User {...user} />}
      {error && <Error />}
      {loading && <Loading />}
    </div>
  );
}

export default App;
