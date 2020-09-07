import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLaunches } from '../actions';
import './LaunchesListPages.css';

class UserList extends Component {
    componentDidMount() {
        this.props.fetchLaunches();
    }

    renderUsers() {
        return this.props.launches.map(launch => {
            return <li key={launch.launch_date_unix}>{launch.mission_name}</li>
        });
    }

    render() {
        return (
            <div>
                Here's a list of launches:
                <ul className="test">{this.renderUsers()}</ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { launches: state.launches };        
}

function loadData(store) {
    return store.dispatch(fetchLaunches());
}

export default {
    loadData,
    component: connect(mapStateToProps, { fetchLaunches })(UserList)
};