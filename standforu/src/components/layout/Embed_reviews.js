import React from "react";
import "./Embed_reviews.css";

function Embed_reviews(props) {
    const {title, description} = props;
    return (
        <div>  
            <a className="text"><strong>{title} :</strong> {description}</a>
        </div>
        
    );
}

export default Embed_reviews;
