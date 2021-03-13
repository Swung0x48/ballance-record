import React from 'react'
import {Link} from "react-router-dom";
import styles from './index.module.css'
import {useTranslation} from 'react-i18next'

interface Props {

}

const UserWidget: React.FC<Props> = props => {
    const { t } = useTranslation()
    return (
        <React.Fragment>
            <Link className={`${styles.link}`} to="/login">
                {t("LOG_IN")}
            </Link>
            <Link className={`${styles.link}`} to="/signup">
                {t("SIGN_UP")}
            </Link>
        </React.Fragment>)
}

export default UserWidget