import React from "react";

const SingleProduct = singleProduct => {
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
                <p className="search-page__single-list-item--details">
                    Szczegóły
                </p>
            </div>
        </div>
    );
};

export default SingleProduct;
