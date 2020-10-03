import React from 'react'
import {useSelector} from 'react-redux'
function Menu(props) {
    const count = useSelector(state => state.MyProducts.products.length);
    const { title } = props;
    return (
        <div>
            <nav className="navbar navbar-dark bg-primary">
                <a className="navbar-brand" href="w">{title} - count : {count}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="w">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="w">Link</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Menu;
