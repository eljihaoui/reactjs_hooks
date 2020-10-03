import productReducer from './productReducer';
import cartReducer from './cartReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    MyProducts : productReducer,
    MyCarts : cartReducer
})
//MyProducts lien vers  productReducer
// MyCarts lien vers cartReducer
export default rootReducer;