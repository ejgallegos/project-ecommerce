import React, { useState, useEffect } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));


const AlertProduct = () => {

    const classes = useStyles();

    const [state, setState] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });

    const { vertical, horizontal, open } = state;

    const handleClose = () => {
        setState({ ...state, open: false });
    };

    const [show, setShow] = useState(false);
    const [product, setProduct] = useState("");

    useEffect(() => {
        const lastProduct = sessionStorage.getItem("lastProduct")

        if (lastProduct) {
            setProduct(lastProduct);
            setShow(true);
            setState({ open: true, vertical: 'top', horizontal: 'center' });
        }

        return () => {
            sessionStorage.removeItem("lastProduct");
        }
    }, []);

    return (
        <div className={classes.root}>
            {show ?
                <>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical, horizontal }}>
                        <Alert onClose={handleClose} severity="warning">
                            Aprovecha para comprar el producto {product} antes de que se agote!
                        </Alert>
                    </Snackbar>
                </>
                : null}
        </div>
    );
}

export default AlertProduct
