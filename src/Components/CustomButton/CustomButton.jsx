import React from 'react'
import styles from "./CustomButton.module.css"
const CustomButton = ({text, paddingReceived = "0px 50px", width="fit-contain"}) => {
  return (
    <button className={styles.buttn} style={{
      padding: paddingReceived,
      width
    }}>
      {text}
    </button>
  )
}

export default CustomButton