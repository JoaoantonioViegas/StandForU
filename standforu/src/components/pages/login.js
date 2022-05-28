import React from "react";
import Navbar from "../layout/Navbar"
import'./login.css'
import {Link} from 'react-router-dom';
import { Icon } from '@iconify/react';



function login (){
    var color_var = "#FFFFFF";
    return (
        <div className="loginpage">
            <Navbar link="profile"/>
            <body>
            <div id="split_left">
                <div class="left">-
                    <h1 className="logintitle">Login</h1>
                    <input type="input" class="form__field1" placeholder="" name="username" id='username' required />
                    <label for="username" class="form__label1"><Icon icon="ant-design:user-outlined" color="#4fbfb9" />User</label>

                    <input type="password" class="form__field2" placeholder="" name="password" id='password' required />
                    <label for="password" class="form__label2"><Icon icon="carbon:password" color="#4fbfb9" />Pass</label>
                    <div className="label_btn">
                        <div className="btn_login_div"><Link to='/profile' className= "btn_login" style={{color:color_var}}>login</Link></div>
                        <div className="btn_register_div"><Link to='/register' className= "btn_register" style={{color:color_var}}>Register</Link></div>
                    </div>
                </div>
            </div>
            
            <div id="split_right">
                <div class="centered">
                    <Icon icon="ant-design:car-filled" color="#4fbfb9" width="500" />
                    <h1 className="buyandcell">Buy and Sell Cars</h1>
                </div>
            </div>
        </body>
        </div>
        

    )
}

export  default login;