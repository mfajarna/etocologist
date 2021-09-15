const initProfile = {
    dataProfile: [],
    dataUsg: [],
}

export const profileReducer = (state = initProfile, action) => {
    if(action.type === "SET_PROFILE")
    {
        return {
            ...state,
            dataProfile : action.value
        }
    }

    if(action.type === 'SET_USG')
    {
        return{
            ...state,
            dataUsg: action.value
        }
    }

    return state;
}