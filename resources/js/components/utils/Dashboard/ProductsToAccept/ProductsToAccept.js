import React, { Component } from "react";
import DashboardContainer from "./../../DashboardContainer/DashboardContainer";
import { MainContext } from "./../../../MainContext";
import Header from "./../utils/Header";
import axios from "axios";
import ProductsList from "./ProductsList/ProductsList";

class ProductsToAccept extends Component{
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            lastPageProducts: 0,
            path: "",
            currentPage: 0,
            count: 0,
            from: 0,

        };
    }

    getProducts = () => {
        return new Promise((resolve, reject) => {
            this.context.handleShowLoader(true);
            try {
                axios
                    .get(`${this.context.API_URL}products-to-accept/get`, {
                        headers: {
                            Authorization: `Bearer ${this.context.token}`
                        }
                    })
                    .then(response => {
                        const { data } = response;
                        console.log(data)
                        if(data.status === "OK"){
                            this.setState({
                                products: data.result.products.data,
                                lastPageProducts: data.result.products.last_page,
                                currentPage: 0,
                                path: data.result.products.path,
                                count: data.result.products.total,
                                from: data.result.products.from,

                            });
                        }
                            

                        resolve(response);
                    })
                    .catch(err => {
                        this.context.checkTokenExpiration(err.response.status);
                    });
            } catch (err) {
                console.log(err);
                reject(err);
            } finally {
                this.context.handleShowLoader(false);
            }
        });
    };

    handlePageClick = (pageData, searchData) => {
            return new Promise(async (resolve, reject) => {
                axios
                .get(`${this.context.API_URL}products-to-accept/get?page=${pageData.selected + 1}`, {
                    headers: {
                        Authorization: `Bearer ${this.context.token}`
                    }
                })
                    .then(response => {
                        const { data } = response;
                        console.log(data)

                        this.setState({
                            products: []
                        })

                        this.setState({
                            products: data.result.products.data,
                            currentPage: pageData.selected,
                            from: data.result.products.from
                        })
                    })
                    .catch(function (error) {
                        console.log(error);
                        return reject(error);
                    });
            });
    }


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
                    .post(`${this.context.API_URL}product-to-accept/update`, data, {
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

                        this.getProducts();

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

    componentDidMount = () => {
        this.context.handlAactiveMenuSection("ProductsToAccept");

        if (this.context.token) {
            this.getProducts();
        }
    };

    render() {
        const { products, from, lastPageProducts, currentPage } = this.state;
        return (
            <DashboardContainer>
                <Header text="Products to accept" />

                <ProductsList
                    products={products}
                    handleProductSave={this.handleProductSave}
                    handlePageClick={this.handlePageClick}
                    currentPage={currentPage}
                    lastPageProducts={lastPageProducts}
                    from={from}

                />
            </DashboardContainer>
        );
    }
}
ProductsToAccept.contextType = MainContext;
export default ProductsToAccept;
