import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:1,value:3},
    {id:2,value:0},
    {id:3,value:10},
    {id:4,value:6},
];

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        handeleReset : (state)=>{
            state.map((c)=>c.value = 0); 
        },
        handleIncrement: (state,action) => {
            state.map((c)=>c.id === action.payload ?c.value+=1:c);
        },
        handleDecrement: (state,action) => {
            state.map((c)=>c.id === action.payload ?c.value-=1:c);
        },
        handleDelete : (state,action)=>{
            return state.filter((c)=>c.id !== action.payload);
            
        }
    },
});

// export actions
export const  { handleIncrement, handleDecrement,handeleReset,handleDelete } = counterSlice.actions;

export default counterSlice