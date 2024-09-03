import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from '../reducer/favorites'


const store = configureStore({
    reducer: favoritesReducer
})

export default store