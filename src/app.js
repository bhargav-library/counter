import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./counter";
const AppLayout = ()=>{
    return(
        <div className ="app">
         <Counter/>    
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);