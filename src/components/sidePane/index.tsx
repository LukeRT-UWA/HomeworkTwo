import React, { useEffect, useState } from "react";
import styles from './index.module.css';
export type Props = {
    children?: React.ReactNode
}

export const SidePane: React.FC<Props> = () => {

    useEffect(() => {
        setIsMounted(!isMounted)
    }, []);

    const [isMounted, setIsMounted] = useState(false);
    return (
        <div className={isMounted ?
            styles.sidePaneWrapperMounted :
            styles.sidePaneWrapperMounting}
            style={{ transitionDelay: `500ms` }}
        >
            <div className={styles.sidePaneAbove}></div>
            <div className={styles.sidePane}></div>
            <div className={styles.sidePaneBelow}></div>
        </div>
    )

}