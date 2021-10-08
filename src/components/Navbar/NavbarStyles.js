import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({

    appBar: {
        boxShadow: 'none',
        [theme.breakpoints.up('sm')]: {
            width: `calc(85% - ${drawerWidth}px)`,
        },
        backgroundColor: 'white',
        borderRadius: '7px',
        left: '50%',
        top: '0',
        transform: 'translateX(-50%)',

    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingRight: 10,
        paddingLeft: 10,
    },
    title: {
        alignItems: 'center',
        display: 'flex',
        textDecoration: 'none',
        fontFamily: 'impact',
        color: '#0F082C',
        maxWidth: '50%',
    },
    image: {
        marginRight: '10px',
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    grow: {
        flexGrow: .5,
    },
    button: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        fontFamily: 'Roboto',
        color: '#0F082C',
        minWidth: '14%',
        paddingRight: '5px',
        [theme.breakpoints.down('sm')]: { display: 'none' }

    },
    shop: {
        textDecoration: 'none',
        color: '#0F082C',
    },
    cart: {
        marginTop: '5px',
        color: '#0F082C',
        [theme.breakpoints.down('sm')]: { color: '#ffffff', }
    },
    menu: {
        [theme.breakpoints.up('sm')]: { display: 'none' }
    },
    menuStyle: {
        color: '#0F082C',
    },
    list: {
        marginTop: '20px'
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