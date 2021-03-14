import React, { Suspense, lazy } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import styles from './index.module.css'
import Navbar from './Navbar'
import UserWidget from './UserWidget'
import Menu from './Menu'
import Dropdown from './Dropdown'

export default function App() {
    const { t } = useTranslation()
    return (
        <React.Fragment>
            <Router>
                <Navbar
                    leftElement={
                        <React.Fragment>
                            <Menu className={`${styles.home}`} to="/">BallanceLive</Menu>
                            <Dropdown title={t("RECORDS")}>
                                <Menu to="/a">a</Menu>
                                <Menu to="/b">b</Menu>
                            </Dropdown>
                            <Menu to="/stats">{t("STATS")}</Menu>
                            <Menu to="/admin">{t("ADMIN")}</Menu>
                        </React.Fragment>
                    }
                    rightElement={
                        <React.Fragment>
                            <UserWidget/>
                            {/*<a onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'zh-CN' : 'en')}>*/}
                            {/*    ↓{i18n.language}↓*/}
                            {/*</a>*/}
                        </React.Fragment>
                    }
                />
                <Switch>
                    <Suspense fallback={<div>Loading……</div>}>
                        <Route path="/stats" component={ lazy(() => import('../Stats')) } />
                        <Route path="/login" component={ lazy(() => import('../Users/Login')) } />
                        <Route path="/signup" component={ lazy(() => import('../Users/Signup')) } />
                    </Suspense>
                </Switch>
            </Router>
        </React.Fragment>
    )
}
