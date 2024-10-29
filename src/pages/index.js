import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1>Welcome to Gatsby-investigation</h1>
    <p>This is a sample Gatsby site hosting MarkDown documents.</p>
    <Link to="/blog">Go to Blog</Link>
  </Layout>
)

export default IndexPage
