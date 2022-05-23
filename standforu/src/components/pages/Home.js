import React from "react";
import CarDiv from "../layout/CarDiv";
import './Home.css';
import Cars from "../../database/cars.json"

import { useEffect } from "react";

function Home(props) {

    var array = [];

    Object.keys(Cars).forEach(function (key) {
        array.push(Cars[key]);

    });

    const listCars = array.map(item => 
        <div className="car">
            <CarDiv image={item.imagem} info= {<React.Fragment> {item.nome} <br/> {item.ano} <br/> {item.kms + " km"} <br/> {item.preco + " €"}</React.Fragment>}/>
        </div>
    );

   
    useEffect(() => {
        console.log(Cars);
    }, []);

    return (
        <div className="Home">
            <div className="cars">
                {listCars}
            </div>
        
        </div>
    );
}

export default Home;