import React, { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles';
import { Container } from '@material-ui/core';
import { getAllProducts } from '../../app/services/productsServices';

const useStyles = makeStyles(styles);

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'category',
        headerName: 'Category',
        width: 150,
        editable: true,
    },
    {
        field: 'title',
        headerName: 'Product Name',
        width: 400,
        editable: true,
    },
    {
        field: 'price',
        headerName: 'Price',
        type: 'number',
        width: 110,
        editable: true,
    },
];


const PurchaseView = () => {
    const classes = useStyles();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts().then((allProductsFromDb) => {
            setProducts(allProductsFromDb);
        });
    }, []);

    return (
        <Container>
            <div className={classes.root}>
                <DataGrid
                    rows={products}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                />

            </div>
        </Container>
    )
}

export default PurchaseView;
