import {api} from "../api/api";


const initialState = []

export const groupsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'APP/SET-GROUPS':
            return {...state, ...action.groups}
        default:
            return state
    }
}

// actions
export const setGroupsAC = (groups) => ({type: 'APP/SET-GROUPS', groups})

export const fetchGroupsTC = () => async(dispatch) => {
    try {
        let response = await api.getGroups()
        dispatch(setGroupsAC(response))
    }
    catch(e) {
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console')
    }
}





