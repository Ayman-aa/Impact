import { makeStyles, fade } from '@material-ui/core/styles';

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

    },
    shop: {
        textDecoration: 'none',
        color: '#0F082C',
    },
    cart: {
        color: '#0F082C',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));