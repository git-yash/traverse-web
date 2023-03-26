import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SearchBar from '../SearchBar/SearchBar';
import { Avatar, Button } from '@mui/material';
import profilePicture from '../../assets/images/person.png';

const TopAppBar = ( props: {logo: any}) => {
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', }}>
      <AppBar color='inherit'>
        <Toolbar>
          <div>
            <img src={props.logo} alt='Logo' height={30}/>
            <p style={{paddingLeft: 10, fontWeight: 'bold', fontSize: 17}}>Traverse</p>
          </div>

          <SearchBar />

          <div>
            <Button style={{backgroundColor: '#005DFF', borderRadius: 10, color: 'white', fontFamily: 'Poppins'}}>Lend Items</Button>
            <Avatar src={profilePicture} />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default TopAppBar
