import './sidebar.scss';

const closeMenu = () => {
    const aside = document.querySelector('aside');
    aside.style.right = '-80px';
}

const themeContainer = document.querySelector('#theme');
const toggler = document.querySelector('#toggler');



function Sidebar () {
    
    // const setight = () => {
    // //     // alert('hbdhbvsh')
    // //     console.log(themeContainer)
    // //     themeContainer.className = 'light';
    //     toggler.style.top = '2px';
    // }
    // const setDark = () => {
    // //     themeContainer.className = 'dark';
    //     toggler.style.top = '48px';
    // }
    return (
        <aside className="sidebar">
                <div className="logo"><img src="logo.svg" alt="logo"/></div>
                <div className='scroll'>
                    <nav>
                        <div className="mainNav">
                            <div className='icon'><img src="dashboard.svg" alt="dashboard" /></div>
                            <div className='icon'><img src="trend-up.svg" alt="profile" /></div>
                            <div className='icon'><img src="profile.svg" alt="" /></div>
                            <div className='icon'><img src="box.svg" alt="" /></div>
                            <div className='icon'><img src="discount-shape.svg" alt="" /></div>
                            <div className='icon'><img src="info-circle.svg" alt="" /></div>
                            <div className="theme">
                                <div  className='icon' id='light'><img src="brightness.svg" alt="" /></div>
                                <div  className='icon' id='dark'><img src="moon.svg" alt="" /></div>
                                <div id='toggler'></div>
                            </div>
                        </div>
                        <div className="otherNav">
                            <div  className="icon"><img src="arrow-right.svg" alt="" /></div>
                            <div  className="icon"><img src="setting.svg" alt="setting icon" /></div>
                            <div className="icon"><img src="logout.svg" alt="logout icon" /></div>
                        </div>
                    </nav>
                </div>
                <div className='close'>
                    <button onClick={closeMenu}>
                        <img src="close.svg" alt="" />
                    </button>
                </div>
        </aside>
    )
}

export default Sidebar