import Logo from './assets/Logo.svg';
import Feed from './assets/feed.svg';
import Account from './assets/account_circle.svg';
import Info from './assets/info.svg';
import Logout from './assets/logout.svg';
import './styles.css';

export default function Sidebar() {
    return (
        <aside>
            <img src={Logo} alt='Logo do CodeConnect' />
            <nav>
                <ul className='lista-sidebar'>
                    <li>
                        <a href='#' className='item__link-publicacao'>Publicar</a>
                    </li>
                    <li>
                        <a href='#' className='item__link item__link--ativo'>
                            <img src={Feed} alt='' />
                        </a>
                    </li>
                    <li>
                        <a href='#' className='item__link'>
                            <img src={Account} alt='' />
                        </a>
                    </li>
                    <li>
                        <a href='#' className='item__link'>
                            <img src={Info} alt='' />
                        </a>
                    </li>
                    <li>
                        <a href='#' className='item__link'>
                            <img src={Logout} alt='' />
                        </a>
                    </li>                    
                </ul>
            </nav>
        </aside>
    )
}