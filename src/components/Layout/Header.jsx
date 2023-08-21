import React from 'react'
import { BsBell } from 'react-icons/bs'
import { BsSearch } from 'react-icons/bs'
import prof from '../../assets/images/profile.svg'

function Header() {
  return (
    <div className='header-wrapper'>

      <div>
        <h2>Dashboard</h2>
      </div>

      <div className='search-input-wrapper position-relative'>
        <BsSearch className='search-icon position-absolute' />
        <input type="text" className='search-input' placeholder="Search here..." />
      </div>

      <div>
        <select name="language" >
          <option value="">English</option>
          <option value="">Azerbaijani</option>
          <option value="">Spanish</option>
        </select>
      </div>

      <div>
        <div className='bell-wrapper position-relative'>
          <BsBell className='bell' />
          <div className='red-dot position-absolute'></div>
        </div>
      </div>

      <div className='d-flex gap-2'>

        <div className='profile-pic-wrapper'>
          <img src={prof} className='profile-pic' alt="" />
        </div>

        <div className='d-flex flex-column'>
          <select name="" id="">
            <option value="">Musfig</option>
            <option value="">Option 1</option>
            <option value="">Option 2</option>
          </select>

          <span className='role ps-1'>Admin</span>
        </div>

      </div>

    </div>
  )
}

export default Header