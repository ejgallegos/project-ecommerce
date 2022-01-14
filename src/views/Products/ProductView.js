import React, { useEffect, useState } from 'react'
import { getProductById } from '../../app/services/productsServices';

const ProductView = ({ match }) => {

    const [productDetail, setProductDetail] = useState(null);

    useEffect(() => {
        const { id } = match.params
        getProductById(id)
            .then((productFromDB) => setProductDetail(productFromDB))
            .catch((err) => console.log(err));

    }, [match]);

    return (
        <>
            <h1 style={{ marginTop: 100 }}>
                {productDetail && JSON.stringify(productDetail)}
            </h1>
        </>
    )
};

export default ProductView;
