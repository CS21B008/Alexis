import '../Styles/home.css';
import '../Styles/content.css';
import Footer from './Footer';
import Header from './Header';

function About() {

  return (
    <div className="About">
      <Header />
      <div className='Content'>
        <p className='contentPara'>About</p>
      </div>
      <Footer/>
    </div>
  );
}

export default About;