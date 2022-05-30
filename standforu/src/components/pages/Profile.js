import React from "react";
import Navbar from "../layout/Navbar"
import'./Profile.css'
import car1 from '../../images/jeep-wrangler-2006.jpg'
import car2 from '../../images/corolla.jpg'
import fotoperfil from '../../images/fotoperfil.png'  
import { useNavigate } from "react-router-dom";  
import { Icon } from '@iconify/react';


function Profile (props){

    let navigate = useNavigate();
    const [apagar,setapagar] = React.useState("visible");
    const [apagar2,setapagar2] = React.useState("visible");

    const handleLogout = (e) => {
        e.preventDefault();
        props.setLoggedIn(false);
        // redirect to /profile using Navigate 
        navigate(`/`);
    }
    //funcao para colocar apagar a true
    const handleApagar1 = () => {
        setapagar("hidden");
    }
    const handleApagar2 = () => {
        setapagar2("hidden");
    }
    //Imprimir na console o valor de apagar
    console.log(apagar);
    //funcao para esconder my2car
    
    return (
        <div className="profilepage">
            <Navbar link="profile" loggedIn={props.loggedIn}/>
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
                    <div className="my1car" style={{visibility: apagar}}>
                        <div className="car1"> 
                            <img src={car1} alt="car1" className="imageprofcar"/>
                            <h2 className="letrascarro1">Jeep Rangler</h2>
                        </div>
                        <Icon onClick={handleApagar1} className="trash" icon="bi:trash" />
                    </div>
                    <div className="my2car" style={{visibility: apagar2}}>
                        <div className="car1"> 
                            <img src={car2} alt="car1" className="imageprofcar"/>
                            <h2 className="letrascarro1">Toyota corolla</h2>
                        </div>
                        <Icon onClick={handleApagar2} className="trash" icon="bi:trash" />
                    </div> 
            </div>
            <div className="myreviews">
                <h1 className="myrev">My Reviews</h1>
            </div>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
        

    )
}

export  default Profile;