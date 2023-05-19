import {configureStore} from "@reduxjs/toolkit"
import  userSlice  from "./Slices/Userslice"

const store = configureStore({
    reducer : {
        name : userSlice ,
    }
})
export default store ;