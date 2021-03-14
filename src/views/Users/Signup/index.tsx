import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from '../index.module.css'
import { Button, Input } from 'components'


interface Props {

}

export default function Signup(props: Props) {
    const { t } = useTranslation()
    return (
        <form className={`${styles.center}`}>
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