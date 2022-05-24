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
    const [visibility, setVisibility] = useState('visible');

    const divOnClick = (item, year) => {
        console.log("divOnClick: " + item + " " + year);
        setCarName(item);
        setCarYear(year);
        setOpenAd(true);
        setVisibility('hidden');
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
            
            {!openAd && <Navbar link="buyacar"/>}
            <input type={'text'} placeholder={'Search...'} />
            {openAd && <CarAd closeAd={setOpenAd} visible={setVisibility} carName={carName} carYear={carYear}/>}
            
            <div className="cars" style={{visibility:visibility}}>
                {listCars}
            </div>
            
            
        </div>
    );
}

export default Home;