import React, { useState, useEffect } from 'react';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';

import db from "../../app/db/db";
import { useLiveQuery } from "dexie-react-hooks";

const ShoppingCart = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);

    const [productsCart, setProductsCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const getTotalPrice = () => {
        const total = productsCart?.reduce((totalPrice, currentProduct) => {
            return totalPrice + currentProduct.price;
        }, 0);
        setTotalPrice(total);
    };

    useLiveQuery(async () => {
        const productsDB = await db.cart.toArray();
        setProductsCart(productsDB);
    }, []);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const menuId = 'primary-search-account-menu';

    useEffect(() => {
        if (productsCart.length > 0) {
            getTotalPrice();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productsCart]);

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            {productsCart?.map((product) => {
                return <MenuItem key={product.id} onClick={handleMenuClose}>{product.title}</MenuItem>
            })}
            <Divider />
            <MenuItem>Total: ${totalPrice}</MenuItem>
        </Menu>
    );

    return (
        <>
            <IconButton color="inherit">
                <Badge badgeContent={productsCart.length}
                    color="secondary"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                >
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
            {renderMenu}
        </>
    )
}

export default ShoppingCart
