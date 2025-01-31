import AppBar from '@material-ui/core/AppBar';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Navbar extends React.Component {
    render(){
        return (
            <AppBar position="sticky">
              <Toolbar>
                <Typography variant="h6">
                  Coin360
                </Typography>
              </Toolbar>
            </AppBar>
        )
    }
}

export default Navbar