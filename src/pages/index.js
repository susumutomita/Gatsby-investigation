import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <h1>Welcome to Markdown Docs</h1>
      <div>
        {posts.map(post => (
          <article key={post.id}>
            <h2>
              <Link to={post.frontmatter.slug || `/post/${post.id}`}>
                {post.frontmatter.title}
              </Link>
            </h2>
            <small>{post.frontmatter.date}</small>
            <p>{post.excerpt}</p>
          </article>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        excerpt
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          slug
        }
      }
    }
  }
`

export default IndexPage
