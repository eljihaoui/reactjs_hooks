import React, { useState } from 'react'
function AddProduct(props) {
    // function AddProduct({addNewProdut}) { lorque j'ai une seule propréité du component addProduct
    const [Product, setProduct] = useState({
        name: '',
        price: 0
    });
    const handleChange = (e) => {
        setProduct({
            ...Product,
            [e.target.name]: e.target.value
        })
    }
    const submitForm = (e) => {
        e.preventDefault();
        if (Product.name === '' || Product.price === 0) return;
        //addNewProdut(Product);
        let newProduct = {
            id: parseInt(Math.random() * 1000),
            ...Product
        }
        props.addNewProdut(newProduct);
    }
    return (
        <div>
            <h5>Add Product</h5>
            <hr />
            <form onSubmit={submitForm}>
                <div className="form-group">
                    <label htmlFor="name">Name :</label>
                    <input value={Product.name} onChange={handleChange} type="text" className="form-control" name="name" id="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price  :</label>
                    <input value={Product.price} onChange={handleChange} type="text" className="form-control" name="price" id="price" />
                </div>
                {JSON.stringify(Product)}
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </div>
    )
}

export default AddProduct
