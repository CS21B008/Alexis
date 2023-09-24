import './Styles/content.css';

function Content({ navId }){

    if(navId === 1)
        return(
            <div className='Content'>
                <div className='Intro-para'>
                    <p>
                    About
                    </p>
                </div>
            </div>
        );
    else if(navId === 2)
        return(
            <div className='Content'>
                <div className='Intro-para'>
                    <p>
                    Contact
                    </p>
                </div>
            </div>
        );
    else if(navId === 3)
        return(
            <div className='Content'>
                <div className='Intro-para'>
                    <p>
                    Login
                    </p>
                </div>
            </div>
        );
    else 
        return(
            <div className='Content'>
                <div className='Intro-para'>
                    <p>
                    Home
                    </p>
                </div>
            </div>
        );
}

export default Content