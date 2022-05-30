import React from "react";
import "./Embed_reviews.css";
import { motion } from "framer-motion";

function Embed_reviews(props) {
    const {title, description} = props;
    return (
        <motion.div animate={{opacity : 1, y:-10}} initial={{opacity:0}} exit={{opacity:0, y:10}} transition={{ duration:0.3}}> 
            <a className="text"><strong>{title} :</strong> {description}</a>
        </motion.div>
        
    );
}

export default Embed_reviews;
