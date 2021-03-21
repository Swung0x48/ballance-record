import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Input } from 'components'
import styles from '../index'

interface Props {

}

export default function Signup(props: Props) {
    const { t } = useTranslation()
    return (
        <form className={`${styles.center}`}>
            <div className={`${styles.title}`}>{t("SIGN_UP")}</div>
            <Input className="w-3/5" type="email" placeholder={t("EMAIL")}/>
            <br />
            <Input className="w-3/5" type="text" placeholder={t("NICKNAME")}/>
            <br />
            <Input className="w-3/5" type="password" placeholder={t("PASSWORD")}/>
            <br />
            <Input className="w-3/5" type="password" placeholder={t("CONFIRM_PASSWORD")}/>
            <br />
            <Button>{t("SIGN_UP")}</Button>
            <Button type="reset">{t("RESET")}</Button>
        </form>
    )
}