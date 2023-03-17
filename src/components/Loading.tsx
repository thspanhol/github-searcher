import classes from "./Loading.module.css";

function Loading() {
    return (
      /* <div><p>Loading...</p></div> */
      <div><img src="/loading.gif" alt="Loading..." className={classes.loading}/></div>
    );
  }
  
  export default Loading;