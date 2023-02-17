import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './themeSlice'
import cocktailReducer from "./cocktailSlice";
import thunk from "redux-thunk";


// export const store = configureStore({
//     reducer: themeReducer
// });
export default  configureStore({
    reducer: {
        theme: themeReducer,
        cocktail: cocktailReducer,
    },
    middleware:  [thunk]   

})

