const initialState = {
    favorites: {
        jobOffers: []
    }
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_JOB': return {
            ...state,
            favorites : {
                ... state.favorites,
                jobOffers:[...state.favorites.jobOffers, action.payload],
            },
        }

        case 'REMOVE_JOB': return {
            ... state,
            favorites : {
                ...state.favorites,
                jobOffers: state.favorites.jobOffers.filter((book,i) => i !== action.payload),
            }
        }



        default: {
            return state
        }

    }
}

export default mainReducer