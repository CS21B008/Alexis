import '../Styles/home.css';
import '../Styles/content.css';
import Footer from './Footer';
import Header from './Header';

function Contact() {

  return (
    <div className="Contact">
      <Header />
      <div className='Content'>
        <p className='contentPara'>Contact</p>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;