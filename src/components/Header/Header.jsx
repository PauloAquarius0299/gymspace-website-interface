// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import {Link} from 'react-scroll';
import "./Header.css";

const Header = () => {
  const mobile = window.innerWidth<=768 ? true: false;
  const [menuOpened, setMenuOpened] = useState(false);


  return (
    <div className='header'>
        <img className='logo' src={logo} alt="" />
        {menuOpened === false && mobile === true ? (
          <div
          style={{backgroundColor: 'var(--caloryCard)', padding: '0.5rem', borderRadius: '5px', marginRight: '6rem'}}

          onClick={() => setMenuOpened(true)}
          >
            <img src={Bars} alt="" style={{width: '1.5rem', height: '1.5rem'}} />
          </div>
        ) : (
          <ul className='header-menu'>
            <li onClick={() => setMenuOpened(false)}>
              <Link
              onClick={()=>setMenuOpened(false)}
              to='inicio'
              span={true}
              smooth={true}
              >INICIO</Link>
            </li>
            <li onClick={() => setMenuOpened(false)}><Link
            onClick={()=>setMenuOpened(false)}
            to='programs'
            span={true}
            smooth={true}
            >
            PROGRAMAS</Link></li>
            <li onClick={() => setMenuOpened(false)}><Link
            onClick={()=>setMenuOpened(false)}
            to='reasons'
            span={true}
            smooth={true}
            >
            SOBRE NÓS</Link></li>
            <li onClick={() => setMenuOpened(false)}><Link
            onClick={()=>setMenuOpened(false)}
            to='plans'
            span={true}
            smooth={true}
            >
            PLANOS</Link></li>
            <li onClick={() => setMenuOpened(false)}><Link
            onClick={()=>setMenuOpened(false)}
            to='clientes'
            span={true}
            smooth={true}
            >
            CLIENTES
            </Link></li>
        </ul>
        ) }
        
    </div>
  )
}

export default Header