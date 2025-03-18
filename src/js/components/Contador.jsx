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
                <div  className="btn  btn-lg mx-5 fs-1 py-4 text-warning fw-bold"><FontAwesomeIcon icon={faClock} /></div>
                <div  className="btn  btn-lg mx-5 fs-1 py-4 text-danger fw-bold">{Math.floor(props.number/100000)%10}</div>
                <div  className="btn  btn-lg mx-5 fs-1 py-4 text-white">{Math.floor(props.number/10000)%10}</div>
                <div  className="btn  btn-lg mx-5 fs-1 py-4 text-white">{Math.floor(props.number/1000)%10}</div>
                <div  className="btn  btn-lg mx-5 fs-1 py-4 text-white">{Math.floor(props.number/100)%10}</div>
                <div  className="btn  btn-lg mx-5 fs-1 py-4 text-white">{Math.floor(props.number/10)%10}</div>
                <div  className="btn  btn-lg mx-5 fs-1 py-4 text-white">{Math.floor(props.number/1)%10}</div>
            </div>
        </div>
    );

};

export default Contador;