import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import btnLogo from '../../assets/images/btn-logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMessage } from '@fortawesome/free-solid-svg-icons'
import { MdLeaderboard } from 'react-icons/md'
import { BiShoppingBag } from 'react-icons/bi'
import { AiOutlineLineChart } from 'react-icons/ai'
import { LuSettings } from 'react-icons/lu'
import { PiSignOutBold } from 'react-icons/pi'
import getpro from '../../assets/images/getpro.svg'

const Navigation = () => {
    return (
        <ul>
            <li>
                <Link className='dashboard-btn d-flex align-items-center' to='/'>
                    <img src={btnLogo} alt="Button Logo" />
                    Dashboard
                </Link>
            </li>
            <div>
                <li>
                    <Link to='/products'>
                        <MdLeaderboard className='icon' />
                        Leaderboard
                    </Link>
                </li>
                <li>
                    <FontAwesomeIcon icon={faCartShopping} className='icon' />
                    <Link to='/products'>Order</Link>
                </li>
                <li>
                    <BiShoppingBag className='icon' />
                    <Link to='/products'>Products</Link>
                </li>
                <li>
                    <AiOutlineLineChart className='icon' />
                    <Link to='/products'>Sales Report</Link>
                </li>
                <li>
                    <FontAwesomeIcon icon={faMessage} className='icon' />
                    <Link to='/products'>Messages</Link>
                </li>
                <li>
                    <Link to='/products'>
                        <LuSettings className='icon' />
                        Settings
                    </Link>
                </li>
                <li>
                    <PiSignOutBold className='icon' />
                    <Link to='/products'>Sign Out</Link>
                </li>


            </div>
            {/* <li>
                <img src={getpro} alt="" />
            </li> */}

        </ul>
    )
}

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='logo-section d-flex align-items-center'>
                <img src={logo} className='logo' alt="Logo" />
                <h1>Dabang</h1>
            </div>
            <Navigation />
        </div>
    )
}

export default Sidebar