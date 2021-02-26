import React, { Suspense, lazy } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import {Button, Navbar, UserWidget} from './components'
import './App.css'

const App: React.FC = () => {
    return (
        <Router>
            <div className="app">
                <Navbar leftElement={<span>BallanceRecord Home SpeedRun Highscore</span>} rightElement={<UserWidget />}/>
                {/*<div className="nav">*/}
                {/*    <Link to="/login">*/}
                {/*        <Button>Log In</Button>*/}
                {/*    </Link>*/}
                {/*    <Link to="/signup">*/}
                {/*        <Button>Sign Up</Button>*/}
                {/*    </Link>*/}
                {/*</div>*/}
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
