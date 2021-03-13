import React from 'react'
import { Input, Button } from 'components'
import styles from '../index.module.css'
import { useTranslation } from 'react-i18next'

interface Props {

}

export default function Login(props: Props) {
    const { t } = useTranslation()
    return (
        <form className={`${styles.center}`}>
            <div className={`${styles.title}`}>{t("LOGIN")}</div>
            <Input type="email" placeholder={t("EMAIL")}/>
            <br />
            <Input type="password" placeholder={t("PASSWORD")}/>
            <br />
            <Button>{t("LOGIN")}</Button>
            <Button type="reset">{t("RESET")}</Button>
        </form>
    )
}