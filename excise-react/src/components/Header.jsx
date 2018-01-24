import React from 'react'
import { Link } from 'react-router-dom'
import { Home } from './'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import logo from './logo.svg';

const styles = theme => ({
    root: {
        width: '100%',
        zIndex: theme.zIndex.drawer + 1000
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    logoButton: {
        height: '3rem',
        paddingLeft: 16,
        paddingRight: 16
    },
});

function Header(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    {/* <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
                        <MenuIcon />
                    </IconButton> */}
                    <IconButton
                        aria-owns='menu-appbar'
                        aria-haspopup="true"
                        color="contrast"
                    >
                        <img src={logo} alt="" className={classes.logoButton} />
                    </IconButton>
                    <div>
                        <Typography type="subheading" color="inherit" className={classes.flex}>
                            กรมสรรพสามิต
                        </Typography>
                        <Typography type="caption" color="inherit">
                            ระบบผู้กระทำผิดกฏหมายพระราชบัญญัติ พ.ศ.2560
                        </Typography>
                    </div>


                </Toolbar>
            </AppBar>
        </div>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
