import React, { useContext, useState } from "react";
import { MainContext } from "./../../../MainContext";

const SingleIngredient = singleIngredient => {
    const context = useContext(MainContext);
    const [showDescription, setShowDescription] = useState(false);
    const [show, setShow] = useState(true);
    const [fadeOut, setFadeOut] = useState(true);

    const toggle = () => {
        setFadeOut(!fadeOut);
        if (show === false) {
            setTimeout(() => {
                setShow(!show);
            }, 1000);
        } else {
            setShow(!show);
        }
    };

    return (
        <div>
            <div className="search-page__single-list-item--container">
                <div className="search-page__single-list-item--left-container">
                    <p className="search-page__single-list-item--name">
                        {singleIngredient &&
                            singleIngredient.ingredient &&
                            singleIngredient.ingredient.name}
                    </p>
                    <p className="search-page__single-list-item--barcode">
                        <span>Typ: </span>{" "}
                        {singleIngredient &&
                        singleIngredient.ingredient &&
                        singleIngredient.ingredient.type &&
                        singleIngredient.ingredient.type === "bad" ? (
                            <span className="search-page__single-list-item--red">
                                szkodliwy
                            </span>
                        ) : singleIngredient.ingredient.type === "not bad" ? (
                            <span className="search-page__single-list-item--yellow">
                                niekorzystny
                            </span>
                        ) : (
                            singleIngredient.ingredient.type === "good" && (
                                <span className="search-page__single-list-item--green">
                                    zdrowy
                                </span>
                            )
                        )}
                    </p>
                </div>
                <div className="search-page__single-list-item--right-container">
                    <p
                        className="search-page__single-list-item--details"
                        onClick={() => {
                            setShowDescription(!showDescription);
                            toggle();
                        }}
                    >
                        Szczegóły
                    </p>
                </div>
            </div>

            {showDescription && (
                <div
                    className={`ingredient-description__container ${
                        fadeOut ? "fadeOut" : "fade"
                    }`}
                >
                    {singleIngredient &&
                        singleIngredient.ingredient &&
                        singleIngredient.ingredient.description && (
                            <p className="ingredient-description__description--text">
                                {singleIngredient.ingredient.description}
                            </p>
                        )}

                    <div className="ingredient-description__description--wiki">
                        {singleIngredient &&
                            singleIngredient.ingredient &&
                            singleIngredient.ingredient.wiki_url && (
                                <a
                                    href={singleIngredient.ingredient.wiki_url}
                                    target="_blank"
                                    className="ingredient-description__description--url"
                                    rel="noopener noreferrer"
                                >
                                    {`Źródło: ${singleIngredient.ingredient.wiki_title}`}
                                </a>
                            )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SingleIngredient;
