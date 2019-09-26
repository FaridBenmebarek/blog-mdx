import React from "react"
import "./layout.css"
import styles from "../css/postTemplate.module.css"

const layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <div className={styles.template}>
        <p>Réalisé par </p>
        <a
          href="https://farid-benmebarek.fr"
          target="_blank"
          rel="noopener noreferrer"
        >
          Amiral du Web
        </a>
      </div>
    </>
  )
}

export default layout
