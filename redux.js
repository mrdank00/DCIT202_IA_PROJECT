import { combineReducers } from "redux";

import cartReducer from "./reducers/cartReducer";
import totalReducer from "./reducers/cartReducer";

const reducers = combineReducers({
  cart: cartReducer,
  amount: totalReducer,
});

export default reducers;
