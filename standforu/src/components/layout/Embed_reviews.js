import React from "react";
import "./Embed_reviews.css";
import { Icon } from '@iconify/react';

function Embed_reviews(props) {
    const {title, description} = props;
    //funcao retorna o titulo cujo icon foi selecinado
    
    return (
        <div>
            <Icon  className="trash2" icon="bi:trash"/>
            <a className="text">
                <strong>
                    {title} :
                </strong> 
                {description}
            </a>
        </div>
    );
}

export default Embed_reviews;
