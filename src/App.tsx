import React, { Suspense, lazy } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import './index.css'

const App: React.FC = () => {
    return (
        <Router>
            <div className="app">
                <div className="nav">
                    <Link to="/login"><button>Log In</button></Link>
                    <Link to="/signup"><button>Sign up</button></Link>
                </div>
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
