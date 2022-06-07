import React from "react";
import "./Embed_reviews.css";
import { Icon } from '@iconify/react';
import { motion } from "framer-motion";
import Comments from "../../database/comments.json";
import dummyph from '../../images/kia-rio-2021.jpg';

function Embed_reviews(props) {
    const {icon,title, description} = props;
    const [iconStyle, setIconStyle] = React.useState('');
    const [revShow, setRevShow] = React.useState(true);

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
        <motion.div animate={{opacity : 1, y:-10}} initial={{opacity:0}} exit={{opacity:0, y:10}} transition={{ duration:0.3}} style={{cursor:'pointer', display : revShow? '' : 'none'}}>
            <div className="embed">
            <img className="fotocar" src={dummyph} alt="dummyph"/>
                <a className="text">  
                    <p>
                    <strong>
                        {title}
                    </strong>
                    </p>
                    {description}
                </a>
                <div className="review-icon">
                    {iconStyle==='trash' && <Icon icon="bi:trash" onClick={() => setRevShow(!revShow)}/>}
                    {iconStyle==='heart' && <Icon  icon="akar-icons:heart" width="40%" onClick={() => setIconStyle('fav')} style={{cursor:'pointer'}}/>}
                    {iconStyle==='fav' && <Icon  icon="emojione:red-heart" width="40%" onClick={() => setIconStyle('heart')} style={{cursor:'pointer'}}/>}
                </div> 
            </div>
        </motion.div>
        
    );
}

export default Embed_reviews;
