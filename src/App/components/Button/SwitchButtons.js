import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import PowerOn from '@material-ui/icons/Power';
import PowerOff from '@material-ui/icons/PowerOff';
import KeyUp from '@material-ui/icons/KeyboardArrowUp'
import KeyDown from '@material-ui/icons/KeyboardArrowDown'

const styles = theme => ({
    margin: {
        width: '80vw',
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        margin: theme.spacing.unit,
    },
});

function SwitchButtons(props) {
    const { classes } = props
    let SwitchIcon;
    if(props.type === "On") {
        SwitchIcon = <PowerOn className={classes.extendedIcon} />
    }else {
        SwitchIcon = <PowerOff className={classes.extendedIcon} />
    }

    return (
        <Fab variant="extended" color="primary" aria-label="Add" className={classes.margin}>
            {SwitchIcon}
            {props.type}
        </Fab>
    )
}

function BrightnessButtons(props) {
    const { classes } = props
    let ArrowDirection;
    if(props.icon === "up"){
        ArrowDirection = <KeyUp className={classes.extendedIcon} />
    } else {
        ArrowDirection = <KeyDown className={classes.extendedIcon} />
    }
    return (
        <Fab variant="extended" color="primary" aria-label="Add" className={classes.margin}>
            {ArrowDirection}
            {props.type}
        </Fab>
    )
}

SwitchButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

BrightnessButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

const SwitchButton = withStyles(styles)(SwitchButtons);
const BrightnessButton = withStyles(styles)(BrightnessButtons);


export {SwitchButton, BrightnessButton};
export default withStyles(styles)(SwitchButtons);
