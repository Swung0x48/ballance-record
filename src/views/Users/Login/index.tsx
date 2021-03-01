import React from 'react'
import { Input, Button } from 'components'
import styles from './index.module.css'
import { useTranslation } from 'react-i18next'

const Login = () => {
    const { t, i18n } = useTranslation()
    return (
        <form className={`${styles.login}`}>
            <div className={`${styles.title}`}>{t("LOGIN")}</div>
            <Input type="email" placeholder={"Email"}/>
            <br />
            <Input type="password" placeholder={"Password"}/>
            <br />
            <Button>Login</Button>
            <Button type="reset">Reset</Button>
            <Button
                onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en')}
            >
                {i18n.language}
            </Button>
        </form>
    )
}

export default Login