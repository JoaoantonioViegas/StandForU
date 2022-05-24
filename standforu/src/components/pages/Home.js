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
    const [searchTerm, setSearchTerm] = useState("");

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

    const listCars = array.filter((item) => {
        if(searchTerm === ""){
            return item
        } else if (item.nome.toLowerCase().includes(searchTerm.toLowerCase())) {
            return item
        }
    }).map((item,key) => 
        <div className="car" onClick={() => divOnClick(item.nome, item.ano)} key={key}>
            <CarDiv image={item.imagem} info= {<React.Fragment> {item.nome} <br/> {item.ano} <br/> {item.kms + " km"} <br/> {item.preco + " €"}</React.Fragment>}/>
            
        </div>
    );

    return (
        <div className="Home">
            
            {!openAd && <Navbar link="buyacar"/>}
            <input  className="searchInput" type={'text'} placeholder={'Search...'} onChange={(event) => setSearchTerm(event.target.value)}/>
            {openAd && <CarAd closeAd={setOpenAd} visible={setVisibility} carName={carName} carYear={carYear}/>}
            
            <div className="cars" style={{visibility:visibility}}>
                {listCars}
            </div>
            
            
        </div>
    );
}

export default Home;