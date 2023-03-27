import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Box } from '@mui/material'
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className='searchBarContainer'>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='searchBarIcon' />
        <input type='text' placeholder='Search...' className='searchBarInput' />
    </div>
  )
}

export default SearchBar
