import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default () =>
  <Layout>
    <div>
      Blog Perso
      <Link to='/post/'>Post Page</Link>
    </div>
  </Layout>
