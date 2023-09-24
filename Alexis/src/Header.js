import './Styles/header.css';

function Header({ setNavId }){
    return(
      <header className="App-header">
        <div className='nav-header'>
          <div className="Home-header">
            <button onClick={() => setNavId(0)}>
              <span>Home</span>
            </button>
          </div>
          <div className='About-header'>
            <button onClick={() => setNavId(1)}>
              About
            </button>
          </div>
          <div className='Contact-header'>
            <button onClick={() => setNavId(2)}>
              Contact
            </button>
          </div>
          <div className='Login-header'>
            <button onClick={() => setNavId(3)}>
              Login/Signup
            </button>
          </div>
        </div>
        <div className='Logo-header'>
          <p className='Logo-para'>Alexis</p>
        </div>
      </header>
    );
}

export default Header