import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLaunches, filterLaunches } from '../actions';
import Button from '../components/Button';

class FilterLaunch extends Component{

    render() {
        return (<div className="filter-main-container">
            <div
                className="filter-heading"
                tabIndex="0"
                aria-label={this.fetchContainerHeading()}> {this.fetchContainerHeading()}
            </div>
            <div tabIndex="0" aria-label="Launch Year" className="filter-subheading">Launch Year</div>
            <div className="button-group">
            {this.fetchListOfYear().map(year => {
                return (
                    <div className={year === '2021' ? 'visually-hidden': null } tabIndex="0" aria-label={year} key={year} onClick={() => this.test('year', year)}>
                        <div className="button">{year}</div>
                    </div>
                );
            })}
            </div>
            <div tabIndex="0" aria-label="Successful Launch" className="filter-subheading">
                Successful Launch
            </div>
            <div className="button-group">
                {this.fetchBooleans().map(bool => {
                    return (
                        <div tabIndex="0" aria-label= {bool} key={bool} onClick={() => this.test('launch', bool)}>
                        <div className="button">{bool}</div>
                    </div>
                    );
                })}
            </div>
            <div tabIndex="0" aria-label="Successful Landing" className="filter-subheading">
                Successful Landing
            </div>
            <div className="button-group">
                {this.fetchBooleans().map(bool => {
                    return (
                        <div tabIndex="0" aria-label= {bool} key={bool} onClick={() => this.test('landing', bool)}>
                        <div className="button">{bool}</div>
                    </div>
                    );
                })}
            </div>
        </div>);
    }
    test(type, value) {
        let filter = this.props.filters ? this.props.filters : {};
        if (this.props.filters && this.props.filters[type]) {
            filter[type] === value ? delete filter[type] : filter[type] = value;
        } else {
            filter[type] = value;
        }
        console.log('filter', filter);
        this.props.createFilters(filter);
    }
    fetchContainerHeading() {
        return 'Filters';
    }
    fetchListOfYear() {
        return ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'];
    }
    fetchBooleans() {
        return ['true', 'false'];
    }
    
}; 

function mapStateToProps(state) {
    return { filters: state.launches.filters };
}

function loadData(store) {
    return store.dispatch(filterLaunches());
}
function mapDispatchToProps(dispatch) {
    return {
        createFilters: (filter) => dispatch(filterLaunches(filter))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterLaunch);