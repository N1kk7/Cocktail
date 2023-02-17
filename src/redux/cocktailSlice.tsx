import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ICocktails } from "../models/cocktailsModel";
import { IDrinkByLetter } from "../models/firstLetterModel";




export const fetchDrinkByName: any = createAsyncThunk(

    'noneAlc/fetchNoneAlc',
     async function(props) {
        // console.log(props)
        const response: any = await axios.get<IDrinkByLetter>(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${props}`);
        
        // const data = response.data.drinks;

        console.log(response.data);
    //     return data

    }
)

export const fetchNoneAlc: any = createAsyncThunk(
    'noneAlc/fetchNoneAlc',
     async function() {
        const response: any = await axios.get<ICocktails>('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic');
        
        const data = response.data.drinks;

        console.log(response.data.drinks);
        return data

    }
)
export const fetchAlc: any = createAsyncThunk(
    'alc/fetchAlc',
     async function() {
        const response: any = await axios.get<ICocktails>('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic');
        
        const data = response.data.drinks;

        // console.log(response.data.drinks);
        return data

    }
)
export const fetchByLetter: any = createAsyncThunk(
    'byFirstLetter/fetchByFirstLetter',
     async function(letter) {
        // console.log(letter)
        const response: any = await axios.get<IDrinkByLetter>(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
        
        const data = response.data.drinks;

        // console.log(response);
        return data

    }
)




const cocktailSlice = createSlice({
    name: 'noneAlc',
    initialState:{
        drinkByLetter: [],
        drinkByName: [],
        noneAlc: [],
        alc: [],

        status: null as any,
        error: null as any,

    },
    reducers: {
        eraseData: (state, param) => {
            switch (param.payload) {
                case "Alco":
                    state.alc = []
                    break;
            
                case "NoneAlc":
                    state.noneAlc = []
                    break;
                case "FirstLetter":
                    state.drinkByLetter = []
                    break;
            }
        }
    },
    extraReducers: {
        [fetchNoneAlc.pending]: (state, action) => {
            state.status = 'loading';
            state.error = 'null'
        },
        [fetchNoneAlc.fulfilled]: (state, action) => {
            state.status = 'resolve'
            state.noneAlc = action.payload 
        },
        [fetchNoneAlc.rejected]: (state, action) => {

        },
        [fetchAlc.pending]: (state, action) => {
            state.status = 'loading';
            state.error = 'null'
        },
        [fetchAlc.fulfilled]: (state, action) => {
            state.status = 'resolve'
            state.alc = action.payload 
        },
        [fetchAlc.rejected]: (state, action) => {

        },
        [fetchByLetter.pending]: (state, action) => {
            state.status = 'loading';
            state.error = 'null'
        },
        [fetchByLetter.fulfilled]: (state, action) => {
            state.status = 'resolve'
            state.drinkByLetter = action.payload 
        },
        [fetchByLetter.rejected]: (state, action) => {

        },

    }
})
export const { eraseData } = cocktailSlice.actions;
export default cocktailSlice.reducer