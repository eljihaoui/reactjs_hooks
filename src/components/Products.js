import React, { useState, useEffect } from 'react'
import AddProduct from './AddProduct';

const Products = () => {
    const [ListProducts, setListProducts] = useState([
        // { id: 1, name: "IPhone", price: 300 },
        // { id: 2, name: "Samsung", price: 250 },
        // { id: 3, name: "Vivo", price: 260 },
        // { id: 4, name: "Nokia", price: 300 }

    ]);
    
    // initise un tableau ListProducts
    const addNewProdut = (newProduct) => {
        // newProduct.id= ListProducts.length+1;
        console.log(newProduct);
        setListProducts([newProduct, ...ListProducts]);
    }

    // useEffect : replace Mount ,Update, Unmont  events components
    useEffect(() => {
        console.log('ListProducts');
    }, [ListProducts]);
    // si je veux appliquer useEffect sur le state ListProducts au cas de changement ou chargement / desctruction

    useEffect(() => {    // useEffect:  gère le chargement, mise a jour et destruction du component
        console.log('Second param [] empty array');
    }, [])
    //si le deuxième paramètre est [] empty array , il sera appliquer au chargement tout courts
    const [counter, setCounter] = useState(0);

    const fctCounter = () => {
        setCounter(counter + 1);
    }

    useEffect(() => {    // useEffect:  gère le chargement, mise a jour et destruction du component
        console.log('Second not existe');
    })
    //si le deuxième paramètre est absent , il sera appliquer dans ce cas sur l'ensemble se state

   
    return (
        <div>
            <div className="text-center">
                <h4>{counter}</h4>
                <button onClick={fctCounter} type="button" className="btn btn-info">Counter</button>
            </div>
            <AddProduct addNewProdut={addNewProdut} />
            <h5>List Products</h5>
            <hr />
            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    {ListProducts.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Products;
