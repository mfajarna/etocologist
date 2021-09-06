const initBiodata = {
    dataBiodata: [],
    dataProsesKehamilan: [],
    dataGrafik: [],
}

export const poliibuReducer = (state = initBiodata, action) => {
    if(action.type === "SET_BIODATA")
    {
        return {
            ...state,
            dataBiodata : action.value
        }
    }

    if(action.type === "SET_PROSES_KEHAMILAN")
    {
        return {
            ...state,
            dataProsesKehamilan : action.value
        }
    }

    if(action.type === "SET_GRAFIK_IBU")
    {
        return {
            ...state,
            dataGrafik : action.value
        }
    }


    return state;
}