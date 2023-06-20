import {React} from 'react';
import './header.css';
import Head from './Head';
import Search from './Search';

const Header = ()=>{
    return(
        <div>
            <Head/>
            <Search/>
            {/* <Nav/> */}
        </div>
    )
}
export default Header;