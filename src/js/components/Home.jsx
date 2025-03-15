import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
function Home(props){
    return (
        <div className="card d-flex text-center bg-dark">
            <div className="card-body">
                <h5 className="card-title text-white">Card title</h5>
                <p className="card-text text-white">Some quick example text to build on the card title and fill the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );

};

export default Home;