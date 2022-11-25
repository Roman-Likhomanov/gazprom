import {api} from "../../api/api";


const initialState = []

export const groupsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET-GROUPS':
            return action.groups
        default:
            return state
    }
}

// actions
export const setGroupsAC = (groups) => ({type: 'SET-GROUPS', groups})

export const fetchGroupsTC = () => async(dispatch) => {
    try {
        let response = await api.getGroups()
        dispatch(setGroupsAC(response.data))
    }
    catch(e) {
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console')
    }
}





