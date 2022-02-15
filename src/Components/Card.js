import React from "react";

const Card = ({missionName,flightNumber,missionYear,launchSuccess,missionId}) => {
return (<>
<div className="card-container">
    <img src="https://cdn.dribbble.com/users/8717/screenshots/7304856/spacex_logo_4x.png" />
    <div className="text-content">
    <h3>{missionName}</h3>
    <h4>Mission Id : <span>{missionId.length > 0? missionId : "No Data"}</span> </h4>
    <h4>Launch Year : <span>{missionYear}</span> </h4>
    <h4>Successful Launch :  <span>{launchSuccess === true? "true" :"false"}</span> </h4>
    <h4>Successful Landing : <span>{launchSuccess === true? "true" :"false"}</span> </h4>
    </div>
</div>
</>)
}

export default Card;