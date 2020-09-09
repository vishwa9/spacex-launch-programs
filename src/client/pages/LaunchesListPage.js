import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLaunches } from '../actions';
import DisplayDetail from './DisplayDetailPage';
import FilterLaunch from './FilterLaunchPage';
import './LaunchesListPages.css';

class UserList extends Component {
    componentDidMount() {
        this.props.fetchLaunches();
    }

    renderUsers() {
        return this.props.launches && this.props.launches.map(launch => {
            
            return (<DisplayDetail ele={this.props.launches.length} key={launch.flight_number} data={launch}></DisplayDetail>);
        });
    }

    render() {
        return (
            <div className="main-container">
                <FilterLaunch history={this.props.history}></FilterLaunch>
                <div className="display-main-container">{this.renderUsers()}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { launches: state.launches.launches };        
}

function loadData(store) {
    return store.dispatch(fetchLaunches());
}

export default {
    loadData,
    component: connect(mapStateToProps, { fetchLaunches })(UserList)
};