import React from 'react'
import styles from './index.module.css'
import { Button, Input } from '../../../components'
import { useTranslation } from 'react-i18next'

interface Props {

}
const Signup: React.FC<Props> = props => {
    const { t } = useTranslation()
    return (
        <form className={`${styles.signup}`}>
            <div className={`${styles.title}`}>{t("SIGN_UP")}</div>
            <Input type="email" placeholder={t("EMAIL")}/>
            <br />
            <Input type="text" placeholder={t("NICKNAME")}/>
            <br />
            <Input type="password" placeholder={t("PASSWORD")}/>
            <br />
            <Input type="password" placeholder={t("CONFIRM_PASSWORD")}/>
            <br />
            <Button>{t("SIGN_UP")}</Button>
            <Button type="reset">{t("RESET")}</Button>
        </form>
    )
}

export default Signup