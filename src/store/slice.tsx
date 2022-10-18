import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetcherGlobal:any =createAsyncThunk ("covid/globaldata",async () => {
const data = await fetch("https://covid19.mathdro.id/api")
const result = await data.json()
console.log(result)
return result
})

export const fetcherCountry:any=createAsyncThunk ("covid/countrydata",async (country) => {
    const data = await fetch(`https://covid19.mathdro.id/api/countries/${country}`)
    const result = await data.json()
    console.log(result)
    return result
    })


export const countryNames:any=createAsyncThunk ("covid/countrynames",async () => {
    const data = await fetch(`https://covid19.mathdro.id/api/countries`)
    const result = await data.json()
    return result
    })

export interface initialTypes {
    global:string,
    country:string,
    countries:any
}

const initialState:initialTypes= {
        global:"",
        country:"",
        countries:""
    }

export const covidSlice = createSlice({
    name:"covid",
    initialState,
    reducers:{
        
    },
    extraReducers:{
        [fetcherGlobal.fulfilled]:(state,action)=>{
            state.global=action.payload
        },
        [countryNames.fulfilled]:(state,action)=>{
            state.countries=action.payload
        },
        [fetcherCountry.fulfilled]:(state,action)=>{
            state.country=action.payload
        }
    }
})

export default covidSlice.reducer