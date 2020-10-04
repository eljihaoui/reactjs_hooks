import React, { useState } from 'react'
import { addProduct } from '../actions/productActions';
import { useDispatch } from "react-redux"
function AddProduct() {

    const dispatch = useDispatch();
    const [product, setProduct] = useState({
        id: 0,
        name: "",
        price: 0
    });
    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitForm = (e) => {
        e.preventDefault();
        if(product.name==="" || product.price===0) return;
        product.id=parseInt(Math.random()*1000);
        dispatch(addProduct(product));
    }
    return (
        <div className="my-3">
            <h6 className="alert alert-info myTitle" >New Product</h6>
            <form onSubmit={onSubmitForm}>
                <div className="form-group">
                    <label htmlFor="name">Name :</label>
                    <input value={product.name} onChange={handleChange} type="text" className="form-control" name="name" id="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price  :</label>
                    <input value={product.price} onChange={handleChange} type="text" className="form-control" name="price" id="price" />
                </div>
                {JSON.stringify(product)}
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </div>
    )
}

export default AddProduct
