import classes from "./Loading.module.css";

function Loading() {
    return (
      /* <div><p>Loading...</p></div> */
      <div><img src="https://raw.githubusercontent.com/thspanhol/github-searcher/main/public/loading.gif" alt="Loading..." className={classes.loading}/></div>
    );
  }
  
  export default Loading;