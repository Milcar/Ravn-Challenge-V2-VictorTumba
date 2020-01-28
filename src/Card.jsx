import React from "react";

const Card = ({ name, birthYear, eyeColor, gender, hairColor, height, mass, skinColor }) => (
    <div className="ui card">
        <div className="content">
            <div className="header">{name}</div>
            <div className="meta">
                <span className="date">Birth Year: {birthYear}</span>
            </div>
            <div className="meta">
                <span className="date">Eye Color:: {eyeColor}</span>
            </div>
            <div className="meta">
                <span className="date">Gender: {gender}</span>
            </div>
            <div className="meta">
                <span className="date">Hair Color: {hairColor}</span>
            </div>
            <div className="meta">
                <span className="date">Height: {height}</span>
            </div>
            <div className="meta">
                <span className="date">Mass: {mass}</span>
            </div>
            <div className="meta">
                <span className="date">Skin Color: {skinColor}</span>
            </div>
        </div>
    </div>
);

export default Card;
