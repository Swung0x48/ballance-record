import React from 'react'
import { useTranslation } from 'react-i18next'
import { Input, Button } from 'components'
import styles from '../index'

interface Props {

}

export default function Login(props: Props) {
    const { t } = useTranslation()
    return (
        <form className={`${styles.center}`}>
            <div className={`${styles.title}`}>{t("LOGIN")}</div>
            <Input className="w-3/5" type="email" placeholder={t("EMAIL")}/>
            <br />
            <Input className="w-3/5" type="password" placeholder={t("PASSWORD")}/>
            <br />
            <Button>{t("LOGIN")}</Button>
            <Button type="reset">{t("RESET")}</Button>
        </form>
    )
}