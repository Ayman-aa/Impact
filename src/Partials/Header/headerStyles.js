import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    header: {
        paddingTop: '1rem',
        boxShadow: 'none',
        backgroundColor: 'rgba(0 0 0 / 0%)',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: '7rem',
        paddingLeft: '6rem',
        [theme.breakpoints.down('sm')]: {
            paddingRight: '2rem',
            paddingLeft: '2rem',
        }
    },
    title: {
        textDecoration: 'none',
        fontFamily: 'impact',
        color: '#ffffff',
    },

    navLinks: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        minWidth: '212px',
        [theme.breakpoints.down('xs')]: { display: 'none' }
    },
    navlinksTitle: {
        textDecoration: 'none',
        color: '#ffffff',
    },
    cart: {
        color: '#ffffff',
    },
    menu: {
        [theme.breakpoints.up('sm')]: { display: 'none' }
    },
    menuStyle: {
        color: '#ffffff',
    },
    list: {
        marginTop: '30px'
    },
    listitem: {
        textDecoration: 'none',
        color: '#ffffff',
        display: 'block',
        marginTop: '30px',
    },
    closeBtn: {
        color: '#ffffff',
        marginLeft: '70px',
        position: 'absolute'
    },
    Drawer: {
        [theme.breakpoints.up('sm')]: { display: 'none' }
    },
}));