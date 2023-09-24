import {useState} from 'react'
import { navLinks } from '../utils/data';
import {TfiShoppingCart} from 'react-icons/tfi'
import {BsChevronDown} from 'react-icons/bs';
import {GiHamburgerMenu} from 'react-icons/gi';

export default function NavBar() {
    const [isOpen,setIsOpen]= useState(false);

    const handleOpen=()=>{
        setIsOpen(prev=>!prev);
    }

  return (
    <nav className="nav-container">
        <div className="nav-items">
        <h1 className="logo-items">Reeco</h1>
        <ul className='nav-links'>
            {navLinks.map(link=>{
                return (<li key={link.id}><a href={`/${link.name}`}>{link.name}</a></li>)
            })}
        </ul>
        </div>
        <div className="checkout-container">
            <section className="cart-container">
                <TfiShoppingCart/>
                <p className="item-number">10</p>
            </section>
            <section className='user-account'>Hello, James <span><BsChevronDown/></span></section>
        </div>
        <span className="burger-menu" onClick={handleOpen}><GiHamburgerMenu/></span>
    </nav>
  )
}
