import './Styles/content.css';

function Content({ navId }){

    if(navId === 1)
        return(
            <div className='Content'>
                <div className='Intro-para'>
                    <p>
                    about
                    </p>
                </div>
            </div>
        );
    else if(navId === 2)
        return(
            <div className='Content'>
                <div className='Intro-para'>
                    <p>
                    contact
                    </p>
                </div>
            </div>
        );
    else if(navId === 3)
        return(
            <div className='Content'>
                <div className='Intro-para'>
                    <p>
                    login
                    </p>
                </div>
            </div>
        );
    else 
        return(
            <div className='Content'>
                <div className='Intro-para'>
                    <p>
                    home
                    </p>
                </div>
            </div>
        );
}

export default Content