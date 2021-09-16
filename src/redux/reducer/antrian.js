const initAntrian = {
    antrianIbu: [],
    antrianAnak: [],
    antrianUmum: [],
    noAntrian: []
}


export const antrianReducer = (state = initAntrian, action) => {
    if(action.type === "SET_ANTRIAN_IBU")
    {
        return {
            ...state,
            antrianIbu : action.value
        }
    }
        if(action.type === "SET_NO_ANTRIAN")
    {
        return {
            ...state,
            noAntrian : action.value
        }
    }

    return state;
}