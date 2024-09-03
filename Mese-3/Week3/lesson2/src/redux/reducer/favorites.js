import { ADD_JOB, REMOVE_JOB } from "../actions"

const initialState = {
    favoritesJobs: []
}

const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_JOB:
            return {
                ...state,
                favoritesJobs: [...state.favoritesJobs, action.payload]
            }

        case REMOVE_JOB:
            return {
                ...state,
                favoritesJobs: state.favoritesJobs.filter((job) => job._id !== action.payload)
            }



        default: {
            return state
        }

    }
}

export default favoritesReducer