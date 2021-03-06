import React, { useEffect, useState } from "react";
import Card from "./Card";
import {getData} from "../actions"
import {useDispatch,useSelector} from "react-redux"
import axios from "axios"

const Content = () => {
    const [datas, setDatas] = useState()
    const dispach = useDispatch()
    const data = useSelector((state) => state.getDataReducer.data)
    const filteredData = useSelector((state) => state.getDataReducer.filteredData)
    const isFiltered = useSelector((state) => state.getDataReducer.isFiltered)

    useEffect(() => {
        fetchData()
    },[])
    useEffect(() => {
    isFiltered? setDatas(filteredData) : setDatas(data)
    },[isFiltered, filteredData])
    const fetchData = async () => {
        try {
            const resp = await axios('https://api.spacexdata.com/v3/launches?limit=100');
            setDatas(resp.data)
            dispach(getData(resp.data))
        } catch (err) {
            console.error(err);
        }
    };

    return (<>
        <div className="content-container">
            {datas && datas.map((data) => {
                return <Card 
                missionName={data["mission_name"]}
                flightNumber= {data["flight_number"]}
                missionYear={data["launch_year"]}
                launchSuccess={data["launch_success"]}
                missionId={data["mission_id"]}
                />
            })}
        </div>
    </>)
}

export default Content;