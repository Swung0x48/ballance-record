import React, { Suspense, lazy } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import { Menu, Navbar, UserWidget } from './components'
import './App.css'

const App: React.FC = () => {
    return (
        <Router>
            <React.Fragment>
                <Navbar leftElement={<Menu />} rightElement={<UserWidget />}/>
                <Switch>
                    <Suspense fallback={<div>Loading……</div>}>
                        <Route path="/login" component={ lazy(() => import('./views/Users/Login')) } />
                        <Route path="/signup" component={ lazy(() => import('./views/Users/Signup')) } />
                    </Suspense>
                </Switch>
            </React.Fragment>
        </Router>
    )
}

export default App
