import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SearchBar from '../SearchBar/SearchBar';
import { Avatar, Button } from '@mui/material';
import profilePicture from '../../assets/images/person.png';
import '../TopAppBar/TopAppBar.css';

const TopAppBar = ( props: {logo: any}) => {
  return (
    <Box sx={{ flexGrow: 1, }}>
      <AppBar color='inherit'>
        <Toolbar>
          <div style={{display: "flex"}}>
            <img src={props.logo} alt='Logo' className='traverseLogo' />
            <p className='traverseText'>Traverse</p>
          </div>

          <div className='search-bar-container'>
            <SearchBar />
          </div>

          <div className='rightContainer' >
            <Button className='lendItemsButton'>Lend Items</Button>
            <Avatar src={profilePicture} />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default TopAppBar
