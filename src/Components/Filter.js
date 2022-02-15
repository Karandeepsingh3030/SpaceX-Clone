import React, {useRef} from "react";
import {filterData} from "../actions"
import {useDispatch,useSelector} from "react-redux"

const Filter = () => {
    const years = [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020]
    const filterDispatch = useDispatch()
    const buttonRef = useRef()
    const isFilteredCheck = useSelector((state) => state.getDataReducer.isFiltered)

const handleFilter = (e,filtertype,check) => {
    let isFiltered = true 

    if (e.target.classList.contains("active")) {
        isFiltered = false
    }
    e.target.classList.toggle("active")
    
    if (isFilteredCheck && document.getElementsByClassName("active")[0]) {
        document.getElementsByClassName("active")[0].classList.remove("active")
    }
    if (filtertype === "year") {
        const filterCatagory = "launch_year"
    filterDispatch(filterData(check,isFiltered,filterCatagory))
    return 
}
if (filtertype === "launch") {
    const filterCatagory = "launch_success"
    filterDispatch(filterData(check,isFiltered,filterCatagory))
    return 
}
if (filtertype === "landing") {
    const filterCatagory = "launch_success"
    filterDispatch(filterData(check,isFiltered,filterCatagory))
}

}
return (<>
<div className="filter-container">
    <h3>Filters</h3>
    <div className="launch-year">
        <h1>Launch Year</h1>
        <div className="list">
            {years.map((year) => {
                return <button onClick={(e) => handleFilter(e,"year",year)}>{year}</button>
            })}
        </div>
    </div>
    <div className="succesful-launch">
    <h1>Successful Launch</h1>
    <div className="list">
        <button onClick={(e) => handleFilter(e,"launch",true)}>True</button>
        <button onClick={(e) => handleFilter(e,"launch", false)}>False</button>
        </div>
    </div>
    <div className="succesful-landing">
    <h1>Successful Landing</h1>
    <div className="list">
        <button onClick={(e) => handleFilter(e,"landing",true)}>True</button>
        <button onClick={(e) => handleFilter(e,"landing", false)}>False</button>
        </div>
    </div>
</div>
</>)
}

export default Filter;