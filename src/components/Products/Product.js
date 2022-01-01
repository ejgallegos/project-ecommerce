import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Popover from '@material-ui/core/Popover';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import StarIcon from '@material-ui/icons/Star';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles';

import { saveLastInterestProduct } from "../../app/services/storageServices";
import db from "../../app/db/db";

const useStyles = makeStyles(styles);

const Product = ({ item }) => {
    const classes = useStyles();
    const { image, price, description, title, category } = item;
    const { rate } = item.rating;

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);

        saveLastInterestProduct(title);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleAddShoppingCart = ({ title, price, category }) => {
        db.cart.add({
            title: title,
            price: price,
            category: category
        })
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <CssBaseline />
            <Card className={classes.card}>
                <Chip size="small" label={category} className={classes.category} color="primary" />
                <CardMedia
                    className={classes.cardMedia}
                    image={image}
                    title={title}
                />
                <CardContent className={classes.cardContent}>
                    <Typography variant="h5">
                        $ {price}
                    </Typography>
                    <Typography gutterBottom variant="body1">
                        {title}
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton aria-label="cart">
                        <Badge color="secondary" badgeContent={rate} >
                            <StarIcon />
                        </Badge>
                    </IconButton>
                    <IconButton aria-describedby={id} variant="contained" onClick={handleClick}>
                        <SearchIcon />
                    </IconButton>
                    <IconButton style={{ marginLeft: 100 }} onClick={() => handleAddShoppingCart(item)}>
                        <AddShoppingCartIcon />
                    </IconButton>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        <Typography className={classes.typography}>{description}</Typography>
                    </Popover>
                </CardActions>
            </Card>
        </>
    )
}

export default Product;