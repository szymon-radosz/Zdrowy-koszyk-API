import React from "react";
import ProductsListRow from "./ProductsListRow/ProductsListRow";
import ReactPaginate from 'react-paginate';

const ProductsList = ({
    products,
    handleProductSave,
    handleProductRemove,
    handlePageClick,
    currentPage,
    lastPageProducts,
    from
}) => {
    return (
        <>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Barcode</th>
                            <th scope="col">Details</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products &&
                            products.map((product, i) => {
                                return (
                                    <ProductsListRow
                                        key={i}
                                        product={product}
                                        i={i}
                                        handleProductSave={
                                            handleProductSave
                                        }
                                        handleProductRemove={
                                            handleProductRemove
                                        }
                                    />
                                );
                            })}
                    </tbody>
                </table>

                <nav aria-label="Page navigation example">
                    <ReactPaginate
                        previousLabel={'prev'}
                        nextLabel={'next'}
                        forcePage={currentPage}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={lastPageProducts}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={2}
                        onPageChange={handlePageClick}
                        containerClassName={'pagination'} /* as this work same as bootstrap class */
                        subContainerClassName={'pages pagination'} /* as this work same as bootstrap class */
                        activeClassName={'active'}
                    />
                </nav>

            </div>
        </>
    );
};

export default ProductsList;
