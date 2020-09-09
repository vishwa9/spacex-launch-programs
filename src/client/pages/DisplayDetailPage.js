import React from 'react';

const DisplayDetail = (props) => {
    return (
        <div className={`display-detail-main-container ${ props.ele > 3 ? 'card-width' : ''}`}>
            <div className="display-image">
                <img tabIndex="0" src={props.data.links.mission_patch} alt="rocket launch logo" className="display-image-style" />
            </div>
            <div tabIndex="0" aria-label={props.data.mission_name} className="mission-name" key={props.data.flight_number}>{props.data.mission_name} #{props.data.flight_number}</div>
            <div className="display-mission-content">
                <div tabIndex="0" aria-label="Mission Ids" className="display-mission-id-list">
                    Mission Ids: {props.data.mission_id.map((id, index) => {
                    return (<li key={index} tabIndex="0" aria-label={id} className="display-mission-id">{id}</li>);
                })}
                </div>
            </div>
            <div className="display-mission-content" tabIndex="0" aria-label="Launch Year">
                <span className="display-mission-id-list">Launch Year:</span>
                <span className="display-mission-id">{props.data.launch_year}</span>
            </div>
            <div className="display-mission-content" tabIndex="0" aria-label="Successfull Launch">
                <span className="display-mission-id-list">Successfull Launch:</span>
                <span className="display-mission-id">{props.data.launch_success + ''}</span>
            </div>
            <div className="display-mission-content" tabIndex="0" aria-label="Successfull Landing:">
                <span className="display-mission-id-list">Successfull Landing:</span>
                <span className="display-mission-id">{props.data.rocket.first_stage.cores[0].land_success != null ? props.data.rocket.first_stage.cores[0].land_success + '' : 'false'}</span>
            </div>
        </div>

    );
}

export default DisplayDetail;