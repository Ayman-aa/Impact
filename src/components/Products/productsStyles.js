import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: '#0F082C',
        padding: theme.spacing(3),
    },
    root: {
        flexGrow: 1,
    },
    grid: {
        backgroundColor: '#0F082C',
    },
}));