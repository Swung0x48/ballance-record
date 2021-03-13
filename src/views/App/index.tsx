import React, { Suspense, lazy } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import {Button, Menu, Navbar, UserWidget, Dropdown} from 'components'
import {useTranslation} from 'react-i18next'
import styles from './index.module.css'

const Index: React.FC = () => {
    const { t, i18n } = useTranslation()
    return (
        <Router>
            <React.Fragment>
                <Navbar
                    leftElement={
                        <React.Fragment>
                            <Menu className={`${styles.home}`} to="/">BallanceRecord</Menu>
                            <span>{t("RECORDS")} {/* TODO: Make it a dropdown*/}</span>
                            <Menu to="/stats">{t("STATS")}</Menu>
                            <Menu to="/admin">{t("ADMIN")}</Menu>
                        </React.Fragment>
                    }
                    rightElement={
                        <React.Fragment>
                            <UserWidget/>
                            <Dropdown title={"test"} />
                            {/*<a onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'zh-CN' : 'en')}>*/}
                            {/*    ↓{i18n.language}↓*/}
                            {/*</a>*/}
                        </React.Fragment>
                    }
                />
                <Switch>
                    <Suspense fallback={<div>Loading……</div>}>
                        <Route path="/login" component={ lazy(() => import('../Users/Login')) } />
                        <Route path="/signup" component={ lazy(() => import('../Users/Signup')) } />
                    </Suspense>
                </Switch>
            </React.Fragment>
        </Router>
    )
}

export default Index
