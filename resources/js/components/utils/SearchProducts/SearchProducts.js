import React, { Component } from "react";
import Head from "./../../global/Head";
import Footer from "./../../global/Footer";
import Menu from "./../../global/Menu";
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
        return new Promise(async (resolve, reject) => {
            const { query } = this.state;
            axios
                .get(
                    `${
                        this.context.API_URL
                    }product/search/${query}?page=${pageData.selected + 1}`,
                    {
                        headers: {
                            Authorization: `Bearer ${this.context.token}`
                        }
                    }
                )
                .then(response => {
                    const { data } = response;

                    this.setState({
                        products: []
                    });

                    this.setState({
                        products: data.result.data,
                        currentPage: pageData.selected,
                        from: data.result.from
                    });

                    resolve(products);
                })
                .catch(function(error) {
                    return reject(error);
                });
        });
    };

    render() {
        const {
            products,
            showLoader,
            currentPage,
            lastPageProducts
        } = this.state;

        return (
            <div className="search-page__container">
                <Head title="Zdrowy Koszyk - Wyszukiwarka - darmowy skaner składu produktów" />

                <div className="page__main-section--container">
                    <div className="page__main-section--wrapper">
                        <Menu />

                        <div className="search-products__form--container">
                            <h1>Wyszukiwarka produktów</h1>
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
                    {products && products.length > 0 ? (
                        products.map((product, i) => {
                            return <SingleProduct key={i} product={product} />;
                        })
                    ) : showLoader && showLoader === true ? (
                        <p>loader</p>
                    ) : (
                        <p className="search-page__product-list--not-found">
                            Brak produktów dla wyszukiwanej frazy.
                        </p>
                    )}

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

                <Footer />
            </div>
        );
    }
}

SearchProducts.contextType = MainContext;
export default SearchProducts;
