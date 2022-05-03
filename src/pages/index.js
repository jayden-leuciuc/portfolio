import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import { About, Hero, Projects } from "../components/componentExport"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <About />
    <Projects />
  </Layout>
)

export default IndexPage
