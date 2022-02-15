
const initialState = {
    data : [],
    filteredData : [],
    isFiltered : false
}
const filteredData = initialState.filteredData

const fetchDataReducer = (state = initialState,action)=> {
    switch(action.type) {
        case "FETCH-DATA" :
        return {
            ...state,
            filteredData : [],
            isFiltered : false,
            data:action.payload,
        }
        case "FILTER-DATA" :
            const filteredData = state.data.filter((elem) => elem[action.filterCatagory] == action.check)
            return {
                ...state,
                filteredData:filteredData,
                isFiltered : action.isFiltered
            }
        default : return state;
    }
}

export default fetchDataReducer;