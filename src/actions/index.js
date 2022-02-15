export const getData = (payload) => {
   return {
       type : "FETCH-DATA",
       payload : payload
   }
}
export const filterData = (check,isFiltered,filterCatagory) => {
   return { 
    type : "FILTER-DATA",
    check : check,
    isFiltered : isFiltered,
    filterCatagory: filterCatagory
}}