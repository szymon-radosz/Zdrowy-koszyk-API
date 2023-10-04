import React, { Component } from "react";
// import Head from "./../../global/Head";
// import Footer from "./../../global/Footer";
// import Menu from "./../../global/Menu";
import { MainContext } from "./../../MainContext";
import SingleProduct from "./SingleProduct/SingleProduct";
import ReactPaginate from "react-paginate";
import axios from "axios";

class SearchProducts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            lastPageProducts: 0,
            path: "",
            currentPage: 0,
            count: 0,
            from: 0,
            query: "",
            showLoader: false
        };
    }

    componentDidMount = () => {
        this.queryInput.focus();
    };

    handleProductSearch = text => {
        return new Promise((resolve, reject) => {
            if (text.length > 3) {
                this.setState({ query: text });

                try {
                    this.setState({ showLoader: true });
                    axios
                        .get(`${this.context.API_URL}product/search/${text}`)
                        .then(response => {
                            const { data } = response;
                            if (data.status === "OK") {
                                this.setState({
                                    products: data.result.data,
                                    lastPageProducts: data.result.last_page,
                                    currentPage: 0,
                                    path: data.result.path,
                                    count: data.result.total,
                                    from: data.result.from
                                });
                            }

                            resolve(response);
                        });
                } catch (err) {
                    console.log(err);
                    reject(err);
                } finally {
                    this.setState({ showLoader: false });
                }
            } else {
                this.setState({
                    products: []
                });
            }
        });
    };

    handlePageClick = (pageData, searchData) => {
        // console.log(["download app mate", this?.context]);

        this?.context?.handleShowAlert(
            "Pobierz aplikację na swój telefon i skanuj bez limitów",
            "success"
        );

        this.setState({
            products: [],
            currentPage: 1,
            query: ""
        });
        // return new Promise(async (resolve, reject) => {
        //     const { query } = this.state;
        //     axios
        //         .get(
        //             `${
        //                 this.context.API_URL
        //             }product/search/${query}?page=${pageData.selected + 1}`,
        //             {
        //                 headers: {
        //                     Authorization: `Bearer ${this.context.token}`
        //                 }
        //             }
        //         )
        //         .then(response => {
        //             const { data } = response;

        //             this.setState({
        //                 products: []
        //             });

        //             this.setState({
        //                 products: data.result.data,
        //                 currentPage: pageData.selected,
        //                 from: data.result.from
        //             });

        //             resolve(products);
        //         })
        //         .catch(function(error) {
        //             return reject(error);
        //         });
        // });
    };

    render() {
        const {
            products,
            showLoader,
            currentPage,
            lastPageProducts
        } = this.state;

        return (
            <div className="search-page__container" id="searchId">
                {/* <Head title="zielonyparagon.pl - Darmowy skaner składu produktów" />

                <Menu /> */}

                <div className="page__main-section--container page__main-section--container-search">
                    <div className="page__main-section--wrapper">
                        <div className="search-products__form--container">
                            <div class="homepage__section-header__container">
                                <h4>Szukaj produktów</h4>
                                <div class="homepage__section-header__divider"></div>
                            </div>
                            <input
                                type="string"
                                onChange={e =>
                                    this.handleProductSearch(e.target.value)
                                }
                                placeholder="Wpisz nazwę lub kod kreskowy"
                                ref={input => {
                                    this.queryInput = input;
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className="search-page__product-list--container">
                    {products && products.length > 0
                        ? products.map((product, i) => {
                              return (
                                  <SingleProduct key={i} product={product} />
                              );
                          })
                        : showLoader && showLoader === true && <p>loader</p>}

                    {products && products.length > 0 && (
                        <nav
                            aria-label="Page navigation example"
                            className="search-nav"
                        >
                            <ReactPaginate
                                previousLabel={"prev"}
                                nextLabel={"next"}
                                forcePage={currentPage}
                                breakLabel={"..."}
                                breakClassName={"break-me"}
                                pageCount={lastPageProducts}
                                marginPagesDisplayed={1}
                                pageRangeDisplayed={2}
                                onPageChange={this.handlePageClick}
                                containerClassName={"pagination"}
                                subContainerClassName={"pages pagination"}
                                activeClassName={"active"}
                            />
                        </nav>
                    )}
                </div>

                {/* <Footer /> */}
            </div>
        );
    }
}

SearchProducts.contextType = MainContext;
export default SearchProducts;
