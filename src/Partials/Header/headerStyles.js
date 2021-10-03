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
    },
    navlinksTitle: {
        textDecoration: 'none',
        color: '#ffffff',
    },
    cart: {
        color: '#ffffff',
    },
}));