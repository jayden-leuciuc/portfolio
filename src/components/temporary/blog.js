import { graphql, Link } from "gatsby"
import * as React from "react"

import Layout from "../layout"
import Seo from "../seo"
{
  /* 
const Blog = ({ data }) => (
  
  <Layout>
    <Seo title="Blog" />
    <h1>Latest posts</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <h3>{post.node.frontmatter.title}</h3>
        <small>
          Posted by {post.node.frontmatter.author} on{" "}
          {post.node.frontmatter.date}
        </small>
        <br />
        <br />
        <Link to={post.node.frontmatter.path}>Read more</Link>
      </div>
    ))}
  </Layout>
)
  

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`

export default Blog*/
}
