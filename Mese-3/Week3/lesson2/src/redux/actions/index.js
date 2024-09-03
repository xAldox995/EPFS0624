export const ADD_JOB = 'ADD_JOB'
export const REMOVE_JOB = 'REMOVE_JOB'
export const GET_JOBS = 'GET_JOBS'


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

export const getJobsAction = (query) => {
    return (dispatch, getState) => {
        const baseEndpoint =
            "https://strive-benchmark.herokuapp.com/api/jobs?search=";
        fetch(baseEndpoint + query + '&limit=20')
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('errore nel recupero dei lavori')
                }
            })
            .then((arrayOfJobs) => {
                dispatch({
                    type: GET_JOBS,
                    payload: arrayOfJobs,
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
}