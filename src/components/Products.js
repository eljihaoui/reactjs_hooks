import React  from 'react'
import {useSelector} from 'react-redux'
const Products = () => {
    const ListProducts = useSelector((state)=> state.MyProducts.products);
    return (
        <div className="my-3">
            <h6 className="alert alert-info myTitle">List Products</h6>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    { ListProducts.map(product => (
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
