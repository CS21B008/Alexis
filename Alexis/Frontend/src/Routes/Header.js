import { Link } from 'react-router-dom';
import '../Styles/header.css';

function Header(){
    return(
      <header className="App-header">
        <div className='nav-header'>
          <div className="Home-header">
              <Link className="headerLink" to="/">HOME</Link>
          </div>
          <div className='About-header'>
              <Link className="headerLink" to="/about">ABOUT</Link>
          </div>
          <div className='Contact-header'>
              <Link className="headerLink" to="/contact">CONTACT</Link>
          </div>
          <div className='Login-header'>
              <Link className="headerLink" to="/login">LOGIN/SIGNUP</Link>
          </div>
        </div>
        <div className='Logo-header'>
          <p className='Logo-para'>ALEXIS</p>
        </div>
      </header>
    );
}

export default Header