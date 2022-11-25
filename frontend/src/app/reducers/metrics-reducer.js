import {api} from "../../api/api";


const initialState = []

export const metricsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET-METRICS':
            return action.metrics
        default:
            return state
    }
}

// actions
export const setMetricsAC = (metrics) => ({type: 'SET-METRICS', metrics})

export const fetchMetricsTC = () => async(dispatch) => {
    try {
        let response = await api.getMetrics()
        dispatch(setMetricsAC(response.data))
    }
    catch(e) {
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console')
    }
}





