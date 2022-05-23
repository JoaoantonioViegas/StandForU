// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import CarDiv from "../layout/CarDiv";
import './Home.css';
import Cars from "../../database/cars.json"
import Navbar from "../layout/Navbar";
import CarAd from "../layout/CarAd";

function Home(props) {

    const [openAd, setOpenAd] = useState(false);

    const [carName, setCarName] = useState("");
    const [carYear , setCarYear] = useState("");

    const divOnClick = (item, year) => {
        console.log("divOnClick: " + item + " " + year);
        setCarName(item);
        setCarYear(year);
        setOpenAd(true)
    }

    var array = [];
    Object.keys(Cars).forEach(function (key) {
        array.push(Cars[key]);

    });

    const listCars = array.map(item => 
        <div className="car" onClick={() => divOnClick(item.nome, item.ano)} >
            <CarDiv image={item.imagem} info= {<React.Fragment> {item.nome} <br/> {item.ano} <br/> {item.kms + " km"} <br/> {item.preco + " €"}</React.Fragment>}/>
            
        </div>
    );

    return (
        <div className="Home">
            {openAd && <CarAd closeAd={setOpenAd} carName={carName} carYear={carYear}/>}
            {!openAd && <Navbar link="buyacar"/>}
            <div className="cars">
                {!openAd && listCars}
            </div>
            
        </div>
    );
}

export default Home;