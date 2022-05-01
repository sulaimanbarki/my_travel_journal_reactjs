import React from "react";

export default function Location(props) {
    return (
        <div className="location-card">
            <div className="location-img">
                <img src={require(`../images/${props.imageUrl}`)} alt="location" />
            </div>
            <div className="location-info">
                <img src={require("../images/icons8-location-48.png")} className="location-icon" alt="location" /> &nbsp;
                <span className="location">{props.location.toUpperCase()}</span>&nbsp; &nbsp;
                <a href={props.googleMapsUrl} className="grey" target="_blank" rel="noopener noreferrer">
                    View on Google Maps
                </a>
                <h2 className="title">{props.title}</h2>
                <p className="trip-date">{props.startDate} - {props.endDate}</p>
                <p className="description">{props.description}</p>
            </div>
            <hr  style={{
                color: '#000000',
                backgroundColor: '#000000',
                height: .5,
                borderColor : '#000000'
            }}/>
        </div>
    );
}