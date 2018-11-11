import React, { Component } from 'react';
import {
  Box,
  Grommet,
  Text,
} from 'grommet';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Logo from './logo.svg'
import { Grid, BarChart, LineChart, Help } from 'grommet-icons';

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  }
}

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='#b3e5fc'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='small'
    style={{ zIndex: '100' }}
    {...props}
  />
);

class App extends Component {
  render() {
    return (
      <Grommet theme={theme} full>
        <Box background='light-2'>
          <AppBar>
            <img src={Logo} alt='logo' />
            <Box align='center'>
              <Text>
                John Goodwin
              </Text>
            </Box>
          </AppBar>
          <Box direction='row' flex>
            <Box
              width='small'
              background='light-1'
              elevation='small'
              align='stretch'
              justify='start'>
              <Box pad='medium' border='bottom' direction='row' align='center'>
                <Grid size='small' style={{marginRight: '12px'}} />
                <Text style={{fontWeight: 'bold'}}>Dashboard</Text>
              </Box>
              <Box pad='medium' border='bottom' direction='row' align='center'>
                <BarChart size='small' style={{marginRight: '12px'}} />
                <Text style={{fontWeight: 'bold'}}>History</Text>
              </Box>
              <Box pad='medium' border='bottom' direction='row' align='center'>
                <LineChart size='small' style={{marginRight: '12px'}} />
                <Text style={{fontWeight: 'bold'}}>Prediction</Text>
              </Box>
              <Box pad='medium' border='bottom' direction='row' align='center'>
                <Help size='small' style={{marginRight: '12px'}} />
                <Text style={{fontWeight: 'bold'}}>Help</Text>
              </Box>
            </Box>
            <Box flex>
              <Router>
                <div>
                  <Route exact path="/" component={Dashboard} />
                </div>
              </Router>
            </Box>
          </Box>
        </Box>
      </Grommet>
    );
  }
}

export default App;
