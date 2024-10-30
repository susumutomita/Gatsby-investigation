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

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      title: String
      date: Date @dateformat
      slug: String
      # 他の必要なフィールドを追加
    }
  `
  createTypes(typeDefs)
}
