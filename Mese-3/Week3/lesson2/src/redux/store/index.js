import { combineReducers, configureStore } from '@reduxjs/toolkit'
import favoritesReducer from '../reducer/favorites'
import jobsReducer from '../reducer/jobs'

const allInOneReducer = combineReducers ({
    favorites: favoritesReducer,
    queryJobs: jobsReducer
})


const store = configureStore({
    reducer: allInOneReducer
})

export default store