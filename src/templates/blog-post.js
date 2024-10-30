import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <article>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

export default BlogPost
