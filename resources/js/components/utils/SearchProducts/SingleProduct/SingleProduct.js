import React, { useContext } from "react";
import { MainContext } from "./../../../MainContext";

const SingleProduct = singleProduct => {
    const context = useContext(MainContext);

    return (
        <div className="search-page__single-list-item--container">
            <div className="search-page__single-list-item--left-container">
                <p className="search-page__single-list-item--name">
                    {singleProduct &&
                        singleProduct.product &&
                        singleProduct.product.name}
                </p>
                <p className="search-page__single-list-item--barcode">
                    {`Kod kreskowy: ${singleProduct &&
                        singleProduct.product &&
                        singleProduct.product.barcode}`}
                </p>
            </div>
            <div className="search-page__single-list-item--right-container">
                <p
                    className="search-page__single-list-item--details"
                    onClick={() =>
                        context.handleChangePath(
                            `produkt/${singleProduct &&
                                singleProduct.product &&
                                singleProduct.product.barcode}`
                        )
                    }
                >
                    Szczegóły
                </p>
            </div>
        </div>
    );
};

export default SingleProduct;
