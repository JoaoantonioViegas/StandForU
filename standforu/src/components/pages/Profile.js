import React from "react";
import Navbar from "../layout/Navbar"
import'./Profile.css'
import car1 from '../../images/jeep-wrangler-2006.jpg'
import car2 from '../../images/corolla.jpg'
import fotoperfil from '../../images/fotoperfil.png'    


function Profile (){
    return (
        <div className="profilepage">
            <Navbar link="profile"/>
            <div className="profile">
                <img src={fotoperfil} className="fotoperfil"/>
                <h2 className="dados1">João Viegas</h2>
                <h2 className="dados2">Joined 20/03/2021</h2>
                <h2 className="dados3">Jonha@gmail.com</h2>
                <h2 className="dados4">235649486</h2>
                <h2 className="dados5">I love sports cars, personally have a Audi A1 and a 1998 nissan GTR</h2>

            </div>
            <div className="mycars">
                <h1 className="myselcars">My selling cars</h1>
                    <div className="my1car">
                        <div className="car1"> 
                            <img src={car1} alt="car1" className="imageprofcar"/>
                            {/* <h2 className="letrascarro1">Jeep Rangler</h2> */}
                        </div>
                    </div>
                    <div className="my2car">
                        {/* <div className="car1"> 
                            <img src={car2} alt="car1" className="imageprofcar"/>
                            <h2 className="letrascarro1">Toyota corolla</h2>
                        </div> */}
                    </div> 
            </div>
            <div className="myreviews">

            </div>
        </div>
        

    )
}

export  default Profile;