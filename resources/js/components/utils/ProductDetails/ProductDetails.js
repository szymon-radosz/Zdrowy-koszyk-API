import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "./../../MainContext";
import Head from "./../../global/Head";
import Footer from "./../../global/Footer";
import Menu from "./../../global/Menu";
import axios from "axios";
import SingleIngredient from "./SingleIngredient/SingleIngredient";

const ProductDetails = () => {
    const context = useContext(MainContext);

    const [name, setName] = useState("");
    const [details, setDetails] = useState("");
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        //console.log(window.location.pathname.split("/").pop());

        let barcode = window.location.pathname.split("/").pop();
        handleProductFind(barcode);
    }, []);

    const handleProductFind = barcode => {
        return new Promise(async (resolve, reject) => {
            axios
                .get(`${context.API_URL}product/find/${barcode}`)
                .then(response => {
                    //console.log(data);

                    if (response.data.status === "OK") {
                        const {
                            name,
                            details,
                            ingredients
                        } = response.data.result;
                        //console.log(["response", response.data.result]);

                        setName(name);
                        setDetails(details);
                        setIngredients(ingredients);
                    }

                    resolve(name);
                })
                .catch(function(error) {
                    return reject(error);
                });
        });
    };

    return (
        <div className="search-page__container">
            <Head title="Zdrowy Koszyk - Szczegóły produktu - darmowy skaner składu produktów" />

            <div className="page__main-section--container">
                <div className="page__main-section--wrapper">
                    <Menu />

                    <div className="search-products__form--container">
                        <h1>{name && name}</h1>
                    </div>
                </div>
            </div>

            <div className="product-details--container">
                <p className="product-details--details--text">
                    {details && details}
                </p>

                {ingredients && ingredients.length > 0 ? (
                    ingredients.map((ingredient, i) => {
                        return (
                            <SingleIngredient key={i} ingredient={ingredient} />
                        );
                    })
                ) : (
                    <p className="search-page__product-list--not-found">
                        Brak opisu poszczególnych składników.
                    </p>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default ProductDetails;
