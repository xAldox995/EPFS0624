export const ADD_JOB = 'ADD_JOB'
export const REMOVE_JOB = 'REMOVE_JOB'


export const addFavoriteJobAction = (data) => {
    return {
        type: ADD_JOB,
        payload: data
    }
}

export const removeFavoriteJobAction = (jobData) => {
    return {
        type: REMOVE_JOB,
        payload: jobData._id 
    }
}