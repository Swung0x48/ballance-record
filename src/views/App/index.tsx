import React, {Suspense, lazy, useState, useEffect} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory
} from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Navbar from './Navbar'
import UserWidget from './UserWidget'
import Menu from './Menu'
import Dropdown from './Dropdown'

interface ILink {
    name: string,
    icon: IconDefinition
    children: (Omit<ILink, 'children'> & { to: string})[]
}
export default function App() {
    const { t } = useTranslation()
    let history
    let [page1, setPage1] = useState(-1)
    let [page2, setPage2] = useState(-1)
    const links: ILink[] = [
        {
            name: "page1",
            icon: faHome,
            children: [
                { name: "a", icon: faHome, to: "/login" }
            ]
        },
        {
            name: "page2",
            icon: faHome,
            children: [
                { name: "b", icon: faHome, to: "/stats" }
            ]
        }
    ]
    const Page1 = () => {
        return (
            <React.Fragment>
            {
                links.map((link, index) => (
                    <li key={index}
                        className={`${index == page1 ? 'bg-gray-700' : ''} p-2 flex items-center space-x-1 hover:bg-gray-700`}
                        onClick={() => setPage1(index)}>
                        <FontAwesomeIcon icon={link.icon} size="2x" color="white"/>
                        <div className="text-white text-2xl">{link.name}</div>
                    </li>
                ))
            }
            </React.Fragment>
        )
    }
    const Page2 = () => {
        history = useHistory()
        return (
            <React.Fragment>
            {
                links[page1] ? links[page1].children.map((link, index) => (
                    <li key={index}
                        className={`${index == page2 ? 'bg-gray-700' : ''} p-2 flex items-center space-x-1 hover:bg-gray-700`}
                        onClick={() => setPage2(index)}>
                        <FontAwesomeIcon icon={link.icon} size="2x" color="white" />
                        <div className="text-white text-2xl">{link.name}</div>
                    </li>
                )) : null
            }
            </React.Fragment>
        )
    }
    useEffect(() => {
        if(page1 != -1 && page2 != -1) {
            history.push(links[page1].children[page2].to)
        }
    }, [page1, page2])

    return (
        <React.Fragment>
            <Router>
                {/*<Navbar*/}
                {/*    leftElement={*/}
                {/*        <React.Fragment>*/}
                {/*            <Menu className="text-sm" to="/">BallanceLive</Menu>*/}
                {/*            <Dropdown title={t("RECORDS")}>*/}
                {/*                <Menu to="/a">a</Menu>*/}
                {/*                <Menu to="/b">b</Menu>*/}
                {/*            </Dropdown>*/}
                {/*            <Menu to="/maps">{t("MAPS")}</Menu>*/}
                {/*            <Menu to="/stats">{t("STATS")}</Menu>*/}
                {/*            <Menu to="/admin">{t("ADMIN")}</Menu>*/}
                {/*        </React.Fragment>*/}
                {/*    }*/}
                {/*    rightElement={*/}
                {/*        <React.Fragment>*/}
                {/*            <UserWidget/>*/}
                {/*            /!*<a onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'zh-CN' : 'en')}>*!/*/}
                {/*            /!*    ↓{i18n.language}↓*!/*/}
                {/*            /!*</a>*!/*/}
                {/*        </React.Fragment>*/}
                {/*    }*/}
                {/*/>*/}
                <div className="flex w-screen h-screen divide-x divide-black divide-opacity-10">
                    <ul className={`${page1 == -1 ? 'w-full' : 'w-0'} ${page2 == -1 ? 'md:w-1/2' : 'md:w-0'} lg:w-60 overflow-hidden transition-all box-content bg-gray-800`}>
                        <Page1 />
                    </ul>
                    <ul className={`${page1 != -1 && page2 == -1 ? 'w-full' : 'w-0'} ${page2 == -1 ? 'md:w-1/2' : 'md:w-0'} lg:w-60 overflow-hidden transition-all box-content bg-gray-800`}>
                        <li className="md:hidden p-2 flex items-center space-x-1 hover:bg-gray-700" onClick={() => setPage1(-1)}>
                            <FontAwesomeIcon icon={faArrowLeft} size="2x" color="white" />
                            <div className="text-white text-2xl">Back</div>
                        </li>
                        <Page2 />
                    </ul>
                    <div className={`${page2 != -1 ? 'w-full' : 'w-0'} transition-all flex-1`}>
                        <Switch>
                            <Suspense fallback={<div>Loading……</div>}>
                                <Route path="/stats" component={ lazy(() => import('../Records')) } />
                                <Route path="/login" component={ lazy(() => import('../Users/Login')) } />
                                <Route path="/signup" component={ lazy(() => import('../Users/Signup')) } />
                            </Suspense>
                        </Switch>
                    </div>
                </div>
            </Router>
        </React.Fragment>
    )
}
