import { configureStore } from '@reduxjs/toolkit'
import mainReducer from '../reducer/favorites'


const store = configureStore({
    reducer: mainReducer
})

export default store