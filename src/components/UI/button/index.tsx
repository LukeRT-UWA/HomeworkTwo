import React from "react";
import styles from './index.module.css';

export type Props = {
  children?: React.ReactNode,
  onClick? : any,
}

export const Button: React.FC<Props> = ({ children, onClick }) => {

  return (
   <button className={styles.buttonStyle} onClick={onClick}>
      {children}
   </button>
  )
}