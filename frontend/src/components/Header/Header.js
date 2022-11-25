import './Header.css';
import logo from '../../assets/img/gazprom.svg'

export const Header = () => {

    return (
        <div className='headerContainer'>
            <img src={logo} alt="logo" className='logo'/>
        </div>
    );
};