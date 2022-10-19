import React from "react";
import style from './index.module.css'

export type Props = {
    children?: React.ReactNode
}

export const Header: React.FC<Props> = ({children}) => {
    return (
        <div className={style.test}>{children}</div>
    )

}