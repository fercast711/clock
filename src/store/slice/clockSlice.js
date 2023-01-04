import { createSlice } from "@reduxjs/toolkit";

const clockSlice = createSlice({
    name: "clock",
    initialState:{
        valueLen: 25,
        valueBre: 5
    },
    reducers:{
        setValueLenSuma: (state)=>{
            state.valueLen += 1
        },
        setValueLenResta: (state)=>{
            if(state.valueLen > 0)state.valueLen -= 1
        },
        setValueBreSuma: (state)=>{
            state.valueBre += 1
        },
        setValueBreResta: (state)=>{
            if(state.valueBre > 0)state.valueBre -= 1
        }
    }
})


export const {setValueLenResta, setValueLenSuma, setValueBreResta, setValueBreSuma} = clockSlice.actions
export default clockSlice.reducer