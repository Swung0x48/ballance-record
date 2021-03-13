import React from 'react'
import {Menu} from 'components'
import {useTranslation} from 'react-i18next'

interface Props {

}

export default function UserWidget(props: Props) {
    const { t } = useTranslation()
    return (
        <React.Fragment>
            <Menu to="/login">{t("LOG_IN")}</Menu>
            <Menu to="/signup">{t("SIGN_UP")}</Menu>
        </React.Fragment>
    )
}