import { createTheme } from '@mui/system';
import palette from '../../partials/variables.scss';

const theme = createTheme({
    palette: {
        background: {
            background: background,
        },
        text: {
            smoke: smoke,
            h1: highlight_p,
            h2: highlight_s,
        },
        main: {
            prime: main,
            second: secondary,
        },
    },
});

export default theme;