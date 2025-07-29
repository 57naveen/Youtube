
import { configureStore } from "@reduxjs/toolkit"

import AppSlice from "./appSlice"
import searchSlice from "./searchSlice"
import chatSlice from "./chatSlice"


const AppStore = configureStore({
    reducer:{
        app:AppSlice,
        search:searchSlice,
        chat:chatSlice ,  
    }
})


export default AppStore;