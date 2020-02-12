import React, { useState } from "react";

const AddProduct = ({ handleAddNewTranslation }) => {
    const [name, setName] = useState("");

    return (
        <div className="user-search-box__container">
            <form
                onSubmit={e => {
                    e.preventDefault();
                    handleAddNewProduct(name);
                }}
            >
                <div className="form-group">
                    <input
                        type="string"
                        className="form-control"
                        id="name"
                        placeholder="Name..."
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <button
                    type="button"
                    onClick={() => handleAddNewProduct(name)}
                    className="btn blue-btn"
                >
                    Add New Product
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
