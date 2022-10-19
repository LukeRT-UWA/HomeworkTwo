import React from "react";
import style from './index.module.css'

export type Props = {
  children?: React.ReactNode
}

export const Header: React.FC<Props> = ({ children }) => {
  return (
    <div className={style.headerWrapper}>
      <div className={style.headerLayout}>
        <div>Logo</div>
        <div className={style.menuItems}> 
          <div>Option 1</div>
          <div>Option 2</div>
          <div>Option 3</div>
          <div>Option 4</div>
        </div>
      </div>
      <div className={style.belowBorder}></div>
    </div>
  )

}