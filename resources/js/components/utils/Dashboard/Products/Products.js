import React, { Component } from "react";
import DashboardContainer from "./../../DashboardContainer/DashboardContainer";
import { MainContext } from "./../../../MainContext";
import Header from "./../utils/Header";
import axios from "axios";
import ProductsList from "./ProductsList/ProductsList";
import AddProduct from "./AddProduct/AddProduct";

class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            lastPageProducts: 0,
            path: "",
            currentPage: 0,
            count: 0,
            from: 0
        };
    }

    getProducts = () => {
        return new Promise((resolve, reject) => {
            this.context.handleShowLoader(true);
            try {
                axios
                    .get(`${this.context.API_URL}get-products`, {
                        headers: {
                            Authorization: `Bearer ${this.context.token}`
                        }
                    })
                    .then(response => {
                        const { data } = response;
                        //console.log(data)
                        if (data.status === "OK") {
                            this.setState({
                                products: data.result.products.data,
                                lastPageProducts:
                                    data.result.products.last_page,
                                currentPage: 0,
                                path: data.result.products.path,
                                count: data.result.products.total,
                                from: data.result.products.from
                            });
                        }

                        resolve(response);
                    })
                    .catch(err => {
                        this.context.checkTokenExpiration(err.response.status);
                    });
            } catch (err) {
                //console.log(err);
                reject(err);
            } finally {
                this.context.handleShowLoader(false);
            }
        });
    };

    handlePageClick = (pageData, searchData) => {
        return new Promise(async (resolve, reject) => {
            axios
                .get(
                    `${
                        this.context.API_URL
                    }get-products?page=${pageData.selected + 1}`,
                    {
                        headers: {
                            Authorization: `Bearer ${this.context.token}`
                        }
                    }
                )
                .then(response => {
                    const { data } = response;
                    //console.log(data)

                    this.setState({
                        products: []
                    });

                    this.setState({
                        products: data.result.products.data,
                        currentPage: pageData.selected,
                        from: data.result.products.from
                    });
                })
                .catch(function(error) {
                    //console.log(error);
                    return reject(error);
                });
        });
    };

    handleProductSave = (id, name, barcode, details) => {
        this.context.handleShowLoader(true);
        return new Promise(async (resolve, reject) => {
            try {
                let data = JSON.stringify({
                    id: id,
                    name: name,
                    barcode: barcode,
                    details: details
                });

                axios
                    .post(`${this.context.API_URL}update-product`, data, {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${this.context.token}`
                        }
                    })
                    .then(response => {
                        this.context.handleShowAlert(
                            "Successfully updated product",
                            "success"
                        );

                        resolve(response);
                    })
                    .catch(err => {
                        this.context.checkTokenExpiration(err.response.status);
                    });
            } catch (err) {
                this.context.handleShowAlert(
                    "Cannot update category",
                    "danger"
                );
                reject(err);
            } finally {
                this.context.handleShowLoader(false);
            }
        });
    };

    handleProductRemove = id => {
        this.context.handleShowLoader(true);
        return new Promise(async (resolve, reject) => {
            try {
                let data = JSON.stringify({
                    id: id
                });

                axios
                    .post(`${this.context.API_URL}remove-product`, data, {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${this.context.token}`
                        }
                    })
                    .then(response => {
                        this.getProducts();

                        this.context.handleShowAlert(
                            "Successfully removed product",
                            "success"
                        );

                        resolve(response);
                    })
                    .catch(err => {
                        this.context.checkTokenExpiration(err.response.status);
                    });
            } catch (err) {
                //console.log(err);
                this.context.handleShowAlert("Cannot remove product", "danger");
                reject(err);
            } finally {
                this.context.handleShowLoader(false);
            }
        });
    };

    handleAddNewProduct = name => {
        if (!name) {
            this.context.handleShowAlert("Please, provide name", "danger");
        } else {
            this.context.handleShowLoader(true);
            return new Promise(async (resolve, reject) => {
                try {
                    let data = JSON.stringify({
                        name: name
                    });

                    axios
                        .post(`${this.context.API_URL}add-product`, data, {
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${this.context.token}`
                            }
                        })
                        .then(response => {
                            this.getProducts();

                            this.context.handleShowAlert(
                                "Successfully added new product",
                                "success"
                            );

                            resolve(response);
                        })
                        .catch(err => {
                            this.context.checkTokenExpiration(
                                err.response.status
                            );
                        });
                } catch (err) {
                    //console.log(err);
                    this.context.handleShowAlert(
                        "Cannot added new product",
                        "danger"
                    );
                    reject(err);
                } finally {
                    this.context.handleShowLoader(false);
                }
            });
        }
    };

    componentDidMount = () => {
        this.context.handlAactiveMenuSection("Products");

        if (this.context.token) {
            this.getProducts();
        }
    };

    render() {
        const { products, from, lastPageProducts, currentPage } = this.state;
        return (
            <DashboardContainer>
                <Header text="Products" />

                <AddProduct handleAddNewProduct={this.handleAddNewProduct} />

                <ProductsList
                    products={products}
                    handleProductSave={this.handleProductSave}
                    handleProductRemove={this.handleProductRemove}
                    handlePageClick={this.handlePageClick}
                    currentPage={currentPage}
                    lastPageProducts={lastPageProducts}
                    from={from}
                />
            </DashboardContainer>
        );
    }
}
Products.contextType = MainContext;
export default Products;
