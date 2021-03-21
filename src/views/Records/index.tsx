import React from 'react'
//import { useTranslation } from 'react-i18next'
import styles from './index.module.css'
import {Button} from 'components'

interface Props {

}

export default function Status(props: Props) {
    //const { t } = useTranslation()
    return (
        <table className={`${styles.table}`}>
            <tr>
                <th>Rank</th>
                <th>Player</th>
                <th>Time</th>
                <th>Frame Rate Limit</th>
                <th>Date</th>
                <th></th>
            </tr>
            <tr>
                <td>1st</td>
                <td>test</td>
                <td>34s</td>
                <td>240fps</td>
                <td>1 year ago</td>
                <td><Button>a</Button></td>
            </tr>
            <tr>
                <td>2nd</td>
                <td>test2</td>
                <td>34s</td>
                <td>240fps</td>
                <td>1 year ago</td>
                <td><Button>a</Button></td>
            </tr>
            <tr>
                <td>3rd</td>
                <td>test3</td>
                <td>34s</td>
                <td>240fps</td>
                <td>1 year ago</td>
                <td><Button>a</Button></td>
            </tr>
        </table>
    )
}