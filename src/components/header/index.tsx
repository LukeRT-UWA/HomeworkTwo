import React, { useEffect, useRef, useState } from "react";
import styles from './index.module.css';

export type Props = {
  children?: React.ReactNode
}

export const Header: React.FC<Props> = ({ }) => {

  useEffect(() => {
    setInProp(!inProp)
  }, []);

  const nodeRef = useRef(null);
  const [inProp, setInProp] = useState(false);
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerLayout}>
        <div >Logo</div>
        <div className={styles.menuItems}>
          <div 
          className={inProp ? styles.myThingDone : styles.myThing}  
          style={{transitionDelay: `200ms`}}
          >
            Test !!!
            </div>
            <div 
          className={inProp ? styles.myThingDone : styles.myThing}  
          style={{transitionDelay: `400ms`}}
          >
            Test !!!
            </div>
            <div 
          className={inProp ? styles.myThingDone : styles.myThing}  
          style={{transitionDelay: `600ms`}}
          >
            Test !!!
            </div>
            <div 
          className={inProp ? styles.myThingDone : styles.myThing}  
          style={{transitionDelay: `800ms`}}
          >
            Test !!!
            </div>
          </div>
      </div>
      <div className={styles.belowBorder}></div>
    </div>

  )

}