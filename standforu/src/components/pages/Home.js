import React from "react";
import CarDiv from "../layout/CarDiv";
import './Home.css';

import { useEffect } from "react";

function Home(props) {

    //create a array of strings 
    const carArray = ['Audi A1', 'Volvo XC40', 'Mercedes GLS', 'Nissan Qashqai', 'BMW X5', 'Toyota Prius', 'Honda Civic', 'Ford Focus',  'Mazda CX-5',  'Kia Rio', 'Jeep Wrangler', 'Subaru Impreza',  'Mitsubishi Outlander', 'Ford Fusion', 'Dodge Challenger']
    const carYears = ['2019',   '2020',         '2021',         '2006',         '2010',     '2012',         '2001',         '2009',         '2015',     '2021',     '2006',             '2013' ,        '2015',                 '2017',             '2018']
    const carPrices = ['35 000 €', '40 000 €', '45 000 €',      '16 000 €',     '25 000 €', '18 000 €',     '3 000 €',    '16 000 €',       '21 000 €', '20 000 €', '45 000 €',     '52 000 €',         '14 000 €',         '20 000 €',         '80 000 €']
    const carMileages = ['15 100 km', '46 000 km', '67 600 km',  '180 000 km',   '290 800 km',  '210 000 km',  '312 900 km',  '202 800 km', '73 900 km', '104 000 km', '88 200 km',   '102 100 km',     '273 400 km',       '121 500 km',      '29 900 km']
    const carImages = ['audi-a1-2019.jpg', 'volvo-xc40-2020.jpg', 'mercedes-gls-2021.jpg', 'nissan-qashqai-2006.jpg', 'bmw-x5-2010.jpg', 'toyota-prius-2012.jpg', 'honda-civic-2001.jpg', 'ford-focus-2009.jpg', 'mazda-cx-5-2015.jpg', 'kia-rio-2021.jpg', 'jeep-wrangler-2006.jpg', 'subaru-impreza-2013.jpg', 'mitsubishi-outlander-2015.jpg', 'ford-fusion-2017.jpg', 'dodge-challenger-2018.jpg']

    

    //function that runs only on page load and generates a array of size random between 6 and 16 with random non repeating integers and puts those integers inside carInfo array
    const [carInfo, setCarInfo] = React.useState([]);
   
    useEffect(() => {
        setCarInfo([]);
        //generate a random number between 6 and 16
        let size = Math.floor(Math.random() * 11) + 6;
        console.log('size: '+random)
        //generate size elements of random numbers not repeating between 0 and 19
        let random = [];
        for (let i = 0; i < size; i++) {
            let randomNumber = Math.floor(Math.random() * 20);
            while (random.includes(randomNumber)) {
                randomNumber = Math.floor(Math.random() * 20);
            }
            random.push(randomNumber);
        }
        console.log(random)
        
    }, []);

    // useEffect(()=>{
        
    //     //generate random number between 6 and 15
    //     let num = Math.floor(Math.random() * (15 - 6 + 1)) + 6;
    //     while(carInfo.length < num){
    //         var r = Math.floor(Math.random() * 100) + 1;
    //         //if var is not in the array, add it using setCarInfo
    //         if(carInfo.indexOf(r) === -1){
    //             setCarInfo(carInfo => [...carInfo, r]);
    //         }

    //     }
    // }, []);

    return (
        <div className="Home">
            <div className="cars">
                {/* Loop through arr and display car name, year, price, mileage and image based on index inside arr */}
                            {/* {carInfo.map(index => <div className='car'> <CarDiv image={carImages[index]} info={<React.Fragment> {carArray[index]} <br/> {carYears[index]} <br/> {carMileages[index]} <br/> {carPrices[index]} </React.Fragment>}/> </div>)} */}

            </div>
        
        </div>
    );
}

export default Home;