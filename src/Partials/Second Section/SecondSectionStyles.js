import { makeStyles } from "@material-ui/core";


export default makeStyles((theme) => ({
    container: {
        alignItems: 'center',
        padding: '9% 3% 0% 1%'
    },
    leftSide: {
        width: '40%',
        height: '50%',

    },
    rightSide: {
        width: '45%',
    },
    svg: {
        width: '95%'
    },
    heroTitle: {
        fontSize: '3rem',
        fontFamily: 'impact',
        color: '#ffffff',
        marginBottom: '1rem',
    },
    herodescription: {
        color: '#8F2DC1',
        paddingTop: '10px',
        paddingBottom: '10px',
    },
    exploreBtn: {
        color: '#8F2DC1',
        padding: '0px',
        display: 'block',
        width: 'fit-content',
    }
}))