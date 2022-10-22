import React, { useEffect, useRef } from "react";
import style from './index.module.css';
import sr from "../../utils/sr";
import { srHeaderConfig, srItemConfig } from "../../utils/srConfig";

export type Props = {
  children?: React.ReactNode
}

export const Hero: React.FC<Props> = ({ children }) => {
  const heroRef = useRef(null)
  useEffect(() => {
    if (heroRef.current !== null) {
      sr?.reveal(heroRef.current, srItemConfig(600))
    }
  }, []);
  return (
    <div className={style.heroWrapper} ref={heroRef}>
      <div> hello </div>
    </div>
  )

}