import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Box } from '@mui/material'

const SearchBar = () => {
  return (
    <div style={{borderRadius: 100, boxShadow: '1px 2px 9px #a1a19f'}}>
        <input type='text' placeholder='Search...' style={{borderWidth: 0, backgroundColor: 'transparent'   }} />
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: '#005DFF'}} />
    </div>
  )
}

export default SearchBar
