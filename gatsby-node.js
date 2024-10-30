const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.nodes.forEach((node) => {
    createPage({
      path: node.frontmatter.slug || `/post/${node.id}`,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        id: node.id,
      },
    })
  })
} 
