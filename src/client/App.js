import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';

const App = ({ route }) => {
    return (<div style={{'background': '#DCDCDC'}}>
        <Header />
        {renderRoutes(route.routes)}
        <div className="developer">Developed by: vishwa</div>
    </div>);
};

export default {
    component: App
}