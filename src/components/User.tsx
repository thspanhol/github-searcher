import { UserProps } from "../types/user";
import classes from "./User.module.css"

function User({login, avatar_url, followers, following, location, bio, html_url, public_repos,}: UserProps) {
    return (
      <div className={classes.user}>
        <img src={avatar_url}  alt={login}/>
        <h2>{login}</h2>
        <span>{location}</span>
        <h4>{bio}</h4>
        <div>
          <p>Seguidores:</p>
          <p>{followers}</p>
          <p>Seguindo:</p>
          <p>{following}</p>
          <p>Repositórios públicos:</p>
          <p>{public_repos}</p>
        </div>
        <a href={html_url} target="blank">Acessar Perfil GitHub</a>
      </div>
    );
  }
  
  export default User;