import {Link} from 'react-router-dom';
import Container from './Container';

import  './Navbar.css';
import { Icon } from '@iconify/react';
import "@fontsource/roboto-mono";

function Navbar(){
return(
    <nav>

            <Container className='navbar'>
                <Link to='/' className='home'> StandForU</Link>
                <nav className='nav-links'>
                    <Link to='/Buyacar' className='buyacar'> Buy a car</Link>
                    <Link to='/Sellacar' className='sellacar'> Sell a car</Link>
                    <Link to='/Makeareview' className='makeareview'> Make a review</Link>
                    <Link to='/Profile' className='icon'> 
                        <Icon icon="akar-icons:person" height="36" hFlip={true} />
                    </Link>
                </nav>
            </Container>

    </nav>
)
}

export default Navbar;