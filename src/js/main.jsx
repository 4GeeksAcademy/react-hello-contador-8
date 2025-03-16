import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
// import "./components/icons.js"

// index.css'
import '../styles/index.css'

// components
import Contador from './components/Contador';


const rootElement = document.getElementById("root")
const numbers = [1 ,2 ,3 ,4, 5, 6]

setInterval(() =>{
    const number = numbers[Math.floor(Math.random() * numbers.length)]
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode><Contador number={number} /></React.StrictMode>,

    )
    
}, 1000)


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Home/>
//   </React.StrictMode>,
// )

// const root = ReactDOM.createRoot(document.querySelector('#root'));
// root.render(<Home />);