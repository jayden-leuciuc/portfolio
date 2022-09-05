import * as React from "react"
import { Link, graphql } from "gatsby"

import Hero from "../components/Hero/Hero"
import About from "../components/About/About"
import Projects from "../components/Projects/Project"
import Footer from "../components/Footer/Footer"
import Github from "../components/Github/Github.component"
const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <>
        <Hero />
        <About />
        <Projects />
        <Footer />
      </>
    )
  }

  return (
    <>
      <Hero />
      <Github />
      <About />
      <Footer />
    </>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
