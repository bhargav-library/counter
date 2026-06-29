import App from "./counter";
const AppLayout = ()=>{
    return(
        <div className ="app">
         <App/>    
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);