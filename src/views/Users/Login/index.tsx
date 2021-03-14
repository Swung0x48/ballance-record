import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from '../index.module.css'
import { Input, Button } from 'components'

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