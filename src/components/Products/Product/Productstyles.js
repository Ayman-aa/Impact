import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',


    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        WebkitBackgroundSize: 'contain',

    },
    cardActions: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 0,
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },

}));