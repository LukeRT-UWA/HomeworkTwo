import React, { useEffect, useState } from "react";
import styles from './index.module.css';
import { Button } from "../UI/button";
export type Props = {
  children?: React.ReactNode
}

export const Header: React.FC<Props> = () => {

  useEffect(() => {
    setIsMounted(!isMounted)
  }, []);

  const [isMounted, setIsMounted] = useState(false);
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerLayout}>
        <div >Logo</div>
        <div className={styles.menuItems}>
          <div
            className={isMounted ? styles.menuItemMounted : styles.menuItemMounting}
            style={{ transitionDelay: `100ms` }}
          >
            <Button onClick={()=>alert('clicked!')}>Click 1</Button>
          </div>
          <div
            className={isMounted ? styles.menuItemMounted : styles.menuItemMounting}
            style={{ transitionDelay: `200ms` }}
          >
            <Button onClick={()=>alert('clicked!')}>Click 2</Button>
          </div>
          <div
            className={isMounted ? styles.menuItemMounted : styles.menuItemMounting}
            style={{ transitionDelay: `300ms` }}
          >
            <Button onClick={()=>alert('clicked!')}>Click 3</Button>
          </div>
          <div
            className={isMounted ? styles.menuItemMounted : styles.menuItemMounting}
            style={{ transitionDelay: `400ms` }}
          >
            <Button onClick={()=>alert('clicked!')}>Click 4</Button>
          </div>
        </div>
      </div>
      <div className={styles.belowBorder}></div>
    </div>

  )

}