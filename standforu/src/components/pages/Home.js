// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import CarDiv from "../layout/CarDiv";
import './Home.css';
import Cars from "../../database/cars.json"
import Navbar from "../layout/Navbar";
import CarAd from "../layout/CarAd";
import {motion, AnimatePresence} from 'framer-motion';
import Embed_reviews from "../layout/Embed_reviews";

function Home(props) {

    const [openAd, setOpenAd] = useState(false);


    const [visibility, setVisibility] = useState('visible');
    const [searchTerm, setSearchTerm] = useState("");
    const [carObject, setCarObject] = useState({});
    const [opacity, setOpacity] = useState('1');
    const [transition, setTransition] = useState('visibility 0.3s linear,opacity 0.3s linear');

    const divOnClick = (nome, year) => {
        setOpenAd(true);
        setVisibility('hidden');
        setOpacity('0');
        setTransition('none')
        let car = array.find(item => item.nome === nome && item.ano === year)
        setCarObject(car);
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
        else {
            return null
        }
    }).map((item,key) => 
        <div className="car" onClick={() => divOnClick(item.nome, item.ano)} key={key}>
            <CarDiv image={item.imagem} info= {<React.Fragment> {item.nome} <br/> {item.ano} <br/> {item.kms + " km"} <br/> {item.preco + " €"}</React.Fragment>}/>
        </div>
    );

    return (
        <div className="Home">
            
            {!openAd && <Navbar link="buyacar" loggedIn= {props.loggedIn}/>}
            {!openAd && <input  className="searchInput" type={'text'} placeholder={'Search...'} onChange={(event) => setSearchTerm(event.target.value)}/>}
            <AnimatePresence>
            {openAd && <motion.div><CarAd closeAd={setOpenAd} visible={setVisibility} opacity={setOpacity} transition={setTransition} carObject={carObject}/></motion.div>}
            </AnimatePresence>
            <motion.div className="cars" style={{visibility:visibility, opacity:opacity, transition:transition}}>
                <AnimatePresence>
                {listCars}
                </AnimatePresence>
            </motion.div>
            
            <Embed_reviews title={'Josh Silva - Audi A1(2019)'} description={'I have this car, it’s very confotable and economic. I managed to average 6,1L/100km driving in town. Regarding costs, Audi is a bit expensive, and the inspection is about 300€. Once i had to replace a rim and because it was an original, I had to pay 500€. Overall, very happy with this car.'}></Embed_reviews>
        </div>
    );
}

export default Home;