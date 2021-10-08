import { makeStyles } from "@material-ui/core";


export default makeStyles((theme) => ({
    container: {
        alignItems: 'center',
        padding: '6% 0% 0% 7.2%',
        [theme.breakpoints.down('xs')]: {
            justify: 'center',
        }
    },
    leftSide: {
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            minWidth: '80%',
        }
    },
    rightSide: {
        width: '40%',
        height: '50%',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
    heroTitle: {
        fontSize: '3rem',
        fontFamily: 'impact',
        color: '#ffffff',
        marginBottom: '1rem',
    },
    herodescription: {
        color: '#ffffff',
        paddingTop: '10px',
        paddingBottom: '10px',
    },
    herodescription1: {
        color: '#8F2DC1',
        paddingBottom: '10px',

    },
    svg: {
        width: '95%'
    },
    buttons: {
        marginTop: '1rem',
    },
    buttonE: {
        backgroundColor: '#8F2DC1',
        marginRight: '2rem',
        color: '#ffffff',
        '&:hover': {
            backgroundColor: '#642685',
        },

    },
    buttonC: {
        marginRight: '2rem',
        color: '#8F2DC1',
        border: '1px solid #8F2DC1',
        '&:hover': {
            border: '1px solid #642685',
            color: '#642685',
        },

    },

}));