import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"


// index.css'
import '../styles/index.css'

// components
import Contador from './components/Contador';


const rootElement = document.getElementById("root")
let counter = 0;

setInterval(() =>{
    // const number = numbers[Math.floor(Math.random() * numbers.length)]
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode><Contador number={counter} /></React.StrictMode>,

    )
    counter ++;
}, 1000)


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Home/>
//   </React.StrictMode>,
// )

// const root = ReactDOM.createRoot(document.querySelector('#root'));
// root.render(<Home />);