import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Box } from '@mui/material'
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className='search-bar-container'>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='search-bar-icon' />
        <input type='text' placeholder='Search...' className='search-bar-input' />
    </div>
  )
}

export default SearchBar
