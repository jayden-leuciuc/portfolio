import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout.js"
import Header from "../components/Header/Header.component.jsx"
import { Footer } from "../components/componentExport.js"
export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <>
      <Header />
      <div className="blog-container">
        <hr />
        <h1>{post.frontmatter.title}</h1>
        <h4>
          Posted by {post.frontmatter.author} on {post.frontmatter.date}
        </h4>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <Footer />
    </>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`
