import React from "react";
import CarDiv from "./CarDiv";
import './MainPage.css'

function MainPage(props) {
  return (
    <div className="MainPage">
        <h1 style={{color:'black'}}>MainPage</h1>
        <div className="cars">
            <div className="car">
                <CarDiv image='audi-a1-2019.jpg' info={ <React.Fragment> Audi A1 <br /> 13 000 Km <br /> 31 899 € </React.Fragment> } extra="+INFO" />
            </div>
            <div className="car">
                <CarDiv image='audi-a1-2019.jpg' info={ <React.Fragment> Audi A1 <br /> 13 000 Km <br /> 31 899 € </React.Fragment> } extra="+INFO" />
            </div>
            <div className="car">
                <CarDiv image='audi-a1-2019.jpg' info={ <React.Fragment> Audi A1 <br /> 13 000 Km <br /> 31 899 € </React.Fragment> } extra="+INFO" />
            </div>
            <div className="car">
                <CarDiv image='audi-a1-2019.jpg' info={ <React.Fragment> Audi A1 <br /> 13 000 Km <br /> 31 899 € </React.Fragment> } extra="+INFO" />
            </div>
            <div className="car">
                <CarDiv image='audi-a1-2019.jpg' info={ <React.Fragment> Audi A1 <br /> 13 000 Km <br /> 31 899 € </React.Fragment> } extra="+INFO" />
            </div>
            <div className="car">
                <CarDiv image='audi-a1-2019.jpg' info={ <React.Fragment> Audi A1 <br /> 13 000 Km <br /> 31 899 € </React.Fragment> } extra="+INFO" />
            </div>
            <div className="car">
                <CarDiv image='audi-a1-2019.jpg' info={ <React.Fragment> Audi A1 <br /> 13 000 Km <br /> 31 899 € </React.Fragment> } extra="+INFO" />
            </div>
            
            
        </div>
      
    </div>
    );
}

export default MainPage;