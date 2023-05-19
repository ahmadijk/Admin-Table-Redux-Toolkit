import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "User" ,
    initialState: [] ,
    reducers : {
    
        addUser(state,action){
            state.push(action.payload);
        },
        removeUser(state,action){
            state.splice(action.payload,1);
        },
        deleteallUser(state,action){
            return state = []
        },

    }
})
// console.log(userSlice.actions)
export default  userSlice.reducer;
export const {addUser ,removeUser , deleteallUser} = userSlice.actions ;