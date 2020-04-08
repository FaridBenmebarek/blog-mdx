import React from "react"
import "./layout.css"
import styles from "../css/postTemplate.module.css"
import SEO from "./SEO"

const layout = ({ children }) => {
  return (
    <>
      <SEO />
      <main>{children}</main>
      <div className={styles.template}>
        <p>Réalisé par </p>
        <a
          href="http://farid-benmebarek.fr"
          target="_blank"
          rel="noopener noreferrer"
        >
          Farid Benmebarek
        </a>
      </div>
    </>
  )
}

export default layout
