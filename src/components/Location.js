import React from "react";

export default function Location(props) {
    return (
        <div className="location">
            <div className="location--div-img">
                <img 
                    src={props.imageUrl}
                    alt=""
                    className="location--img"
                />
            </div>
            <div className="location--content">
                <div className="location--location">    
                    <img 
                        src={require('../images/pin.png')}
                        alt=""
                        className="location--img-pin"
                    />
                    <h3>{props.location}</h3>
                    <a href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <span>{props.startDate} - {props.endDate}</span>
                <p>{props.description}</p>
            </div>
        </div>
    )
}