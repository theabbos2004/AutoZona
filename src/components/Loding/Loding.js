import React from 'react'
import styles from "./index.module.scss"
export default function Loding() {
  return (
    <div className={styles.Loading_sector}>
      <span className={styles.loader}></span>
    </div>
  )
}
