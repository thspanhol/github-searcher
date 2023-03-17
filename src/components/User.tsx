import { UserProps } from "../types/user";
import classes from "./User.module.css"

function User({login, avatar_url, followers, following, location, bio, html_url, public_repos,}: UserProps) {
    return (
      <div className={classes.user}>
        <img src={avatar_url}  alt={login}/>
        <h2>{login}</h2>
        <span><img src="https://raw.githubusercontent.com/thspanhol/github-searcher/main/public/pointer.ico" alt="pointer"/>{location}</span>
        <p>{bio}</p>
        <div>
          <h4>Followers:</h4>
          <h4>{followers}</h4>
          <h4>Following:</h4>
          <h4>{following}</h4>
          <h4>Public Repositories:</h4>
          <h4>{public_repos}</h4>
        </div>
        <button><a href={html_url} target="blank">Acessar Perfil GitHub</a></button>
      </div>
    );
  }
  
  export default User;