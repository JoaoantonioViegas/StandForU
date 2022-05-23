import React, { useEffect, useState } from "react";
import CarDiv from "../layout/CarDiv";
import './Home.css';
import Cars from "../../database/cars.json"

function Home(props) {

    const divOnClick = (item) => {
        console.log("divOnClick: " + item)
    }

    var array = [];
    Object.keys(Cars).forEach(function (key) {
        array.push(Cars[key]);

    });

    useEffect(() => {
        // setState({isCarDivOpen: false, carDivName: "none"})
    }, [])

    const listCars = array.map(item => 
        <div className="car" onClick={() => divOnClick(item.nome)} >
            <CarDiv image={item.imagem} info= {<React.Fragment> {item.nome} <br/> {item.ano} <br/> {item.kms + " km"} <br/> {item.preco + " €"}</React.Fragment>}/>
            
        </div>
    );

    return (
        <div className="Home">
            <div className="cars">
                {listCars}
            </div>
        
        </div>
    );
}

export default Home;