import React, { useEffect, useRef } from "react";
import style from './index.module.css';
import sr from "../../utils/sr";
import { srHeaderConfig } from "../../utils/srConfig";

export type Props = {
  children?: React.ReactNode
}

export const Header: React.FC<Props> = ({ children }) => {
  const logoRef = useRef(null)
  const menuItem1 = useRef(null)
  const menuItem2 = useRef(null)
  const menuItem3 = useRef(null)
  const menuItem4 = useRef(null)
  useEffect(() => {
    if (logoRef.current !== null &&
      menuItem1.current !== null && 
      menuItem2.current !== null && 
      menuItem3.current !== null && 
      menuItem4.current !== null) {
   sr?.reveal(logoRef.current, srHeaderConfig(100))     
   sr?.reveal(menuItem1.current, srHeaderConfig(200))
   sr?.reveal(menuItem2.current, srHeaderConfig(300))
   sr?.reveal(menuItem3.current, srHeaderConfig(400))
   sr?.reveal(menuItem4.current, srHeaderConfig(500))
  }
  },[]);
  return (
    <>
      <div className={style.headerLayout}>
        <div ref={logoRef}>Logo</div>
        <div className={style.menuItems}> 
          <div ref={menuItem1}>Option 1</div>
          <div ref={menuItem2}>Option 2</div>
          <div ref={menuItem3}>Option 3</div>
          <div ref={menuItem4}>Option 4</div>
        </div>
      </div>
      <div className={style.belowBorder}></div>
    </>
  )

}