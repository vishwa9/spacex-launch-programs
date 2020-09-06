import App from './App';
import HomePage from './pages/HomePage';
import LaunchesListPage from './pages/LaunchesListPage'; 

export default [
    {
        ...App,
        routes: [
            {
                path: '/',
                ...LaunchesListPage,
                exact: true
            },
            {
                path: '/willUseInFuture',
                ...HomePage
            }
        ]
    }
]