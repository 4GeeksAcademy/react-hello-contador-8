import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

//create your first component
function Contador (props){
    return (
        <div className="card d-flex text-center bg-dark mt-5 mx-5 p-5">
            <div className="card-body">
                <a href="#" className="btn  btn-lg mx-5 fs-1 py-4 text-warning fw-bold"><FontAwesomeIcon icon={faClock} /></a>
                <a href="#" className="btn  btn-lg mx-5 fs-1 py-4 text-white">0</a>
                <a href="#" className="btn  btn-lg mx-5 fs-1 py-4 text-white">0</a>
                <a href="#" className="btn  btn-lg mx-5 fs-1 py-4 text-white">0</a>
                <a href="#" className="btn  btn-lg mx-5 fs-1 py-4 text-white">0</a>
                <a href="#" className="btn  btn-lg mx-5 fs-1 py-4 text-white">0</a>
                <a href="#" className="btn  btn-lg mx-5 fs-1 py-4 text-danger fw-bold">{props.number}</a>
            </div>
        </div>
    );

};

export default Contador;