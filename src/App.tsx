import React, { Suspense, lazy } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import {Button, Menu, Navbar, UserWidget} from './components'
import './App.css'
import {useTranslation} from 'react-i18next'

const App: React.FC = () => {
    const { i18n } = useTranslation()
    return (
        <Router>
            <React.Fragment>
                <Navbar
                    leftElement={<Menu />}
                    rightElement={
                        <span>
                            <UserWidget />
                            {/*<Button onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en')}>*/}
                            {/*    {i18n.language}*/}
                            {/*</Button>*/}
                        </span>}
                />
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
