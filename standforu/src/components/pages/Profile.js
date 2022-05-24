import React from "react";
import Navbar from "../layout/Navbar"
import'./Profile.css'
import car1 from '../../images/jeep-wrangler-2006.jpg'


function Profile (){
    return (
        <div className="profilepage">
            <Navbar link="profile"/>
            <div className="profile">
                <h2 className="dados1">João Viegas</h2>
                <h2 className="dados2">Joined 20/03/2021</h2>
                <h2 className="dados3">Jonha@gmail.com</h2>
                <h2 className="dados4">235649486</h2>
                <h2 className="dados5">Adoro carros desportivos</h2>

            </div>
            <div className="mycars">
                <h1 className="myselcars">My selling cars</h1>
                    <div className="my1car">
                        <div className="car1"> 
                            <img src={car1} alt="car1" className="imageprofcar"/>
                            <h2 className="letrascarro1">Jeep Rangler</h2>
                        </div>
                    </div>
            </div>
            <div className="myreviews">

            </div>
        </div>
        

    )
}

export  default Profile;