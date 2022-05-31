import React from "react";
import "./Embed_reviews.css";
import { Icon } from '@iconify/react';
import { motion } from "framer-motion";

function Embed_reviews(props) {
    const {icon,title, description} = props;

    const [iconStyle, setIconStyle] = React.useState('');

    React.useEffect(() => {
        if (icon === 'trash'){
            setIconStyle('trash');
        } else if (icon === 'heart'){
            setIconStyle('heart');
        } else if (icon === 'fav'){
            setIconStyle('fav');
        } else {
            setIconStyle('none');
        }
    }, [icon]);


    return (
        <motion.div animate={{opacity : 1, y:-10}} initial={{opacity:0}} exit={{opacity:0, y:10}} transition={{ duration:0.3}}>
            <div className="review-icon">
                {iconStyle==='trash' && <Icon icon="bi:trash"/>}
                {iconStyle==='heart' && <Icon  icon="akar-icons:heart" />}
                {iconStyle==='fav' && <Icon  icon="emojione:red-heart" />}
            </div> 
            <a className="text">
                <strong>
                    {title} :
                </strong> 
                {description}
            </a>
        </motion.div>
        
    );
}

export default Embed_reviews;
