import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme : true as boolean,
        stateAlc: true,
        stateNoneAlc: true,
        stateFirstLetter: false,
        // stateLikeBtn: false,
        favoriteDrinks: [],
        burgerMenu: false,
        // detailDrink: [],
    },
    reducers: {
        // getDetailDrink: (state, action) => {
        //     console.log(action)
        //     state.detailDrink = [];
        //     state.detailDrink = state.detailDrink.concat(...action.payload);
        // },

        
        likeActive: (state, action) => {
            state.favoriteDrinks = state.favoriteDrinks.concat(action.payload);
            // state.stateLikeBtn = true
        },
        likeDisable: (state, action) => {
            console.log(action.payload)
            state.favoriteDrinks = state.favoriteDrinks.filter((elem: any) => elem.idDrink !== action.payload)

            // state.stateLikeBtn = false
        },
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
        },
        burgerBtn: (state) => {
            // console.log('ololo')
            state.burgerMenu = !state.burgerMenu
        }

    }

})

export const {dayTheme, nightTheme, btnActive, btnDisable, likeActive, likeDisable, burgerBtn} = themeSlice.actions
export default themeSlice.reducer;