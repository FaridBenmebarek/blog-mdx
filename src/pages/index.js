import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default () => (
  <Layout>
    <div>
      <h2>Blog Perso</h2>
      <Link to="/post/">Post Page</Link>
    </div>
  </Layout>
)
