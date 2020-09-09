import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLaunches, filterLaunches } from '../actions';
import Button from '../components/Button';

class FilterLaunch extends Component{
    constructor(props){
        super(props);
        this.state = props;
    }

    componentWillMount() {
        this.unlisten = this.props.history.listen((location, action) => {
            const filter = location.search.split('&').reduce((o,e,i) => {
                if(i >0) {
                    return Object.assign(o, Object.fromEntries([e.split('=')]));
                } else {
                    let str = e.replace(/\?/, "");
                    return Object.assign(o, Object.fromEntries([str.split('=')]));
                }
            },{});
            this.props.createFilters(filter);
        });
    }

    componentDidMount() {
        
        const filter = this.props.history.location.search.split('&').reduce((o,e,i) => {
            if(i >0) {
                return Object.assign(o, Object.fromEntries([e.split('=')]));
            } else {
                let str = e.replace(/\?/, "");
                return Object.assign(o, Object.fromEntries([str.split('=')]));
            }
        },{});
        this.props.createFilters(filter);
    }


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
                    <div className={year === '2021' ? 'visually-hidden': null } key={year} onClick={() => this.test('year', year)}>
                        <div tabIndex="0" aria-label={year} className={`button active-btn-${this.props.filters && this.props.filters['year'] === year ? 'year' : ''}`}>{year}</div>
                    </div>
                );
            })}
            </div>
            <div tabIndex="0" aria-label="Successful Launch" className="filter-subheading">
                Successful Launch
            </div>
            <div className="button-group">
                {(!this.state.filters || this.state.filters) && this.fetchBooleans().map(bool => {
                    return (
                        <div key={bool} onClick={() => this.test('launch', bool)}>
                        <div tabIndex="0" aria-label= {bool} className={`button active-btn-launch-${this.props.filters && this.props.filters['launch'] === bool ? bool : ''}`}>{bool}</div>
                    </div>
                    );
                })}
            </div>
            <div tabIndex="0" aria-label="Successful Landing" className="filter-subheading">
                Successful Landing
            </div>
            <div className="button-group">
                {(!this.state.filters || this.state.filters) && this.fetchBooleans().map(bool => {
                    return (
                        <div key={bool} onClick={() => this.test('landing', bool)}>
                        <div tabIndex="0" aria-label= {bool} className={`button active-btn-land-${this.props.filters && this.props.filters['landing'] === bool ? bool : ''}`}>{bool}</div>
                    </div>
                    );
                })}
            </div>
        </div>);
    }
    test(type, value) {
        let filter = this.props.filters ? JSON.parse(JSON.stringify(this.props.filters)) : {};
        if (this.props.filters && this.props.filters[type]) {
            filter[type] === value ? delete filter[type] : filter[type] = value;
        } else {
            filter[type] = value;
        }
        this.props.createFilters(filter);
        this.setState({filters: filter});
        let baseUrl = 'launches?';
        if(Object.entries(filter).length === 0) {
            this.state.history.push('/');
        } else {
            Object.entries(filter).
            map((e,i) => baseUrl = baseUrl+ (i > 0 ? '&':'') + e[0]+'=' + e[1]);
            this.state.history.push(baseUrl);
        }
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