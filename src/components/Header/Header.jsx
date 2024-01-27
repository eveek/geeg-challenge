import './header.scss';

const openMenu = () => {
    const aside = document.querySelector('aside');
    aside.style.right = '0';
}

function Header () {

    return (
        <header>
            <div className='head'>
                <div className='title'>Dashboard</div>
                <div className='searchbox'>
                    <img src="search.svg" alt="search icon" />
                    <input type="search" placeholder='Search...'/>
                </div>
            </div>
            <div className='profile'>
                <div className='headDate'>
                    <img src="calendar.svg" alt="calendar icon" />
                    <span>November 17, 2024</span>
                </div>
                <div className='notification'><img src="notification.svg" alt="" /><span>2</span></div>
                <div>
                    <div><img src="picture.png" alt="" /></div>
                    <div >
                        <span>Victor Enweoru</span><span>Victor@gmail.com</span>
                    </div>
                    <div><img src="arrow-down.svg" alt="" /></div>
                </div>
            </div>
            <div className='menu'>
                <button onClick={openMenu}>
                    <img src="menu.png" alt="" />
                </button>
            </div>
        </header>
    )
}

export default Header