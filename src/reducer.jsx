const reducer = (state,action) => {
    if (action.type === "HOME_UPDATE") {
        return {
            ...state,
            name: action.payload.name,
            para: action.payload.para,
            image: action.payload.image,
        };
    }
    if (action.type === "About_UPDATE") {
        return {
            ...state,
            name: action.payload.name,
            para: action.payload.para,
            image: action.payload.image,
        };
    }
    if (action.type === "Service_UPDATE") {
        return {
            ...state,
            name: action.payload.name,
            para: action.payload.para,
            image: action.payload.image,
        };
    }

    if (action.type === "GET_SERVICES") {
        return {
            ...state,
            services : action.payload,
        };
    }
    if (action.type === "GET_S_Details") {
        return {
            ...state,
            sDetails : action.payload,
        };
    }
    return state
};

export default reducer;
