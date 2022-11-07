import { Circles } from 'react-loader-spinner';

function Loader(props) {
    const { isLoading, color, styles, classes } = props;
    return (
        <Circles
            height="200"
            width="150"
            color={color}
            ariaLabel="circles-loading"
            wrapperStyle={styles}
            wrapperClass={classes}
            visible={isLoading}
        />
    )
};

export default Loader;