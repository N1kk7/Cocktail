import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme : true,
        stateAlc: true,
        stateNoneAlc: true,
        stateFirstLetter: false
    },
    reducers: {
        btnActive: (state, param) => {
            switch (param.payload) {
                case "Alco":
                    state.stateAlc = true
                    break;
            
                case "NoneAlc":
                    state.stateNoneAlc = true

                    break;
                case "FirstLetter":
                    state.stateFirstLetter = true

                    break;
            }

        },
        btnDisable: (state, param) => {
            switch (param.payload) {
                case "Alco":
                    state.stateAlc = false
                    break;
            
                case "NoneAlc":
                    state.stateNoneAlc = false

                    break;
                case "FirstLetter":
                    state.stateFirstLetter = false

                    break;
            }
        },
        dayTheme: (state) => {
            state.theme = true
        },
        nightTheme: (state) => {
            state.theme = false
        }

    }

})

export const {dayTheme, nightTheme, btnActive, btnDisable} = themeSlice.actions
export default themeSlice.reducer;

// const initialState = {
//     theme: true
// };

// export const themeReducer = (state = initialState, action: any) => {
//     switch(action.type) {
//         case '__nightTheme__' : {
//             return {...state, theme: state.theme = false}
//         }
//         case '__dayTheme__' : {
//             return {...state, theme: state.theme = true}
//         }
//         default: {
//             return state;
//         }
//     }
// }