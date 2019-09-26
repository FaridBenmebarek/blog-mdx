import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import styles from "../css/postTemplate.module.css"

const Error = () => {
  return (
    <Layout>
      <div className={styles.template}>
        <h2>La page n'existe pas...</h2>
        <br />
        <Link to="/" className={styles.link}>
          retour
        </Link>
      </div>
    </Layout>
  )
}

export default Error
