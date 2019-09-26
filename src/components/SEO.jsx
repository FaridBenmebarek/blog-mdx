import React from "react"
import { Helmet } from "react-helmet"

const SEO = () => {
  return (
    <Helmet title="Blog MDX" htmlAttributes={{ lang: "fr" }}>
      <meta name="description" content="Blog utilsant le MDX" />
    </Helmet>
  )
}

export default SEO
