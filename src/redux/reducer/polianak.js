const initPoliAnak = {
    dataAnak: [],

}

export const polianakReducer = (state = initPoliAnak, action) => {
    if(action.type === "SET_ANAK")
    {
        return {
            ...state,
            dataAnak : action.value
        }
    }



    return state;
}