import React, { useState } from "react";

const ProductsListRow = ({
    product,
    i,
    handleProductSave,
    handleProductRemove
}) => {
    const [name, setName] = useState(product.name);
    const [barcode, setBarcode] = useState(product.barcode);
    const [details, setDetails] = useState(product.details);

    return (
        <tr className="tranlation__row">
            <th scope="row">{product.id}</th>
            <td>
                    <div className="form-group">
                        <textarea
                            type="text"
                            className="form-control custom-textarea"
                            placeholder="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
            </td>
            <td>
                <div className="form-group">
                    <textarea
                        type="text"
                        className="form-control custom-textarea"
                        placeholder="barcode"
                        value={barcode}
                        disabled={true}
                    />
                </div>
            </td>
            <td>
                <div className="form-group">
                    <textarea
                        type="text"
                        className="form-control custom-textarea"
                        placeholder="Details"
                        value={details}
                        onChange={e => setDetails(e.target.value)}
                    />
                </div>
            </td>
            <td>
                <button
                    type="button"
                    onClick={() =>
                        handleProductSave(
                            product.id,
                            name,
                            barcode,
                            details
                        )
                    }
                    className="btn blue-btn"
                >
                    Save
                </button>
            </td>
        </tr>
    );
};

export default ProductsListRow;
