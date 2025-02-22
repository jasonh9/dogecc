import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Brightness5 from '@material-ui/icons/Brightness5';
import Memory from '@material-ui/icons/Memory';
import WeatherIcon from '@material-ui/icons/Cloud';
// import { isAbsolute } from 'path';
// import { blue } from '@material-ui/core/colors';

const styles = {
    root: {
        width: '100vw',
        position: 'absolute',
        bottom: 0,
    },
};

class SimpleBottomNavigation extends React.Component {
    state = {
        value: 'home',
    };

    handleChange = (event, value) => {
        this.props.changePage( value )
        this.setState({ value })
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <BottomNavigation
                value={value}
                onChange={this.handleChange}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction value='home' label="Home" icon={<Brightness5 />} />
                <BottomNavigationAction value='sensors' label="Sensors" icon={<Memory />} />
                {/* <BottomNavigationAction value='weather' label="Weather" icon={<WeatherIcon />} /> */}
            </BottomNavigation>
        );
    }
}

SimpleBottomNavigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBottomNavigation);