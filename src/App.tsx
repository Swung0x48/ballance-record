import React, { Suspense, lazy } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import {Menu, Navbar, UserWidget} from './components'
import './App.css'

const App: React.FC = () => {
    return (
        <Router>
            <div className="app">
                <Navbar leftElement={<Menu />} rightElement={<UserWidget />}/>
                <Switch>
                    <Suspense fallback={<div>Loading……</div>}>
                        <Route path="/login" component={ lazy(() => import('./views/Users/Login')) } />
                    </Suspense>
                </Switch>
            </div>
        </Router>
    )
}

export default App
