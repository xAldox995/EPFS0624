export const ADD_JOB = 'ADD_JOB'


export const addFavoriteJobAction = (data) => {
    return {
        type: ADD_JOB,
        payload: data
    }
}